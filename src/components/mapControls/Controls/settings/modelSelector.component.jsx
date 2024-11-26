import React from 'react';
import { ChevronDown } from 'lucide-react';

const ModelSelector = ({ selectedModel, handleModelChange, models }) => {
  return (
    <div className="relative">
      <select
        value={selectedModel}
        onChange={handleModelChange}
        className="appearance-none bg-gray-700 text-white p-2 rounded w-full pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default ModelSelector;
