import React from 'react';

import api, { CLIENT_ID } from '@/api/openWeather';
import CurrentWeather from '@/components/Weather/CurrentWeather';
import CurrentLocation from '@/components/Weather/CurrentLocation';
import styles from './Weather.module.scss';

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
      const response = await api.get(
        `/data/2.5/weather?lat=${locationCoords.lat}&lon=${locationCoords.lon}&units=metric&appid=${CLIENT_ID}`
      );
      setLocation({
        city: response.data.name,
        country: response.data.sys.country,
      });
      setWeather(response.data);
    };

    locationCoords && fetchWeather();
  }, [locationCoords]);

  return (
    <div className={styles.weather_container}>
      <div className={styles.weather}>
        {weather && <CurrentWeather data={weather} />}
        {location && (
          <CurrentLocation locationData={location} dateData={date} />
        )}
      </div>
    </div>
  );
};

export default Weather;
