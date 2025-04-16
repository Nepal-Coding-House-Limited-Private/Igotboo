import { motion } from "framer-motion";
import { useState } from "react";

const Notifications = () => {
  // Mock notifications data - in a real app, this would come from an API
  const [notifications] = useState([
    {
      id: 1,
      type: "match",
      message: "You have a new match with Sarah!",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "like",
      message: "John liked your profile",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "message",
      message: "New message from Emma: 'Hey, how are you?'",
      time: "2 hours ago",
      unread: false,
    },
    {
      id: 4,
      type: "view",
      message: "Someone viewed your profile",
      time: "1 day ago",
      unread: false,
    },
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case "match":
        return "❤️";
      case "like":
        return "✨";
      case "message":
        return "💬";
      case "view":
        return "👀";
      default:
        return "📌";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-8"
            >
              Notifications
            </motion.h1>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${notification.unread ? 'border-rose-300' : 'border-rose-100'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${notification.unread ? 'bg-gradient-to-br from-red-100 to-pink-100' : 'bg-gray-100'}`}>
                      <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                    </div>
                    <div className="flex-grow">
                      <p className={`text-gray-800 ${notification.unread ? 'font-semibold' : 'font-normal'}`}>
                        {notification.message}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    {notification.unread && (
                      <div className="flex-shrink-0">
                        <span className="inline-block w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {notifications.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-700">No notifications yet</h3>
                <p className="text-gray-500 mt-2">We'll notify you when something happens!</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Notifications;