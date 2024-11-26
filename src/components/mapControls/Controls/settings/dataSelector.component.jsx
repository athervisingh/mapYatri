import React from 'react';

const DateSelector = ({ selectedDate, handleDateChange }) => {
  return (
    <div>
      <label htmlFor="date" className="block text-sm font-medium mb-1">
        Select Date
      </label>
      <input
        id="date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateSelector;
