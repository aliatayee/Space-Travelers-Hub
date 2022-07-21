import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div>
        {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
          <h3 key={rocket.id}>
            {rocket.name}
          </h3>
        ))}
      </div>
    </>
  );
};

export default MyRockets;
