import { Copy, Download } from "lucide-react";
import { useState } from "react";
import './geojsonTabs.css';
import { toast} from 'sonner';

const OutputTab = () => {
    const [data, setData] = useState(
        JSON.stringify(
          {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [102.0, 0.5],
                },
                properties: {
                  name: "Point 1",
                  description: "This is a point feature.",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [103.0, 1.0],
                },
                properties: {
                  name: "Point 2",
                  description: "Another point feature.",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "LineString",
                  coordinates: [
                    [102.0, 0.0],
                    [103.0, 1.0],
                    [104.0, 0.0],
                    [105.0, 1.0],
                  ],
                },
                properties: {
                  name: "Line 1",
                  description: "A line feature connecting multiple points.",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [100.0, 0.0],
                      [101.0, 0.0],
                      [101.0, 1.0],
                      [100.0, 1.0],
                      [100.0, 0.0],
                    ],
                  ],
                },
                properties: {
                  name: "Polygon 1",
                  description: "A polygon feature representing a square.",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [102.0, 2.0],
                      [103.0, 2.0],
                      [103.0, 3.0],
                      [102.0, 3.0],
                      [102.0, 2.0],
                    ],
                    [
                      [102.2, 2.2],
                      [102.8, 2.2],
                      [102.8, 2.8],
                      [102.2, 2.8],
                      [102.2, 2.2],
                    ],
                  ],
                },
                properties: {
                  name: "Polygon with Hole",
                  description: "A polygon feature with a hole inside.",
                },
              },
            ],
          },
          null,
          2
        )
      );
      // const [data , setData] = useState(null)

  const handleDownload = () => {
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data).then(
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
        });}
    );
  };

  const renderWithLineNumbers = (text) => {
    return text.split("\n").map((line, index) => (
      <div key={index} className="flex">
        <span className="text-gray-400 w-8 text-right pr-2">{index + 1}</span>
        <pre className="flex-1 whitespace-pre-wrap">{line}</pre>
      </div>
    ));
  };

  return (
    <div className="rounded-lg  bg-bg-color">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 pt-4">
        <h2 className="text-lg font-semibold text-white">GeoJSON</h2>
        <div className="flex space-x-1">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            title="Copy GeoJSON to Clipboard"
            className="p-2 hover:text-blue-600 text-blue-500 transition " 
          >
            <Copy size={18}  />
          </button>
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="p-2 text-green-500 rounded-full hover:text-green-600 transition"
            title="Download GeoJSON File"
          >
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Output Section */}
      <div
        className="border rounded-lg h-[72vh] overflow-y-auto scrollbar-custom max-h-[400px] bg-bg-color border-button-color"
        >
        {data ? (
            <div className="text-sm text-button-select-color" >
            {renderWithLineNumbers(data)}
            </div>
        ) : (
            <p className="text-sm p-2 text-gray-500 italic">No data available.</p>
        )}
    </div>

    </div>
  );
};

export default OutputTab;
