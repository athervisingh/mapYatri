import * as React from "react";
import {
  Navigation,
  Globe,
  Share2,
  MapPinned,
  HelpCircle,
  X,
  Braces,
  SlidersHorizontal,
} from "lucide-react";
import NavigationControl from "./Controls/navigation.control";
import ShareContent from "./Controls/share.component";
import MLModelComponent from "./Controls/settings.component";

export function MapControls({ isAdding, setIsAdding }) {
  const [activePanel, setActivePanel] = React.useState(null);
  const [customContent, setCustomContent] = React.useState(null);
  const [activeMarker, setActiveMarker] = React.useState(null);  // Track active marker

  const controls = [
    { icon: Navigation, label: "Show My Location", panel: "navigation" },
    { icon: Globe, label: "Community", panel: "community" },
    { icon: Share2, label: "Share", panel: "share" },
    { icon: Braces, label: "Geo Json", panel: "geojson" },
    { icon: SlidersHorizontal, label: "Settings", panel: "settings" },
    {
      icon: MapPinned,
      label: isAdding ? "Stop Adding Markers" : "Add Marker",
      panel: "add-marker",
    },
    { icon: HelpCircle, label: "Help", panel: "help" },
  ];

  const handleControlClick = (control) => {
    if (control.panel === "add-marker") {
      setIsAdding((prev) => !prev);
      setActivePanel(null);
      setCustomContent(null);
    } else if (control.panel === "navigation") {
      setCustomContent(<NavigationControl />);
      setActivePanel(null);
    } else {
      setActivePanel(activePanel === control.panel ? null : control.panel); 
      setCustomContent(null);
    }
  };

  const handleMarkerClick = (markerId) => {
    // Toggle the clicked state for the marker
    setActiveMarker((prev) => (prev === markerId ? null : markerId));
  };

  return (
    <div className="absolute right-0 top-0 flex justify-between h-full z-[1000]">
      {/* Sidebar */}
      <div
        className={`h-full w-72 bg-[#212529] shadow-lg transform transition-transform duration-300 ${
          activePanel ? "translate-x-0 z-[2000]" : "translate-x-full z-[2000]"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3 text-white">
          <h1 className="text-lg font-semibold capitalize">
            {activePanel || ""}
          </h1>
          <button
            className="p-2 rounded hover:bg-gray-600"
            onClick={() => {
              setActivePanel(null);
              setCustomContent(null);
            }}
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-4 text-white">
          {customContent || (
            <>
              {activePanel === "share" && <ShareContent />}
              {activePanel === "settings" && <MLModelComponent />}
              {/* Add other panel components as needed */}
            </>
          )}
        </div>
      </div>

      {/* Controls */}
      <div
        className={`fixed right-0 flex flex-col gap-2 p-2 bg-[#212529] shadow-lg transition-transform duration-300 ${
          activePanel ? "-translate-x-72" : "translate-x-0"
        }`}
      >
        {controls.map((control) => (
          <button
            key={control.label}
            title={control.label}
            onClick={() => handleControlClick(control)}
            className={`flex items-center justify-center h-10 w-10 rounded-lg bg-gray-700 hover:bg-gray-600 ${
              activePanel === control.panel ? "bg-teal-600" : ""
            }`}
          >
            <control.icon className="h-5 w-5 text-white" />
            <span className="sr-only">{control.label}</span>
          </button>
        ))}
      </div>

     
    </div>
  );
}
