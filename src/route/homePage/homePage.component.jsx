import { MapContainer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import TilesLayer from "../../components/tilesLayer/tilesLayer.components"
import DrawControl from "../../components/drawControls/drawControls.component";
import Navigation from "../../components/navigation/navigation.component";
import SegmentButton from "../../components/segmentButton/segmentButton";
// import { selectGeojson } from "../../store/geojson/geojsonSelector";
// import { useSelector } from "react-redux";
const HomePage = () => {
  // const geojson = useSelector(selectGeojson);
  // console.log("geojonsredux",geojson)
  return (
    <div>
      <MapContainer
        center={[28.6139, 77.209]}
        zoom={4}
        style={{ height: "100vh", width: "100%", zIndex: "1" }}
      >
        <TilesLayer />
        <Navigation/>
        <DrawControl />
        <SegmentButton/>
      </MapContainer>
    </div>
  );
}

export default HomePage
