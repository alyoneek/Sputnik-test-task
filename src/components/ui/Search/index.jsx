import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import styles from './Search.module.scss';

import { SearchContext } from '@/layouts/RootLayout';

const Search = () => {
  const { setSearchValue } = React.useContext(SearchContext);
  const [currentValue, setCurrentValue] = React.useState('');

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      setSearchValue(currentValue);
    }
  };

  return (
    <div className={styles.search}>
      <AiOutlineSearch
        className={styles.search_icon}
        onClick={() => setSearchValue(currentValue)}
      />
      <input
        type='text'
        placeholder='Search a collection'
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      {currentValue && (
        <AiOutlineClose
          className={styles.close_icon}
          onClick={() => setCurrentValue('')}
        />
      )}
    </div>
  );
};

export default Search;
