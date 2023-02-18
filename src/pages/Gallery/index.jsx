import React from 'react';

import api from '@/api/unsplash';
import { SearchContext } from '@/layouts/RootLayout';
import styles from './Gallery.module.scss';
import NotFound from '@/assets/not-found.png';

const Gallery = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [placeholder, setPlaceholder] = React.useState(null);
  const [collection, setCollection] = React.useState(null);
  const [collectionPhotos, setCollectionPhotos] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    const fetchRandomPhoto = async () => {
      const response = await api.get('/photos/random');
      setPlaceholder(response.data);
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
        setCollection(responseCollection.data);
        setCollectionPhotos(responsePhotos.data);
      } catch (e) {
        setCollectionPhotos(null);
      }
    };

    if (searchValue || isSearching) {
      setIsSearching(true);
      fetchCollection();
    }
  }, [searchValue]);

  return !isSearching ? (
    placeholder && (
      <div className={styles.placeholder}>
        <img
          src={placeholder.urls.full}
          alt={placeholder.alt_description}
          className={styles.placeholder_image}
        />
        <div className={styles.placeholder_title}>
          <h1>Gallery</h1>
          <p>Search the pictures of a collection by its id.</p>
          <p>More text.</p>
        </div>
      </div>
    )
  ) : collectionPhotos ? (
    <div className={styles.photos_container}>
      <h1 className={styles.collection_title}>{collection.title}</h1>
      <div className={styles.photos}>
        {collectionPhotos.map((photo, i) => (
          <div key={i}>
            <div className={styles.photo_card}>
              <img src={photo.urls.regular} alt={styles.alt_description} />
              <div className={styles.description}>
                <h3 className={styles.name}>
                  {photo.description ? photo.description : 'Without name'}
                </h3>
                <p className={styles.author}>Created by {photo.user.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.not_found_container}>
      <img src={NotFound} alt='not_found' />
    </div>
  );
};

export default Gallery;
