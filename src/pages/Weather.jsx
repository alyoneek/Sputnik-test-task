import React from 'react';
import axios from 'axios';

import CurrentWeather from '@/components/Weather/CurrentWeather';

const Weather = () => {
  const [date, setDate] = React.useState(new Date());
  const [locationCoords, setLocationCoords] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocationCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  React.useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationCoords.lat}&lon=${locationCoords.lon}&appid=6fb7b9e3b3bb770125b23d4b54457037`
      );
      setLocation({
        city: response.data.name,
        country: response.data.sys.country,
      });
      setWeather(response.data);
      console.log(response.data);
    };

    locationCoords && fetchWeather();
  }, [locationCoords]);

  return weather && <CurrentWeather data={weather} />;
};

export default Weather;
