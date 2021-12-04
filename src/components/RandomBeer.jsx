import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      const {
        image_url,
        name,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by,
      } = response.data;

      let rb = {
        image_url: image_url,
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        attenuation_level: attenuation_level,
        description: description,
        contributed_by: contributed_by,
      };
      setRandomBeer(rb);
    }
    getData();
  }, []);

  if (!randomBeer) {
    return <p>Loading . . . </p>;
  }
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img
          style={{ display: 'flex', width: '240px' }}
          src={randomBeer.image_url}
          alt="dt"
        />
        <div>{randomBeer.name}</div>
        <div>{randomBeer.tagline}</div>
        <div>{randomBeer.first_brewed}</div>
        <div>{randomBeer.attenuation_level}</div>
        <div>{randomBeer.description}</div>
        <div>{randomBeer.contributed_by}</div>
      </div>
    </div>
  );
};
export default RandomBeer;