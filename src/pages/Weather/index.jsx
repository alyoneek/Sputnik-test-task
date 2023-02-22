import React from 'react';

import { ThemeContext } from '@/App';
import { themeFromTime } from '@/utils/themeFromTime';
import weatherApi, { CLIENT_ID } from '@/api/openWeather';
import nasaApi from '@/api/nasa';
import CurrentWeather from '@/components/Weather/CurrentWeather';
import CurrentLocation from '@/components/Weather/CurrentLocation';
import NasaAPOD from '@/components/Weather/NasaAPOD';
import styles from './Weather.module.scss';

const Weather = () => {
  const { setTheme } = React.useContext(ThemeContext);
  const [date, setDate] = React.useState(new Date());
  const [locationCoords, setLocationCoords] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [weather, setWeather] = React.useState(null);
  const [apod, setApod] = React.useState(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDate(date);
      setTheme(themeFromTime(date.getHours()));
    }, 1000);
    return () => clearInterval(timer);
  });

  React.useEffect(() => {
    const fetchApod = async () => {
      const response = await nasaApi.get(
        `/planetary/apod?api_key=jj1hS2wLjBSvdGxKDz6MIsCrMeKyXPrCOWs4ylwz`
      );
      setApod(response.data);
    };

    navigator.geolocation.getCurrentPosition((position) => {
      setLocationCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    fetchApod();
  }, []);

  React.useEffect(() => {
    const fetchWeather = async () => {
      const response = await weatherApi.get(
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
      {apod && <NasaAPOD data={apod} />}
    </div>
  );
};

export default Weather;
