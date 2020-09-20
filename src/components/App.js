import React from 'react';
import './App.css';
import Header from './Header';
import SodaControl from './SodaControl';
import SodaList from './SodaList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SodaList />
    </React.Fragment>
  );
}

export default App;
