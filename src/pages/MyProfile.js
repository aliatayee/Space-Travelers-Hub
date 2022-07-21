import { React } from 'react';
import classes from './MyProfile.module.css';
import MyMission from './MyMission';

const MyProfile = () => (
  <div className={classes.myProfile}>
    <div>
      <MyMission />
    </div>
  </div>
);

export default MyProfile;
