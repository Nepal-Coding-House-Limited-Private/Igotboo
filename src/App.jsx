import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppLayout from './app/components/AppLayout';
import Home from './app/pages/Home';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Profile from './app/pages/Profile';
import EditProfile from './app/pages/EditProfile';
import Chat from './app/pages/Chat';
import Search from './app/pages/Search';
import Explore from './app/pages/Explore';
import Notifications from './app/pages/Notifications';
import Saved from './app/pages/Saved';
import Settings from './app/pages/Settings';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/app" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute><AppLayout><Outlet /></AppLayout></ProtectedRoute>}>
            <Route index path="/app" element={<Home />} />
            <Route path="/app/search" element={<Search />} />
            <Route path="/app/explore" element={<Explore />} />
            <Route path="/app/chat" element={<Chat />} />
            <Route path="/app/notifications" element={<Notifications />} />
            <Route path="/app/profile" element={<Profile />} />
            <Route path="/app/profile/edit" element={<EditProfile />} />
            <Route path="/app/saved" element={<Saved />} />
            <Route path="/app/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/app" />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
};

export default App;