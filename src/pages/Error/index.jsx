import React from 'react';
import { useRouteError } from 'react-router-dom';

import styles from './Error.module.scss';

const Error = () => {
  const error = useRouteError();

  return (
    <div className={styles.error_block}>
      <h1>Oops!</h1>
      <p className={styles.error_message}>
        Sorry, an unexpected error has occurred.
      </p>
      <p className={styles.error_status}>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
