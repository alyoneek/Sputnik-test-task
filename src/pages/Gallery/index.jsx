import React from 'react';

import api from '@/api/unsplash';
import { SearchContext } from '@/layouts/RootLayout';
import styles from './Gallery.module.scss';
import Placeholder from '@/components/Gallery/Placeholder';
import FluidGridLayout from '@/layouts/FluidGridLayout';
import Card from '@/components/Gallery/Card';
import NotFound from '@/components/ui/NotFound';

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
    placeholder && <Placeholder data={placeholder} />
  ) : collectionPhotos ? (
    <div className={styles.photos_container}>
      <h1 className={styles.collection_title}>{collection.title}</h1>
      <FluidGridLayout>
        {collectionPhotos.map((photo, i) => (
          <Card key={i} photo={photo} />
        ))}
      </FluidGridLayout>
    </div>
  ) : (
    <NotFound />
  );
};

export default Gallery;
