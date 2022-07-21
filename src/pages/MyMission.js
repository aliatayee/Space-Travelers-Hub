import { React } from 'react';
import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer).filter(
    (rocket) => rocket.active === true,
  );

  if (missions.length === 0) {
    return (
      <>
        <h2>My Missions</h2>
        <p>You have no missions</p>
      </>
    );
  }
  return (
    <div>
      <h2>My Missions</h2>
      <ul className={classes.missionList}>
        {missions.map((el) => (
          <li className={classes.listItem} key={el.mission_id}>
            {el.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
