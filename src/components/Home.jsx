import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newb from '../assets/new-beer.png';
import random from '../assets/random-beer.png';

const Home = () => {
  return (
    <div>
      <div>
        <img src={beers} alt="beers" />
        <Link to={'/beers'}>
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum dolor posuere, suscipit lectus sit amet, commodo eros. Cras ac
          elit et massa facilisis sagittis at et enim. Cras at neque malesuada,
          dignissim turpis vitae, cursus ante. Nunc ullamcorper molestie quam a
          convallis. Nam dignissim sodales venenatis. Aliquam nec finibus urna.
          Praesent feugiat ut arcu vel fermentum. Aenean lobortis auctor lectus,
          nec suscipit sem auctor vitae. Suspendisse dapibus tortor leo, nec
          accumsan est pharetra eu. Suspendisse sed auctor tellus. Integer sed
          neque lacus. Duis tempor convallis ultricies. Pellentesque semper
          rhoncus odio. Integer nec consequat ipsum.
        </p>
      </div>
      <div>
        <img src={newb} alt="nb" />
        <Link to={'/random-beer'}>
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum dolor posuere, suscipit lectus sit amet, commodo eros. Cras ac
          elit et massa facilisis sagittis at et enim. Cras at neque malesuada,
          dignissim turpis vitae, cursus ante. Nunc ullamcorper molestie quam a
          convallis. Nam dignissim sodales venenatis. Aliquam nec finibus urna.
          Praesent feugiat ut arcu vel fermentum. Aenean lobortis auctor lectus,
          nec suscipit sem auctor vitae. Suspendisse dapibus tortor leo, nec
          accumsan est pharetra eu. Suspendisse sed auctor tellus. Integer sed
          neque lacus. Duis tempor convallis ultricies. Pellentesque semper
          rhoncus odio. Integer nec consequat ipsum.
        </p>
      </div>
      <div>
        <img src={random} alt="ran" />
        <Link to={'/new-beer'}>
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum dolor posuere, suscipit lectus sit amet, commodo eros. Cras ac
          elit et massa facilisis sagittis at et enim. Cras at neque malesuada,
          dignissim turpis vitae, cursus ante. Nunc ullamcorper molestie quam a
          convallis. Nam dignissim sodales venenatis. Aliquam nec finibus urna.
          Praesent feugiat ut arcu vel fermentum. Aenean lobortis auctor lectus,
          nec suscipit sem auctor vitae. Suspendisse dapibus tortor leo, nec
          accumsan est pharetra eu. Suspendisse sed auctor tellus. Integer sed
          neque lacus. Duis tempor convallis ultricies. Pellentesque semper
          rhoncus odio. Integer nec consequat ipsum.
        </p>
      </div>
    </div>
  );
};

export default Home;
