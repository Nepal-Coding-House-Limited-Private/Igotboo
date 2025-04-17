import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from '../pages/About';
import GetStarted from '../pages/GetStarted';
import Motive from '../pages/Motive';
import Matches from './pages/Matches';

const MainApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/motive" element={<Motive />} />
      <Route path="/matches" element={<Matches />} />
      
    </Routes>
  );
};

export default MainApp;