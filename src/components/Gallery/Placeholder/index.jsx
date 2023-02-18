import React from 'react';

import styles from './Placeholder.module.scss';

const Placeholder = ({ data }) => {
  return (
    <div className={styles.placeholder}>
      <img
        src={data.urls.full}
        alt={data.alt_description}
        className={styles.placeholder_image}
      />
      <div className={styles.placeholder_title}>
        <h1>Gallery</h1>
        <p>Search the pictures of a collection by its id.</p>
        <p>More text.</p>
      </div>
    </div>
  );
};

export default Placeholder;
