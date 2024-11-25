import * as React from "react";
import {
  Navigation,
  Info,
  Share2,
  MousePointer2,
  HelpCircle,
  X,
} from "lucide-react";
import NavigationControl from "./Controls/navigation.control";

export function MapControls({ isAdding, setIsAdding }) {
  const [activePanel, setActivePanel] = React.useState(null);
  const [customContent, setCustomContent] = React.useState(null); // For rendering handler

  const controls = [
    // Navigation control handler will only show the custom content, no sidebar toggle
    {
      icon: Navigation,
      label: "Show My Location",
      handler: () => setCustomContent(<NavigationControl />),
    },
    { icon: Info, label: "Info", panel: "info" },
    { icon: Share2, label: "Share", panel: "share" },
    {
      icon: MousePointer2,
      label: isAdding ? "Stop Adding Markers" : "Add Marker", // Dynamic label
      handler: () => {
        setIsAdding((prev) => !prev); // Toggle isAdding
        setActivePanel(null); // Close sidebar if open
        setCustomContent(null); // Clear custom content
      },
    },
    { icon: HelpCircle, label: "Help", panel: "help" },
  ];

  return (
    <div className="absolute right-0 top-0 flex justify-between h-full z-[1000]">
      {/* Sidebar */}
      <div
        className={`h-full w-72 bg-[#212529] shadow-lg transform transition-transform duration-300 ${
          activePanel ? "translate-x-0 z-[2000]" : "translate-x-full z-[2000]"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3 text-white">
          <h2 className="text-lg font-semibold capitalize">
            {activePanel || ""}
          </h2>
          <button
            className="p-2 rounded hover:bg-gray-600"
            onClick={() => {
              setActivePanel(null);
              setCustomContent(null); // Close custom content
            }}
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        {/* <div className="p-4 text-white">
          {customContent ? (
            customContent
          ) : (
            <p>Content for {activePanel} goes here...</p>
          )}
        </div> */}
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
            onClick={() => {
              if (control.handler) {
                control.handler(); // Execute handler if defined (like Add Marker)
              } else {
                setActivePanel(
                  activePanel === control.panel ? null : control.panel
                ); // Toggle sidebar
              }
            }}
            className={`flex items-center justify-center h-10 w-10 rounded-lg bg-gray-700 hover:bg-gray-600 ${
              (activePanel === control.panel) ? "bg-teal-600" : ""
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
