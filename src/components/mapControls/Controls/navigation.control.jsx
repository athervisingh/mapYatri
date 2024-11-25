import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
const format = ({ data }) => {
    return parseFloat(data.toFixed(6));
  };
  
const NavigationControl = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      navigate(`/developer/?lat=${format({data:location.latitude})}&lon=${format({data:location.longitude})}&zoom=19`);
      window.location.reload();
    }
  }, [location, navigate]);

  return null;
};

export default NavigationControl;
