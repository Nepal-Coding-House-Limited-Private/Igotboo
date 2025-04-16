import { useState } from "react";
import { Bell, Lock, Globe, Moon, Eye, EyeOff, Trash2, Shield, Mail } from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      messages: true,
      updates: false,
      marketing: false
    },
    privacy: {
      profileVisibility: "public",
      showOnlineStatus: true,
      showLastSeen: true,
      showReadReceipts: true
    },
    appearance: {
      darkMode: false,
      fontSize: "medium",
      language: "English"
    },
    security: {
      twoFactorAuth: false,
      loginNotifications: true,
      showPassword: false
    }
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNotificationChange = (type) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handlePrivacyChange = (type) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: !prev.privacy[type]
      }
    }));
  };

  const handleAppearanceChange = (type, value) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [type]: value
      }
    }));
  };

  const handleSecurityChange = (type) => {
    setSettings(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [type]: !prev.security[type]
      }
    }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Here you would typically send the password change request to your backend
    console.log("Password change requested");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

        {/* Notifications Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([type, enabled]) => (
              <div key={type} className="flex items-center justify-between">
                <span className="capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={() => handleNotificationChange(type)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Privacy</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(settings.privacy).map(([type, enabled]) => (
              <div key={type} className="flex items-center justify-between">
                <span className="capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={() => handlePrivacyChange(type)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.appearance.darkMode}
                  onChange={() => handleAppearanceChange('darkMode', !settings.appearance.darkMode)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size
              </label>
              <select
                value={settings.appearance.fontSize}
                onChange={(e) => handleAppearanceChange('fontSize', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={settings.appearance.language}
                onChange={(e) => handleAppearanceChange('language', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Lock className="text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(settings.security).map(([type, enabled]) => (
              <div key={type} className="flex items-center justify-between">
                <span className="capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={() => handleSecurityChange(type)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            ))}
          </div>

          {/* Change Password Form */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={settings.security.showPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleSecurityChange('showPassword')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                  >
                    {settings.security.showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type={settings.security.showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type={settings.security.showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>

        {/* Account Deletion */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Trash2 className="text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Delete Account</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 