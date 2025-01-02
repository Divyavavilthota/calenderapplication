import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // Custom styles for the calendar

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  // Example data from the Dashboard
  const companies = [
    {
      name: "ZOHO",
      nextCommunication: { type: "LinkedIn Post", date: "2024-12-15" },
      status: "Overdue",
    },
    {
      name: "AMAZON",
      nextCommunication: { type: "Email", date: "2024-12-28" },
      status: "Due Today",
    }
    
  ];

  // Helper function to parse date from string format (handling invalid dates)
  const parseDate = (dateString) => {
    const parsedDate = new Date(dateString);
    // Check if the date is valid
    if (isNaN(parsedDate)) {
      return null; // Return null if the date is invalid
    }
    return parsedDate;
  };

  // Extract the overdue dates
  const getOverdueDates = () => {
    const overdueDates = [];
    companies.forEach((company) => {
      const nextCommunication = company.nextCommunication || {};
      const nextDate = parseDate(nextCommunication.date); // Parse the date string

      if (!nextDate) {
        // Skip if the date is invalid
        return;
      }

      // Check if the communication status is overdue or due today
      if (company.status === "Overdue" || company.status === "Due Today") {
        overdueDates.push({
          date: nextDate,
          name: company.name,
          status: company.status,
          type: nextCommunication.type || "Unknown Communication Type",
        });
      }
    });
    return overdueDates;
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Get all dates that need to be highlighted
  const overdueDates = getOverdueDates();

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Company Communications Calendar</h2>

      <div className="calendar-box">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date }) => {
            // Highlight overdue or due today dates
            if (overdueDates.some((overdue) => overdue.date.toDateString() === date.toDateString())) {
              return 'highlighted';
            }
            return null;
          }}
        />
      </div>

      <div className="overdue-info">
        <h3>Overdue Communications</h3>
        {overdueDates.length > 0 ? (
          <ul>
            {overdueDates.map((overdue, index) => (
              <li key={index} className={`status-${overdue.status.toLowerCase()}`}>
                {overdue.name}: {overdue.status} - Overdue on {overdue.type} (Date: {overdue.date.toLocaleDateString()})
              </li>
            ))}
          </ul>
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
