import axios from 'axios';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import { FetchMissionsHandler } from '../../redux/missions/missions';
import Missions from '../Missions/Missions';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');
const TestMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);
const response = {
  data: [
    {
      mission_id: 1,
      mission_name: 'mission name',
      description: 'mission description',
      active: false,
    },
  ],
};
axios.get.mockResolvedValue(response);
FetchMissionsHandler();
render(<TestMissions />);

describe('Missions page', () => {
  it('gets elements', () => {
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('Descriptions')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('Join and Leave Mission', () => {
    render(<TestMissions />);
    const Button = screen.getByRole('button');
    expect(screen.getByRole('button', { name: /Join Mission/ })).toBeInTheDocument();
    expect(screen.getByText(/Not A member/)).toBeInTheDocument();
    fireEvent.click(Button);
    expect(screen.getByRole('button', { name: /Leave Mission/ })).toBeInTheDocument();
    expect(screen.getByText(/Active Member/)).toBeVisible();
  });
});
