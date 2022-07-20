import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchMissionsHandler, ToggleMission } from '../redux/missions/missions';
import classes from './Missions.module.css';
import '../App.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (!missions.length) dispatch(FetchMissionsHandler());
  }, []);
  const HandleClick = (id) => dispatch(ToggleMission(id));
  return (
    <div className={classes.missions}>
      <table border={1}>
        <thead className={classes.tableHeader}>
          <tr>
            <th>Missions</th>
            <th>Descriptions</th>
            <th>Status</th>
            <th>{null}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((el) => (
            <tr key={el.mission_id}>
              <td className={classes.missionName}>{el.mission_name}</td>
              <td className={classes.missionDescription}>{el.description}</td>
              <td className={classes.btnRow} />
              <td className={classes.btnRow}>
                <button
                  type="button"
                  className={el.active ? 'activeButton' : 'inactiveButton'}
                  onClick={() => HandleClick(el.mission_id)}
                >
                  {el.active ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
