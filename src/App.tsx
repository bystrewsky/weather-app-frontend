import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Chart from './components/Chart';

function App(): JSX.Element {
  return (
    <div className="App">
      <SearchBar />
      <Chart />
    </div>
  );
}

export default App;
