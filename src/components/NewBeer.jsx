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
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleAdd}>
          <div>
            <div style={{ fontWeight: 'bold' }}>Name</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                border: '1px solid lightgrey',
              }}
              name="name"
              type="text"
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Tagline</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                border: '1px solid lightgrey',
              }}
              name="tagline"
              type="text"
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Description</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                height: '200px',
                border: '1px solid lightgrey',
              }}
              name="description"
              type="text"
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>First Brewed</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                border: '1px solid lightgrey',
              }}
              name="first_brewed"
              type="text"
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Brewers Tips</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                border: '1px solid lightgrey',
              }}
              name="brewers_tips"
              type="text"
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Attenuation Level</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                border: '1px solid lightgrey',
              }}
              name="attenuation_level"
              type="number"
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Contuributed By</div>
            <input
              style={{
                width: '400px',
                borderRadius: '20px',
                border: '1px solid lightgrey',
              }}
              name="contributed_by"
              type="text"
            />
          </div>
          <div>
            <button
              style={{
                width: '400px',
                borderRadius: '20px',
                marginTop: '30px',
                backgroundColor: 'rgba(61,196,252,1)',
                color: 'white',
                height: '50px',
                cursor: 'pointer',
              }}
              type="submit"
            >
              ADD NEW
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
