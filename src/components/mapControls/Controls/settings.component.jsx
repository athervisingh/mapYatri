import React, { useState } from 'react';
import ModelSelector from './settings/modelSelector.component';
import BandConfiguration from './settings/bandConfig.component';
import ThresholdSliders from './settings/thresholdSlider.component';
import DateSelector from './settings/dataSelector.component';

const MLModelComponent = () => {
  const [selectedModel, setSelectedModel] = useState('Mahalanobis Model');
  const [dropdown1, setDropdown1] = useState('B4');
  const [dropdown2, setDropdown2] = useState('B3');
  const [dropdown3, setDropdown3] = useState('B2');
  const [thresholdFrequency1, setThresholdFrequency1] = useState(5);
  const [thresholdFrequency2, setThresholdFrequency2] = useState(5);
  const [thresholdFrequency3, setThresholdFrequency3] = useState(5);
  const [selectedDate, setSelectedDate] = useState('');

  const models = ['Mahalanobis Model', 'Maximum LikelyHood', 'Rain Forest Classifier', 'Parallelopiped'];
  const options = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B10', 'B11', 'B12'];

  const handleModelChange = (e) => setSelectedModel(e.target.value);

  const handleThresholdChange = (index, value) => {
    if (index === 1) setThresholdFrequency1(value);
    if (index === 2) setThresholdFrequency2(value);
    if (index === 3) setThresholdFrequency3(value);
  };

  const handleDateChange = (e) => setSelectedDate(e.target.value);

  return (
    <div className="rounded-lg text-gray-100 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">ML Model Configuration</h2>

      <div className="space-y-4">
        <ModelSelector selectedModel={selectedModel} handleModelChange={handleModelChange} models={models} />

        <BandConfiguration
          dropdown1={dropdown1}
          dropdown2={dropdown2}
          dropdown3={dropdown3}
          setDropdown1={setDropdown1}
          setDropdown2={setDropdown2}
          setDropdown3={setDropdown3}
          options={options}
        />

        <ThresholdSliders
          selectedModel={selectedModel}
          thresholdFrequency1={thresholdFrequency1}
          thresholdFrequency2={thresholdFrequency2}
          thresholdFrequency3={thresholdFrequency3}
          handleThresholdChange={handleThresholdChange}
        />

        <DateSelector selectedDate={selectedDate} handleDateChange={handleDateChange} />
      </div>
    </div>
  );
};

export default MLModelComponent;
