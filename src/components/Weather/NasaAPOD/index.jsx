import React from 'react';
import { motion } from 'framer-motion';

import styles from './NasaAPOD.module.scss';

const NasaAPOD = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  let left = 0;
  let top = 0;
  const radiusLimit = 5;
  let didMove = false;

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: 'spring' } }}
      layout
      onClick={() => {
        if (!didMove) {
          setOpen(!open);
        }
      }}
      onMouseDown={(event) => {
        left = event.pageX;
        top = event.pageY;
      }}
      onMouseUp={(event) => {
        var deltaX = event.pageX - left;
        var deltaY = event.pageY - top;
        var euclidean = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        didMove = euclidean > radiusLimit;
      }}
      className={styles.card}
      style={{ borderRadius: '20px' }}
    >
      <motion.h1 layout='position'>
        {open ? data.title : 'Nasa Astrology Picture of the Day'}
      </motion.h1>
      {open && (
        <motion.div className={styles.content}>
          <p className={styles.description}>{data.explanation}</p>
          <img className={styles.image} src={data.url} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default NasaAPOD;
