import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Rockets from '../Rockets/Rockets';
import store from '../../redux/configureStore';
import Rocket from '../../components/Rocket/Rocket';
import '@testing-library/jest-dom/extend-expect';

describe('Test the Rockets', () => {
  it('render the rockets', () => {
    const list = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(list).toMatchSnapshot();
  });

  it('Join and Leave Mission', async () => {
    const data = {
      id: 10,
      name: 'Rocket Test',
      description: 'Description',
      flickrImages: ['img1'],
    };
    await render(<Provider store={store}><Rocket key={data.id} rocket={data} /></Provider>);
    expect(screen.getByRole('button', { name: /Reserve Rocket/ })).toBeInTheDocument();
  });
});
