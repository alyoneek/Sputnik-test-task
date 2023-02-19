import React from 'react';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.main_features}>
        <div className={styles.left_col}>
          <div className={styles.temperature}>{data.main.temp}°</div>
          <div className={styles.title}>
            <div className={styles.name}>{data.weather[0].main}</div>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=''
            />
          </div>
          <div className={styles.description}>
            {data.weather[0].description}
          </div>
        </div>
        <div className={styles.right_col}>
          <div className={styles.feels_like}>
            Feels like {data.main.feels_like}°
          </div>
        </div>
      </div>
      <div className={styles.extended_features}>
        <div className={styles.pressure}>
          <div className={styles.pressure_label}>Pressure</div>
          <div className={styles.pressure_value}>{data.main.pressure}mb</div>
        </div>

        <div className={styles.visibility}>
          <div className={styles.visibility_label}>Visibility</div>
          <div className={styles.visibility_value}>{data.visibility}m</div>
        </div>

        <div className={styles.humadity}>
          <div className={styles.humadity_label}>Humadity</div>
          <div className={styles.humadity_value}>{data.main.humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
