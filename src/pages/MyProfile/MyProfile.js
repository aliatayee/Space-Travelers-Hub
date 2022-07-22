import { React } from 'react';
import MyMission from '../Missions/MyMission';
import MyRockets from '../../components/MyRockets/MyRockets';

const MyProfile = () => (
  <div className="grid grid-cols-2 m-4 gap-y-4 gap-x-8">
    <MyMission />
    <MyRockets />
  </div>
);

export default MyProfile;
