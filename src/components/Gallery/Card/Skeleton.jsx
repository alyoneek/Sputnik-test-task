import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Card.module.scss';

const Skeleton = (props) => (
  <ContentLoader
    className={styles.photo_card}
    speed={2}
    viewBox='0 0 350 400'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='2' y='-1' rx='10' ry='10' />
  </ContentLoader>
);

export default Skeleton;
