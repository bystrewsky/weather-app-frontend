import React, { useState } from 'react';

const SearchBar = (): JSX.Element => {

  const [cityName, setCityName] = useState('');

  return (
    <div className={'search-bar__container'}>
      <input
        className={'search-input'}
        type={'text'}
        name={'city-name'}
        placeholder={'type city name here...'}
        value={cityName}
        onChange={(e) => { setCityName(e.target.value)}}
      />
      <button className={'search-button'}>
        Search
      </button>
    </div>
  )
}

export default SearchBar;
