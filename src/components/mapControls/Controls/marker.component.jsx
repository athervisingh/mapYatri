import { useMapEvents } from "react-leaflet";

const MapClickHandler = ({ isAdding, setMarkers }) => {
  useMapEvents({
    click(e) {
      if (isAdding) {
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { position: e.latlng },
        ]);
      }
    },
  });
  return null;
};

export default MapClickHandler;
