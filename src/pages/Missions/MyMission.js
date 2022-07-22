import { React } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer).filter(
    (rocket) => rocket.active === true,
  );

  if (missions.length === 0) {
    return (
      <>
        <div className="border p-3 pb-5">
          <h1 className="font-bold text-100 border-b">My Missions:</h1>
          <p>You have no missions</p>
        </div>
      </>
    );
  }
  return (
    <div className="border p-3 pb-5">
      <h1 className="font-bold text-100 border-b">My Missions:</h1>
      <ul>
        {missions.map((el) => (
          <li className="border-b" key={el.mission_id}>
            {el.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
