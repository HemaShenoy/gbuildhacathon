import React, { useState } from 'react';

const AttendanceManagement = () => {
  const [courses] = useState([
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Chemistry' },
  ]);

  const [attendanceData, setAttendanceData] = useState({});

  const handleAttendanceChange = (courseId, date, attended) => {
    const newAttendanceData = { ...attendanceData };
    if (!newAttendanceData[courseId]) {
      newAttendanceData[courseId] = {};
    }
    newAttendanceData[courseId][date] = attended;
    setAttendanceData(newAttendanceData);
  };

  const renderCourseAttendance = () => {
    return courses.map(course => (
      <div key={course.id}>
        <h3>{course.name}</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Attended</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(attendanceData[course.id] || {}).map(date => (
              <tr key={date}>
                <td>{date}</td>
                <td>{attendanceData[course.id][date] ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="date"
          onChange={e => {
            const date = e.target.value;
            handleAttendanceChange(course.id, date, true); // Mark as attended when date is selected
          }}
        />
      </div>
    ));
  };

  return (
    <div>
      <h1>Attendance Management</h1>
      {renderCourseAttendance()}
    </div>
  );
};

export default AttendanceManagement;
