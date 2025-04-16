import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  MessageSquare,
  User,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Plus,
  Users,
  Bookmark,
  HelpCircle,
} from "lucide-react";

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Messages", href: "/app/messages", icon: MessageSquare },
    { name: "Profile", href: "/app/profile", icon: User },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Friends", href: "/app/friends", icon: Users },
    { name: "Saved", href: "/app/saved", icon: Bookmark },
    { name: "Settings", href: "/app/settings", icon: Settings },
  ];

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white border-r transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo and Toggle */}
        <div className="p-4 flex items-center justify-between border-b">
          {isSidebarOpen && (
            <Link to="/app" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Wemet</span>
            </Link>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {isSidebarOpen ? (
              <X size={20} className="text-gray-500" />
            ) : (
              <Menu size={20} className="text-gray-500" />
            )}
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={isSidebarOpen ? "Search..." : ""}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50 ${
                !isSidebarOpen && "w-10"
              }`}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 ${
                  isActive ? "bg-red-50 text-red-500" : ""
                }`}
              >
                <item.icon
                  size={20}
                  className={`${
                    isActive ? "text-red-500" : "text-gray-500"
                  }`}
                />
                {isSidebarOpen && (
                  <span className="ml-3">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t">
          <div className="space-y-2">
            <Link
              to="/app/help"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <HelpCircle size={20} className="text-gray-500" />
              {isSidebarOpen && <span className="ml-3">Help & Support</span>}
            </Link>
            <button
              className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <LogOut size={20} className="text-gray-500" />
              {isSidebarOpen && <span className="ml-3">Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">
              {navigation.find((item) => item.href === location.pathname)?.name || "Wemet"}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Plus size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout; 