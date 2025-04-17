import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../upload/logo.png'
import {
  Home,
  Mail,
  User,
  Bell,
  Settings,
  HelpCircle,
  Feather,
  MoreHorizontal,
  Users,
  Plus,
} from "lucide-react";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const profileCompletion = 30;
  const matchCount = 5;

  const navigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Matches", href: "/app/matches", icon: Users, badge: matchCount },
    { name: "Messages", href: "/app/messages", icon: Mail },
    { name: "Profile", href: "/app/profile", icon: User },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Settings", href: "/app/settings", icon: Settings },
    { name: "Post", href: "/app/post", icon: Feather },
    { name: "More", href: "#", icon: MoreHorizontal, onClick: () => setIsMoreOpen(true) },
  ];

  const mobileNavigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Messages", href: "/app/messages", icon: Mail },
    { name: "Post", href: "/app/post", icon: Feather },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Profile", href: "/app/profile", icon: User },
  ];

  return (
    <div className="flex bg-gray-50 text-sm font-sans antialiased min-h-screen">
      {/* Sidebar (Desktop) */}
      <div className="hidden sm:flex w-20 bg-white flex-col shadow-sm pl-4 pr-4">
        {/* Logo */}
        <div className="p-4 flex items-center justify-center">
          <Link to="/app">
            <img
              src= {Logo}
              alt="Logo"
              className="w-10 h-10 rounded-md"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                title={item.name}
                onClick={item.onClick}
                className={`group flex items-center justify-center px-3 py-2 rounded-full transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <item.icon
                    size={28}
                    className={`${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-900 group-hover:text-blue-500"
                    }`}
                  />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 mt-auto space-y-2">
          <Link
            to="/app/help"
            title="Help & Support"
            className="flex items-center justify-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-100"
          >
            <HelpCircle size={28} className="text-gray-900" />
          </Link>
          <Link
            to="/app/profile"
            title="Profile"
            className="flex items-center justify-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-100"
          >
            <img
              src="https://via.placeholder.com/32"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-t z-40">
        <nav className="flex justify-around py-2 px-2">
          {mobileNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                title={item.name}
                className={`group flex items-center justify-center px-2 py-2 rounded-full transition-all ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                <item.icon
                  size={24}
                  className={`${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-900 group-hover:text-blue-500"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* More Popup */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">More</h2>
              <button
                onClick={() => setIsMoreOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {moreOptions.map((option) => (
                <Link
                  key={option.name}
                  to={option.href}
                  onClick={() => setIsMoreOpen(false)}
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="h-14 bg-white flex items-center justify-between px-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
            {navigation.find((item) => item.href === location.pathname)?.name || "App"}
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Notifications">
              <Bell size={28} className="text-gray-900" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add new">
              <Plus size={28} className="text-gray-900" />
            </button>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4 pb-16 sm:pb-4">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;