import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MyProfile from '../MyProfile/MyProfile';

describe('Test my profile', () => {
  it('Button component render', () => {
    const tree = renderer.create(<Provider store={store}><MyProfile /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Test My Rockets title', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.getByRole('heading', { name: /My Rockets/i })).toBeInTheDocument();
  });
  it('Test My Missions title', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.getByRole('heading', { name: /My Missions:/i })).toBeInTheDocument();
  });
});
