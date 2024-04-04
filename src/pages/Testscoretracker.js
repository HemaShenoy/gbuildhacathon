import React, { useState } from 'react';

const TestScoreTracker = () => {
  // Initialize courses and scores state
  const [courses, setCourses] = useState([]);

  // Helper function to add a new course
  const addCourse = () => {
    const newCourse = {
      courseName: '',
      internalAssessment1: 0,
      internalAssessment2: 0,
      externalAssessment: 0,
    };
    setCourses([...courses, newCourse]);
  };

  // Helper function to handle changes in course data
  const handleCourseChange = (index, key, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][key] = value;
    setCourses(updatedCourses);
  };

  return (
    <div>
      <h1>Test Score Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Internal Assessment 1</th>
            <th>Internal Assessment 2</th>
            <th>External Assessment</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={course.courseName}
                  onChange={e => handleCourseChange(index, 'courseName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={course.internalAssessment1}
                  onChange={e =>
                    handleCourseChange(index, 'internalAssessment1', parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={course.internalAssessment2}
                  onChange={e =>
                    handleCourseChange(index, 'internalAssessment2', parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={course.externalAssessment}
                  onChange={e =>
                    handleCourseChange(index, 'externalAssessment', parseInt(e.target.value))
                  }
                />
              </td>
              <td>{course.internalAssessment1 + course.internalAssessment2 + course.externalAssessment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default TestScoreTracker;
