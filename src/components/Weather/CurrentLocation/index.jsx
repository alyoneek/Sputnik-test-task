import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import styles from './CurrentLocation.module.scss';

const CurrentLocation = ({ locationData, dateData }) => {
  return (
    <div className={styles.date_location}>
      <div className={styles.location}>
        <div className={styles.location_icon}>
          <MdLocationOn />
        </div>
        <div>
          <div className={styles.label}>Current Location</div>
          <div className={styles.value}>
            {locationData.city}, {locationData.country}
          </div>
        </div>
      </div>
      <div className={styles.date_time}>
        <div className={styles.date}>
          {dateData.toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className={styles.time}>{dateData.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default CurrentLocation;
