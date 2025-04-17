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
  Plus,
  Users,
  HelpCircle,
} from "lucide-react";

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const profileCompletion = 30;
  const matchCount = 5;

  const navigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Matches", href: "/app/matches", icon: Users, badge: matchCount },
    { name: "Messages", href: "/app/messages", icon: MessageSquare },
    { name: "Profile", href: "/app/profile", icon: User },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Settings", href: "/app/settings", icon: Settings },
  ];

  return (
    <div className="h-screen flex bg-gray-50 text-sm font-sans antialiased">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-48" : "w-14"
        } bg-white border-r transition-all duration-300 ease-in-out flex flex-col shadow-sm`}
      >
        {/* Logo & Toggle */}
        <div className="p-3 flex items-center justify-between border-b">
          {isSidebarOpen && (
            <Link to="/app" className="flex items-center gap-2 ml-1">
              <div className="w-7 h-7 bg-red-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Wemet</span>
            </Link>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 ml-auto hover:bg-gray-100 rounded-md"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? (
              <X size={18} className="text-gray-500" />
            ) : (
              <Menu size={18} className="text-gray-500" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                title={item.name}
                className={`group flex items-center px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-red-100 text-red-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <item.icon
                    size={18}
                    className={`${
                      isActive
                        ? "text-red-500"
                        : "text-gray-500 group-hover:text-red-400"
                    }`}
                  />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                {isSidebarOpen && (
                  <span className="ml-3 text-sm tracking-tight">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t mt-auto space-y-1">
          <Link
            to="/app/help"
            title="Help & Support"
            className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <HelpCircle size={18} className="text-gray-500" />
            {isSidebarOpen && <span className="ml-3 text-sm">Help</span>}
          </Link>
          <button
            title="Logout"
            className="flex items-center w-full px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Logout"
          >
            <LogOut size={18} className="text-gray-500" />
            {isSidebarOpen && <span className="ml-3 text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="h-14 bg-white border-b flex items-center justify-between px-4 shadow-sm">
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
            {navigation.find((item) => item.href === location.pathname)?.name || "Wemet"}
          </h1>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Notifications">
              <Bell size={18} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add new">
              <Plus size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
