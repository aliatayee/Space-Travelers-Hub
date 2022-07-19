import axios from 'axios';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const missions = [];

export const FetchMissionsHandler = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return dispatch({ type: FETCH_MISSIONS, payload: response.data });
};

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => (
        {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          active: false,
        }));

    default:
      return state;
  }
};
export default missionsReducer;
