import React, { Fragment } from 'react';
import NavBar from './components/Layout/NavBar';
import './App.css';
import Footer from './components/Layout/Footer';
import Router from './components/Routes/Router';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <br/>
      <Router/>
  
      <Footer />
    </Fragment>
  );
}

export default App;