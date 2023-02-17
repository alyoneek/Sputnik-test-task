import React from 'react';

import api from '@/api/unsplash';

import { SearchContext } from '@/layouts/RootLayout';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [placeholder, setPlaceholder] = React.useState(null);
  const [collection, setCollection] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    const fetchRandomPhoto = async () => {
      const response = await api.get('/photos/random');
      setPlaceholder(response.data.urls.full);
    };
    if (!placeholder) {
      fetchRandomPhoto();
    }
  }, []);

  React.useEffect(() => {
    // search  = ''
    const fetchCollection = async () => {
      try {
        const responseCollection = await api.get(`/collections/${searchValue}`);
        const responsePhotos = await api.get(
          responseCollection.data.links.photos.substring(
            api.defaults.baseURL.length
          )
        );
        setCollection(responsePhotos.data);
      } catch (e) {
        setCollection(null);
      }
    };

    if (searchValue || isSearching) {
      setIsSearching(true);
      fetchCollection();
    }
  }, [searchValue]);

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
