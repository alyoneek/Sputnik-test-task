import React from 'react';

import { SearchContext } from '@/layouts/RootLayout';

const Gallery = () => {
  const { searchValue } = React.useContext(SearchContext);
  console.log(searchValue);
  return <div>Gallery</div>;
};

export default Gallery;
