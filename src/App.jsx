import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Motive from "./pages/Motive";
import GetStarted from "./pages/GetStarted";
import MainApp from "./app/index";
import Profile from "./app/pages/Profile";
import EditProfile from "./app/pages/EditProfile";
import Messages from "./app/pages/Messages";
import Settings from "./app/pages/Settings";
import Notifications from "./app/pages/Notifications";
import Matches from "./app/pages/Matches";
import AppLayout from "./app/components/AppLayout"; // renamed from FacebookLayout
import './App.css';

function AppContent() {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');

  return (
    <>
      {!isAppRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/app" element={<AppLayout><MainApp /></AppLayout>} />
        <Route path="/app/matches" element={<AppLayout><Matches /></AppLayout>} />
        <Route path="/app/profile" element={<AppLayout><Profile /></AppLayout>} />
        <Route path="/app/profile/edit" element={<AppLayout><EditProfile /></AppLayout>} />
        <Route path="/app/messages" element={<AppLayout><Messages /></AppLayout>} />
        <Route path="/app/notifications" element={<AppLayout><Notifications /></AppLayout>} />
        <Route path="/app/settings" element={<AppLayout><Settings /></AppLayout>} />
        <Route path="/app/help" element={<AppLayout><MainApp /></AppLayout>} />
        <Route path="/chat/:id" element={<Messages />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
