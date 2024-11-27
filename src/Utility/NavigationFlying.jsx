export const flyToCurrentLocation = async (map, setLoading) => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
  
    try {
      setLoading(true);
      const getLocation = () =>
        new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error.message)
          );
        });
  
      const { latitude, longitude } = await getLocation();
      map.flyTo([latitude, longitude], 16, { duration: 2 });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(`Error fetching location: ${error}`);
    }
  };
  