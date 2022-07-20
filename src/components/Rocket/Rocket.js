import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket }) => (
  <div className="bg-white p-3 border rounded mb-5 m-3">
    <div className="md:flex  grid-cols-2">
      <div className="md:mr-3 w-100 "><img className="rocket__img md-12 md:w-100 rounded-md" src={rocket.flickrImages[0]} alt="Rocket-Banner" /></div>
      <div className="grid content-between">
        <div>
          <h1 className="font-bold">{rocket.name}</h1>
          <div>{rocket.description}</div>
        </div>
        <div className="md:w-1/6 sm:w-full border-none pb-5"><button type="submit" className="form-input mt-3 py-2  w-full bg-blue-500 border-none text-white rounded-sm">Reserve Rocket</button></div>
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
