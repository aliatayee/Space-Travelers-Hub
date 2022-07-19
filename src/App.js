import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="missions" element={<h1>Missions</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
