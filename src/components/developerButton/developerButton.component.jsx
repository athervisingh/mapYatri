import { useState } from "react";

const DeveloperButton = () => {
  const [isDevelopMode, setIsDevelopMode] = useState(false);

  const toggleDevelopMode = () => {
    setIsDevelopMode(!isDevelopMode);
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-white font-bold text-base">Develop Mode</span>
      <button
        onClick={toggleDevelopMode}
        className={`relative w-14 h-6 rounded-full flex items-center transition-colors duration-300 ${
          isDevelopMode ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
            isDevelopMode ? "translate-x-9" : "translate-x-1"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default DeveloperButton;
