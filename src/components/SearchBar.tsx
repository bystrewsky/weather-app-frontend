import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { getForecastRequest } from '../store/actions/forecast';
import { ForecastAction } from '../store/types/forecast';

interface SearchBarProps {
  // eslint-disable-next-line no-unused-vars
  searchForecast(cityName: string): void;
}

const SearchBar: React.FC<SearchBarProps> = props => {

  const { searchForecast } = props;
  const [cityName, setCityName] = useState('');

  return (
    <div className={'search-bar__container'}>
      <input
        className={'search-input'}
        type={'text'}
        name={'city-name'}
        placeholder={'type city name here...'}
        value={cityName}
        onChange={(e) => {setCityName(e.target.value)}}
      />
      <button className={'search-button'} onClick={() => { searchForecast(cityName) }}>
        Search
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<ForecastAction>) => ({
  searchForecast: (cityName: string) => {
    dispatch(getForecastRequest(cityName));
  },
});

export default connect(null, mapDispatchToProps)(SearchBar);
