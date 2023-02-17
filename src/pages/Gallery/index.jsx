import React from 'react';
import axios from 'axios';

import { SearchContext } from '@/layouts/RootLayout';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [placeholder, setPlaceholder] = React.useState(null);
  const [collection, setCollection] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    if (!placeholder) {
      axios
        .get(
          'https://api.unsplash.com/photos/random?client_id=goEq54-9yZx1WAKleCxXEyEzg4t_UBTDwxUwBQdbb5E'
        )
        .then((response) => {
          setPlaceholder(response.data.urls.full);
        });
    }
  }, []);

  React.useEffect(() => {
    // search  = ''
    if (searchValue || isSearching) {
      setIsSearching(true);
      try {
        axios
          .get(
            `https://api.unsplash.com/collections/${searchValue}/?client_id=goEq54-9yZx1WAKleCxXEyEzg4t_UBTDwxUwBQdbb5E`
          )
          .then((response) => {
            axios
              .get(
                response.data.links.photos +
                  '?client_id=goEq54-9yZx1WAKleCxXEyEzg4t_UBTDwxUwBQdbb5E'
              )
              .then((response) => {
                setCollection(response.data);
              });
          });
      } catch (e) {
        setCollection(null);
      }
    }
  }, [searchValue]);

  console.log(collection);

  return !isSearching ? (
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
  ) : collection ? (
    collection.map((photo, i) => <img key={i} src={photo.urls.regular} />)
  ) : (
    <div>not found</div>
  );
};

export default Gallery;
