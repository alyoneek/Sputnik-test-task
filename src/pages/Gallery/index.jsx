import React from 'react';

import api from '@/api/unsplash';
import { SearchContext } from '@/layouts/RootLayoutWithSearch';
import styles from './Gallery.module.scss';
import Placeholder from '@/components/Gallery/Placeholder';
import FluidGridLayout from '@/layouts/FluidGridLayout';
import Card from '@/components/Gallery/Card';
import Skeleton from '@/components/Gallery/Card/Skeleton';
import NotFound from '@/components/ui/NotFound';

const Gallery = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [placeholder, setPlaceholder] = React.useState(null);
  const [collection, setCollection] = React.useState(null);
  const [collectionPhotos, setCollectionPhotos] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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
    const fetchCollection = async () => {
      setIsLoading(true);
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
        setCollection(null);
        setCollectionPhotos(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchValue || isSearching) {
      setIsSearching(true);
      fetchCollection();
    }
  }, [searchValue]);

  return !isSearching ? (
    placeholder && <Placeholder data={placeholder} />
  ) : (
    <div className={styles.photos_container}>
      {isLoading ? (
        <FluidGridLayout>
          {[...new Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              height={Math.floor(Math.random() * (500 - 200 + 1) + 200)}
            />
          ))}
        </FluidGridLayout>
      ) : collectionPhotos ? (
        <>
          <h1 className={styles.collection_title}>{collection.title}</h1>{' '}
          <FluidGridLayout>
            {collectionPhotos.map((photo, i) => (
              <Card key={i} photo={photo} />
            ))}
          </FluidGridLayout>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Gallery;
