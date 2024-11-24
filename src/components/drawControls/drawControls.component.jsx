import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import Leaf from "leaflet";
import "leaflet-draw";
import { useDispatch } from 'react-redux';
import { setGeojson } from "../../store/geojson/geojsonReducer";
const DrawControl = () => {
  const dispatch = useDispatch();
  const map = useMap();
  window.type = true;

  useEffect(() => {
    const drawnItems = new Leaf.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new Leaf.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        polygon: true,
        polyline: false,
        rectangle: true,
        marker: false,
        circle: false,
        circlemarker: false,
      },
    });

    map.addControl(drawControl);
    const onCreate = (event) => {
      const layer = event.layer;
      drawnItems.addLayer(layer);
        const geojson = layer.toGeoJSON();
      console.log("geojson", geojson);
      dispatch(setGeojson(geojson));
      
      }

    map.on(Leaf.Draw.Event.CREATED, onCreate);

    return () => {
      map.off(Leaf.Draw.Event.CREATED, onCreate);
      map.removeControl(drawControl);
    };
  }, [map]);

  return null;
};

export default DrawControl;
