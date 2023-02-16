import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import styles from './Search.module.scss';

import { SearchContext } from '@/layouts/RootLayout';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.search}>
      <AiOutlineSearch className={styles.search_icon} />
      <input
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <AiOutlineClose
          className={styles.close_icon}
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
};

export default Search;
