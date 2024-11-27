import React, { useState } from 'react';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  return (
    <div className="relative">
      <label htmlFor="date" className="block text-sm font-medium mb-1">
        Select Date
      </label>
      <input
        id="date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-button-select-color calendar-white-icon"
      />
    </div>
  );
};

export default DateSelector;