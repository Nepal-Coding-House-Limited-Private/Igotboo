import { motion } from "framer-motion";
import AppNavbar from "../components/AppNavbar";

const MainApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome to Your Dashboard
            </h1>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Profile Views</h3>
                <p className="text-3xl font-bold text-red-500">0</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Connections</h3>
                <p className="text-3xl font-bold text-red-500">0</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Messages</h3>
                <p className="text-3xl font-bold text-red-500">0</p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
                  <p className="text-gray-600 mb-4">Start building your profile and connect with others!</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                    Complete Profile
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <p className="text-gray-600">No recent activity to show.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
                  <p className="text-gray-600">Complete your profile to get personalized suggestions.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
                  <p className="text-gray-600">No trending topics available yet.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MainApp; 