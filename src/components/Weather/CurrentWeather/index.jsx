import React from 'react';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.main_features}>
        <div className={styles.left_col}>
          <div className={styles.temperature}>32°</div>
          <div className={styles.title}>
            <div className={styles.name}>Sunny</div>
            <img src='http://openweathermap.org/img/wn/10d@2x.png' alt='' />
          </div>
          <div className={styles.description}>scattered clouds</div>
        </div>
        <div className={styles.right_col}>
          <div className={styles.feels_like}>Feels like 37°</div>
          <div className={styles.uvi}>UV index 2.55</div>
          <div className={styles.clouds}>Cloud cover 40%</div>
        </div>
      </div>
      <div className={styles.extended_features}>
        <div className={styles.pressure}>
          <div className={styles.pressure_label}>Pressure</div>
          <div className={styles.pressure_value}>1014mb</div>
        </div>

        <div className={styles.visibility}>
          <div className={styles.visibility_label}>Visibility</div>
          <div className={styles.visibility_value}>10000m</div>
        </div>

        <div className={styles.humadity}>
          <div className={styles.humadity_label}>Humadity</div>
          <div className={styles.humadity_value}>65%</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
