import React, { useState } from 'react';
import ModelSelector from './settings/modelSelector.component';
import BandConfiguration from './settings/bandConfig.component';
import ThresholdSliders from './settings/thresholdSlider.component';
import DateSelector from './settings/dateSelector.component';

const MLModelComponent = () => {  
  const [selectedModel, setSelectedModel] = useState('Mahalanobis Model');

  return (
    <div className="rounded-lg text-gray-100 ">
      <h2 className="text-xl font-semibold mb-4 flex items-center">ML Model Configuration</h2>

      <div className="space-y-4">
        <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

        <BandConfiguration/>

        <ThresholdSliders selectedModel={selectedModel}/>

        <DateSelector />
      </div>
    </div>
  );
};

export default MLModelComponent;
