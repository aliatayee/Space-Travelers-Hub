import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket }) => (
  <div className="bg-white p-3 border rounded mb-5 m-3">
    <div className="md:grid grid-cols-2">
      <div className="md:mr-3 w-100 "><img className="rocket__img md-12 rounded-md" src={rocket.flickrImages[0]} alt="Rocket-Banner" /></div>
      <div>
        <h1>{rocket.name}</h1>
        <div>{rocket.description}</div>
      </div>
    </div>
  </div>
);
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.string,
  }).isRequired,
};

export default Rocket;
