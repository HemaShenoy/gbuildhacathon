import React, { useState } from 'react';

const DeadlineReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ title: '', deadline: '' });

  const addReminder = () => {
    if (newReminder.title && newReminder.deadline) {
      setReminders([...reminders, newReminder]);
      setNewReminder({ title: '', deadline: '' });
    }
  };

  const handleDelete = index => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  return (
    <div>
      <h1>Deadline Reminder</h1>
      <div>
        <label htmlFor="reminderTitle">Title:</label>
        <input
          type="text"
          id="reminderTitle"
          value={newReminder.title}
          onChange={e => setNewReminder({ ...newReminder, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="reminderDeadline">Deadline:</label>
        <input
          type="date"
          id="reminderDeadline"
          value={newReminder.deadline}
          onChange={e => setNewReminder({ ...newReminder, deadline: e.target.value })}
        />
      </div>
      <button onClick={addReminder}>Add Reminder</button>
      <div>
        <h2>Reminders</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              <input type="checkbox" onChange={() => handleDelete(index)} />
              {reminder.title} - {reminder.deadline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeadlineReminder;
