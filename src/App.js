import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/beers" element={<Beers />} />
        <Route path="/beer/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
