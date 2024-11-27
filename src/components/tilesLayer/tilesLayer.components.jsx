import { TileLayer, LayersControl } from "react-leaflet";
const TilesLayer = () => {
  const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY
  return (
       <LayersControl data-tour="satellite-btn" position="bottomright">
          <LayersControl.BaseLayer name="Simple Map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked name="Satellite Map">
            <TileLayer
              url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${MAP_API_KEY}`}
            />
          </LayersControl.BaseLayer>
        </LayersControl>

  )
}

export default TilesLayer