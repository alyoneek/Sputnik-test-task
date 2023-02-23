import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

export const SearchContext = React.createContext('');

const RootLayoutWithSearch = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header hasSearch={true} />
      <Outlet />
    </SearchContext.Provider>
  );
};

export default RootLayoutWithSearch;
