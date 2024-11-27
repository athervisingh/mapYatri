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
import { useMap } from "react-leaflet";
import { flyToCurrentLocation } from '../../Utility/NavigationFlying'
import ShareContent from "./Controls/share.component";
import MLModelComponent from "./Controls/settings.component";
import CommunityComp from "./Controls/community.component";
import GeoJSONTabManager from "./Controls/geojson.component";

export function MapControls({setLoading }) {
  const [activePanel, setActivePanel] = React.useState(null);
  const map = useMap(); // Get the map instance

  const controls = [
    { icon: Navigation, label: "Show My Location", panel: "navigation" },
    { icon: Globe, label: "Community", panel: "community" },
    { icon: Share2, label: "Share", panel: "share" },
    { icon: Braces, label: "Geo Json", panel: "geojson" },
    { icon: SlidersHorizontal, label: "Settings", panel: "settings" },
    {
      icon: MapPinned,
      label: "Add Marker",
      panel: "add-marker",
    },
    { icon: HelpCircle, label: "Help", panel: "help" },
  ];

  React.useEffect(() => {
    if(activePanel){
      map.dragging.disable();
      // map.keyboard.disable();

    }else{
      map.dragging.enable();
      // map.keyboard.enable();
    }
    
    return () => {
      map.dragging.enable();
      // map.keyboard.enable();
    };
  }, [activePanel, map]);



  const handleControlClick = (control) => {
    if (control.panel === "navigation") {
      flyToCurrentLocation(map, setLoading); // Trigger utility function
      setActivePanel(null);
    } else {
      setActivePanel(activePanel === control.panel ? null : control.panel);
    }
  };

  return (
    <div className="absolute right-0 top-0 flex justify-between h-full z-[1000]">
      {/* Sidebar */}
      <div
        className={`h-full w-72 bg-bg-color shadow-lg transform transition-transform duration-300 ${
          activePanel ? "translate-x-0 z-[2000]" : "translate-x-full z-[2000]"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3 text-white">
          <h1 className="text-lg font-semibold capitalize">
            {activePanel || ""}
          </h1>
          <button
            className="p-2 rounded hover:bg-gray-600"
            onClick={() => setActivePanel(null)}
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-4 text-white">
          {activePanel === "share" && <ShareContent />}
          {activePanel === "settings" && <MLModelComponent />}
          {activePanel === "geojson" && <GeoJSONTabManager />}
          {activePanel === "community" && <CommunityComp />}
        </div>
      </div>

      {/* Controls */}
      <div
        className={`fixed right-0 flex flex-col gap-2 p-2 bg-bg-color shadow-lg transition-transform duration-300 ${
          activePanel ? "-translate-x-72" : "translate-x-0"
        }`}
      >
        {controls.map((control) => (
          <button
            key={control.label}
            title={control.label}
            onClick={() => handleControlClick(control)}
            className={`flex items-center justify-center h-10 w-10 rounded-lg bg-gray-700 hover:bg-gray-600 ${
              activePanel === control.panel ? "bg-button-select-color" : ""
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
