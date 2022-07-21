import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div className="border p-3 pb-5">
        <h1 className="font-bold text-100 border-b">My Rockets :</h1>
        { rockets.length ? rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
          <h3 key={rocket.id} className="border-b">
            {rocket.name}
          </h3>
        )) : <p>You reserved no rockets</p>}
      </div>
    </>
  );
};

export default MyRockets;
