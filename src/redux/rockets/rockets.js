import axios from 'axios';

const FETCH_ROCKETS = 'space-travel-hub/rockets/FETCH_ROCKETS';
const CHANGE_STATUS = 'space-travel-hub/rockets/CHANGE_STATUS';
const initialState = [];

const onSuccess = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});
export const fetchRocketsData = async (dispatch) => {
  const res = await axios.get('https://api.spacexdata.com/v3/rockets');
  const rocketsFetched = res.data.map((item) => ({
    id: item.id,
    name: item.rocket_name,
    description: item.description,
    flickrImages: item.flickr_images,

  }));
  dispatch(onSuccess(rocketsFetched));
};

export const ChangeStatus = (id) => ({
  type: CHANGE_STATUS,
  id,
});
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.payload;
    }
    case CHANGE_STATUS: {
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    }
    default: { return state; }
  }
};

export default rocketReducer;
