import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './Rocket.css';
import { fetchRocketsData, ChangeStatus } from '../../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const rocketHandleBtn = (id) => {
    dispatch(ChangeStatus(id));
  };
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRocketsData);
  }, []);
  return (
    <div className="bg-white p-3 border rounded mb-5 m-3">
      <div className="md:flex  grid-cols-2">
        <div className="md:mr-3 w-100 "><img className="rocket__img md-12 md:w-100 rounded-md" src={rocket.flickrImages[0]} alt="Rocket-Banner" /></div>
        <div className="grid content-between">
          <div>
            <h1 className="font-bold">{rocket.name}</h1>
            <div>
              {rocket.reserved && (
              <badge className="bg-blue-500 p-1 text-white rounded-sm pr-3 pl-3">Reserved</badge>
              )}
              {rocket.description}
            </div>
          </div>
          <div className=" sm:w-full border-none pb-5">

            {rocket.reserved
              ? (
                <button
                  onClick={() => rocketHandleBtn(rocket.id)}
                  type="button"
                  className="form-input mt-3 py-2 pr-4 pl-4 bg-red-400 border-none text-white rounded-sm"
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  onClick={() => rocketHandleBtn(rocket.id)}
                  type="button"
                  name="reserveBtn"
                  className="form-input mt-3 py-2 pr-4 pl-4 bg-blue-500 border-none text-white rounded-sm"
                >
                  Reserve Rocket
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    reserved: PropTypes.bool,
    description: PropTypes.string,
    flickrImages: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default Rocket;
