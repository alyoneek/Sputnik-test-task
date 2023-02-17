import React from 'react';
import axios from 'axios';

import { SearchContext } from '@/layouts/RootLayout';

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
          setPlaceholder(response.data.urls.regular);
        });
    }
  }, []);
  return (
    !isSearching && <img src={placeholder} alt='' style={{ opacity: 0.5 }} />
  );
};

export default Gallery;
