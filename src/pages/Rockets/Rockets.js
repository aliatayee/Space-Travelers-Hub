import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from '../../redux/rockets/rockets';
import './Rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData);
  }, []);

  return (
    <div className="mb-5 mt-5 ">
      {rockets.length ? rockets.map((rocket) => <h1 key={rocket.id}>{rocket.name}</h1>)
        : <p>No Rockets available!</p>}
    </div>
  );
};
export default Rockets;
