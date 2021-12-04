import axios from 'axios';
import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    let newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value,
    };
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
    navigate('/');
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleAdd}>
        <div>Name</div>
        <input name="name" type="text" />
        <div>Tagline</div>
        <input name="tagline" type="text" />
        <div>Description</div>
        <input name="description" type="text" />
        <div>First Brewed</div>
        <input name="first_brewed" type="text" />
        <div>Brewers Tips</div>
        <input name="brewers_tips" type="text" />
        <div>Attenuation Level</div>
        <input name="attenuation_level" type="number" />
        <div>Contuributed By</div>
        <input name="contributed_by" type="text" />
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
};

export default NewBeer;
