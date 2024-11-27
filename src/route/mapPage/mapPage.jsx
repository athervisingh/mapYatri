import { useState } from "react";
import { MapContainer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TilesLayer from "../../components/tilesLayer/tilesLayer.components";
import DrawControl from "../../components/drawControls/drawControls.component";
import SegmentButton from "../../components/segmentButton/segmentButton";
import MapUpdater from "../../components/mapUpdater/mapUpdater";
import {MapControls} from '../../components/mapControls/mapControls';
import { Toaster } from 'sonner'
import Loading from "../../components/Loading";

const MapPage = ({ developerMode }) => {
  const params = new URLSearchParams(window.location.search);
  const mapInfo = {
    zoom: parseInt(params.get("zoom"), 10) || 4,
    XAxis: parseFloat(params.get("lat")) || 28.6139,
    YAxis: parseFloat(params.get("lon")) || 77.209,
  };

  const [loading, setLoading] = useState(false);
  return (
    <div>
      <MapContainer
        center={[mapInfo.XAxis, mapInfo.YAxis]}
        zoom={mapInfo.zoom}
        style={{ height: "92.6vh", width: "100%" }}
        doubleClickZoom={false}
        minZoom={4}
      >
        {loading && <Loading/>}

        <TilesLayer />
        <DrawControl />
        <SegmentButton />
        <MapUpdater />  
        {developerMode && <MapControls setLoading={setLoading}/>}
      </MapContainer>
      <Toaster position="top-center" expand={false} duration={2000}/>
    </div>
  );
};

export default MapPage;
