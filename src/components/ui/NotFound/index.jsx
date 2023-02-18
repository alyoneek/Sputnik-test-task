import React from 'react';

import NotFoundImage from '@/assets/not-found.png';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.not_found_container}>
      <img src={NotFoundImage} alt='not_found' />
    </div>
  );
};

export default NotFound;
