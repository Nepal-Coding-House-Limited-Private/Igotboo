import { Link, useLocation } from "react-router-dom";
import { Home, User, Bell, MessageSquare, Settings } from "lucide-react";
import NotificationPopup from "./NotificationPopup";

const AppNavbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/app" className="flex items-center">
            <span className="text-2xl font-bold text-red-500">Wemet</span>
          </Link>

          {/* Main Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              to="/app"
              className={`flex items-center space-x-2 ${
                isActive("/app") ? "text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/app/profile"
              className={`flex items-center space-x-2 ${
                isActive("/app/profile") ? "text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Link
              to="/app/messages"
              className={`flex items-center space-x-2 ${
                isActive("/app/messages") ? "text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </Link>
            <NotificationPopup />
            <Link
              to="/app/settings"
              className={`flex items-center space-x-2 ${
                isActive("/app/settings") ? "text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar; 