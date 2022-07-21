import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from '../../redux/rockets/rockets';
import Rocket from '../../components/Rocket/Rocket';
import './Rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRocketsData);
  }, []);

  return (
    <div className="mb-5 mt-5 ">
      {rockets.length ? rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
        : <p>No Rockets available!</p>}
    </div>
  );
};
export default Rockets;
