import React, { useState, useEffect } from 'react';
import { db } from './firebase';

const TestScoreTracker = () => {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranches = async () => {
      const branchesSnapshot = await db.collection('branches').get();
      const branchesData = branchesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBranches(branchesData);
      setLoading(false);
    };
    fetchBranches();
  }, []);

  const handleBranchChange = async event => {
    setSelectedBranch(event.target.value);
    setSelectedSemester(''); // Reset selected semester when branch changes
    const semestersSnapshot = await db.collection(`branches/${event.target.value}/semesters`).get();
    const semestersData = semestersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCourses([]);
    setSelectedSemester('');
    setCourses(semestersData);
  };

  const handleSemesterChange = async event => {
    setSelectedSemester(event.target.value);
    const coursesSnapshot = await db.collection(`branches/${selectedBranch}/semesters/${event.target.value}/courses`).get();
    const coursesData = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCourses(coursesData);
  };

  const updateMarks = async (courseId, field, value) => {
    await db.doc(`branches/${selectedBranch}/semesters/${selectedSemester}/courses/${courseId}`).update({
      [field]: value
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Test Score Tracker</h1>
      <label>Select Branch:</label>
      <select value={selectedBranch} onChange={handleBranchChange}>
        <option value="">Select a branch</option>
        {branches.map(branch => (
          <option key={branch.id} value={branch.id}>{branch.branchName}</option>
        ))}
      </select>

      {selectedBranch && (
        <>
          <label>Select Semester:</label>
          <select value={selectedSemester} onChange={handleSemesterChange}>
            <option value="">Select a semester</option>
            {courses.map(semester => (
              <option key={semester.id} value={semester.id}>{semester.semesterName}</option>
            ))}
          </select>

          {selectedSemester && (
            <table>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Internal Assessment 1</th>
                  <th>Internal Assessment 2</th>
                  <th>External</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.courseName}</td>
                    <td contentEditable onBlur={(e) => updateMarks(course.id, 'internalAssessment1', parseFloat(e.target.innerText))}>{course.internalAssessment1}</td>
                    <td contentEditable onBlur={(e) => updateMarks(course.id, 'internalAssessment2', parseFloat(e.target.innerText))}>{course.internalAssessment2}</td>
                    <td contentEditable onBlur={(e) => updateMarks(course.id, 'external', parseFloat(e.target.innerText))}>{course.external}</td>
                    <td>{(parseFloat(course.internalAssessment1) || 0) + (parseFloat(course.internalAssessment2) || 0) + (parseFloat(course.external) || 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default TestScoreTracker;
