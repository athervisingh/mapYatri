import React, { useState, useRef } from "react";
import { Copy, FolderInput, Pencil, Save, X } from "lucide-react";
import './geojsonTabs.css';
import { toast} from 'sonner';

const InputTab = () => {
  const [jsonData, setJsonData] = useState('');
  const [isEditing, setIsEditing] = useState(false);  // Track if in edit mode
  const [originalData, setOriginalData] = useState(null); // To store the original data
  const [editableData, setEditableData] = useState(null);  // Editable JSON data
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/json") {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const parsedData = JSON.parse(e.target.result);
          setJsonData(parsedData);
          setOriginalData(parsedData); 
          setEditableData(JSON.stringify(parsedData, null, 2)); 
        } catch (error) {
          // alert("Invalid JSON file. Please upload a valid JSON.");
          // console.error("Parsing error:", error);
          toast.error('Invalid JSON file!', {
            style: {
              backgroundColor: '#bd4747',
              color: 'white',           
            },
          });
        }
      };

      reader.onerror = () => {
        // alert("Error reading the file. Please try again.");
        toast.error('Error reading the file. Please try again.', {
          style: {
            backgroundColor: '#bd4747',
            color: 'white',           
          },
        });
      };

      reader.readAsText(selectedFile); // Read the file as text
    } else {
      // alert("Please upload a valid .json file.");
      reader.onerror = () => {
        // alert("Error reading the file. Please try again.");
        toast.error('Please upload a valid .json file.', {
          style: {
            backgroundColor: '#bd4747',
            color: 'white',           
          },
        });
      };
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2)).then(
      () => {
        toast.success('Data copied to clipboard!', {
          style: {
            backgroundColor: '#5ac85a',
            color: 'white',           
          },
        });
      },
      () => {
        toast.error('Failed to copy data.', {
          style: {
            backgroundColor: '#bd4747',
            color: 'white',           
          },
        });
      }
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditableData(JSON.stringify(jsonData, null, 2));  // Make the data editable
  };

  const handleSave = () => {
    try {
      const parsedData = JSON.parse(editableData); // Parse the updated data
      setJsonData(parsedData);  // Save the new data
      setOriginalData(parsedData); // Update the original data
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      // alert("Invalid JSON format. Please correct the changes.");
      toast.error('Invalid JSON format. Please correct the changes.', {
        style: {
          backgroundColor: '#bd4747',
          color: 'white',           
        },
      });
      // console.error("Invalid JSON error:", error);
    }
  };

  const handleCancel = () => {
    setEditableData(JSON.stringify(originalData, null, 2)); // Reset to original data
    setIsEditing(false); // Exit edit mode
  };

  const renderWithLineNumbers = (text) => {
    return text.split("\n").map((line, index) => (
      <div key={index} className="flex">
        <span className="text-gray-400 w-8 text-right pr-2">{index + 1}</span>
        <pre className="flex-1 whitespace-pre-wrap">{line}</pre>
      </div>
    ));
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="rounded-lg bg-bg-color">
      <div className="flex justify-between items-center mb-4 pt-4">
        <h2 className="text-lg font-semibold text-white">GeoJSON</h2>
        <div className="flex space-x-1 items-center">
          <button
            onClick={handleCopy}
            title="Copy GeoJSON to Clipboard"
            className="flex items-center justify-center p-1 hover:text-blue-600 transition"
          >
            <Copy size={20} className="text-blue-500" />
          </button>

          {!isEditing ? (
            <>
            <button
              onClick={handleUploadClick}
              className="p-2 text-green-500 rounded-full hover:text-green-600 transition"
              title='Upload from computer'
            >
              <FolderInput size={18} />
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
            </button>
          
            <button
              onClick={handleEdit}
              className="flex items-center justify-center p-2 text-blue-500 hover:text-blue-700 transition"
              title='Edit'
            >
              <Pencil size={18} />
            </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="flex items-center justify-center p-2 text-green-500 hover:text-green-700 transition"
                title='Save Changes'
              >
                <Save size={18} />
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center p-2 text-red-500 hover:text-red-700 transition"
                title='Cancel'
              >
                <X size={18}/>
              </button>
            </>
          )}
        </div>
      </div>


      <div
        className={`border rounded-lg h-[70vh] scrollbar-custom max-h-[400px] bg-bg-color border-button-color ${isEditing ? 'overflow-y-hidden': 'overflow-y-auto' }`}
        
      >
        {isEditing ? (
          <textarea
            value={editableData}
            onChange={(e) => setEditableData(e.target.value)}
            className="w-full h-full bg-bg-color text-white p-2 rounded-md"
          />
        ) : jsonData ? (
          <div className="text-sm text-button-select-color" >
            {renderWithLineNumbers(JSON.stringify(jsonData, null, 2))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic p-2">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default InputTab;
