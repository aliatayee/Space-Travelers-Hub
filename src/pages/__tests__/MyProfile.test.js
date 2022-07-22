import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MyProfile from '../MyProfile/MyProfile';

it('Button component render', () => {
  const tree = renderer.create(<Provider store={store}><MyProfile /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
