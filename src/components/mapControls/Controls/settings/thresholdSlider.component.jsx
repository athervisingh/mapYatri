import React, { useState } from "react";

const ThresholdSliders = ({selectedModel}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [thresholdFrequency1, setThresholdFrequency1] = useState(5);
  const [thresholdFrequency2, setThresholdFrequency2] = useState(5);
  const [thresholdFrequency3, setThresholdFrequency3] = useState(5);
  const handleThresholdChange = (index, value) => {
    if (index === 1) setThresholdFrequency1(value);
    if (index === 2) setThresholdFrequency2(value);
    if (index === 3) setThresholdFrequency3(value);
  };

  const renderSlider = (index, thresholdValue) => {
    const percentage = (thresholdValue - 1) * 11.1;

    return (
      <div
        className="relative group mb-8"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="relative">
          <input
            id={`threshold${index}`}
            type="range"
            min="1"
            max="10"
            value={thresholdValue}
            onChange={(e) => handleThresholdChange(index, Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer focus:outline-none"
          />
        </div>
        <div
          className={`absolute -top-8 left-0 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs transition-all duration-200 ${
            hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            left: `${percentage}%`,
          }}
        >
          <div className="font-semibold">{thresholdValue}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-lg ">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-100">
        Threshold Frequency
      </h2>
      {selectedModel === "Mahalanobis Model" ? (
        <div className="space-y-8">
          {renderSlider(1, thresholdFrequency1)}
          {renderSlider(2, thresholdFrequency2)}
          {renderSlider(3, thresholdFrequency3)}
        </div>
      ) : (
        <div>
          {renderSlider(1, thresholdFrequency1)} {/* Use index 1 consistently */}
        </div>
      )}
    </div>
  );
};

export default ThresholdSliders;
