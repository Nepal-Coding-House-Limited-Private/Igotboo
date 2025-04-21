import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Grid, Bookmark, UserCheck } from 'lucide-react';
import authService from '../../services/authService';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = authService.getCurrentUser();
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(userData);
  }, [navigate]);

  if (!user) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">{user.fullName || 'User'}</h1>
            <button
              onClick={() => navigate('/app/profile/edit')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Settings size={24} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Profile Picture */}
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={user.avatar || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold">{user.username || user.email}</h2>
                <button
                  onClick={() => navigate('/app/profile/edit')}
                  className="px-4 py-1.5 border rounded font-semibold hover:bg-gray-50"
                >
                  Edit profile
                </button>
              </div>

              <div className="flex gap-8 mb-4">
                <div>
                  <span className="font-semibold">0</span> posts
                </div>
                <div>
                  <span className="font-semibold">0</span> followers
                </div>
                <div>
                  <span className="font-semibold">0</span> following
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold">{user.fullName}</div>
                {user.bio && <div>{user.bio}</div>}
                {user.website && (
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-medium"
                  >
                    {user.website}
                  </a>
                )}
                {user.location && <div className="text-gray-500">{user.location}</div>}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <button
              className={`p-4 flex items-center gap-2 border-t ${
                activeTab === 'posts' ? 'border-black' : 'border-transparent'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              <Grid size={12} />
              <span className="text-xs uppercase font-semibold">Posts</span>
            </button>
            <button
              className={`p-4 flex items-center gap-2 border-t ${
                activeTab === 'saved' ? 'border-black' : 'border-transparent'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              <Bookmark size={12} />
              <span className="text-xs uppercase font-semibold">Saved</span>
            </button>
            <button
              className={`p-4 flex items-center gap-2 border-t ${
                activeTab === 'tagged' ? 'border-black' : 'border-transparent'
              }`}
              onClick={() => setActiveTab('tagged')}
            >
              <UserCheck size={12} />
              <span className="text-xs uppercase font-semibold">Tagged</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-3 gap-1">
            {/* Empty state for posts */}
            <div className="col-span-3 py-12 text-center">
              <Grid size={32} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-semibold mb-2">Share Photos</h3>
              <p className="text-gray-500">When you share photos, they will appear on your profile.</p>
              <button className="mt-4 text-blue-500 font-semibold">Share your first photo</button>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="py-12 text-center">
            <Bookmark size={32} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-semibold mb-2">Save</h3>
            <p className="text-gray-500">Save photos and videos that you want to see again.</p>
          </div>
        )}

        {activeTab === 'tagged' && (
          <div className="py-12 text-center">
            <UserCheck size={32} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-semibold mb-2">Photos of you</h3>
            <p className="text-gray-500">When people tag you in photos, they'll appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
