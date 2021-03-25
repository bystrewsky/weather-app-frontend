import React, { FunctionComponent } from 'react';
import './App.css';
import Chart from './components/Chart';
import SearchBar from './components/SearchBar';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <SearchBar />
      <Chart />
    </div>
  );
}

export default App;
