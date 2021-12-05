import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    async function getData() {
      let response = null;

      if (!searchTerm) {
        response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      } else {
        response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`
        );
      }

      setAllBeers(response.data);
    }
    getData();
  }, [searchTerm]);

  if (!allBeers.length) {
    return <p>Loading . . . </p>;
  }

  return (
    <div style={{}}>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <input
          onChange={handleSearchTermChange}
          type="text"
          placeholder="Search beer"
          value={searchTerm}
        ></input>
      </div>
      {allBeers.map((beer) => {
        return (
          <div
            key={beer._id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div>
              <img
                src={beer.image_url}
                style={{ height: '400px', padding: '20px' }}
                alt="br"
              />
            </div>
            <div style={{ paddingLeft: '50px' }}>
              <Link to={`/beer/${beer._id}`}>
                <div>{beer.name}</div>
              </Link>
              <div>{beer.tagline}</div>
              <div>{beer.contributed_by}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Beers;
