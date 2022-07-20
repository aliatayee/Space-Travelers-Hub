import axios from 'axios';

const FETCH_ROCKETS = 'space-travel-hub/rockets/FETCH_ROCKETS';
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
    type: item.rocket_type,
    flickrImages: item.flickr_images,

  }));
  dispatch(onSuccess(rocketsFetched));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.payload;
    }
    default: { return state; }
  }
};

export default rocketReducer;
