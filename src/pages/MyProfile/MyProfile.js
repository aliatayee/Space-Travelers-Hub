import { React } from 'react';
import classes from '../Missions/MyProfile.module.css';
import MyMission from '../Missions/MyMission';
import MyRockets from '../../components/MyRockets/MyRockets';

const MyProfile = () => (
  <div className={classes.myProfile}>
    <div>
      <MyMission />
      <MyRockets />
    </div>
  </div>
);

export default MyProfile;
