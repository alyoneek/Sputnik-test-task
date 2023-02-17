import React from 'react';
import axios from 'axios';

import { SearchContext } from '@/layouts/RootLayout';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [placeholder, setPlaceholder] = React.useState(null);
  //const [collection, setCollection] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    if (!placeholder) {
      axios
        .get(
          'https://api.unsplash.com/photos/random?client_id=rvFHIBJq97ulHnhSkSL_5A6zq_N7RMivPQyVRChOQlM'
        )
        .then((response) => {
          setPlaceholder(response.data.urls.full);
        });
    }
  }, []);

  return (
    !isSearching && (
      <div className={styles.placeholder}>
        <img
          src={placeholder}
          alt='gallery_placeholder'
          className={styles.placeholder_image}
        />
        <div className={styles.placeholder_title}>
          <h1>Gallery</h1>
          <p>Search the pictures of a collection by its id.</p>
          <p>More text.</p>
        </div>
      </div>
    )
  );
};

export default Gallery;
