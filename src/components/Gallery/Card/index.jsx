import React from 'react';

import styles from './Card.module.scss';

const Card = ({ photo }) => {
  return (
    <>
      <div className={styles.photo_card}>
        <img src={photo.urls.regular} alt={styles.alt_description} />
        <div className={styles.description}>
          <h3 className={styles.name}>
            {photo.description ? photo.description : 'Without name'}
          </h3>
          <p className={styles.author}>Created by {photo.user.name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
