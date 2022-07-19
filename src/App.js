import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Rockets from './pages/Rockets/Rockets';
import Missions from './pages/Missions';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
