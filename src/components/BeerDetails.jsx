import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const BeerDetails = () => {
  const [beerDetail, setBeerDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
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

      let bd = {
        image_url: image_url,
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        attenuation_level: attenuation_level,
        description: description,
        contributed_by: contributed_by,
      };

      setBeerDetail(bd);
    }
    getData();
  }, [id]);

  if (!beerDetail) {
    return <p>Loading . . . </p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img
        style={{ display: 'flex', width: '240px' }}
        src={beerDetail.image_url}
        alt="dt"
      />
      <div>{beerDetail.name}</div>
      <div>{beerDetail.tagline}</div>
      <div>{beerDetail.first_brewed}</div>
      <div>{beerDetail.attenuation_level}</div>
      <div>{beerDetail.description}</div>
      <div>{beerDetail.contributed_by}</div>
    </div>
  );
};
export default BeerDetails;
