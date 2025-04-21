import React, { useState } from 'react';
import { Bookmark, Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const Saved = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'posts', label: 'Posts' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
  ];

  const savedItems = [
    {
      id: 1,
      type: 'post',
      user: {
        name: 'John Doe',
        username: 'johndoe',
        avatar: 'https://via.placeholder.com/40',
      },
      content: 'Just shared my latest photography project! Check it out and let me know what you think. 📸',
      image: 'https://via.placeholder.com/600x400',
      likes: 243,
      comments: 18,
      savedAt: '2 days ago',
    },
    {
      id: 2,
      type: 'photo',
      user: {
        name: 'Jane Smith',
        username: 'janesmith',
        avatar: 'https://via.placeholder.com/40',
      },
      image: 'https://via.placeholder.com/600x600',
      likes: 567,
      comments: 32,
      savedAt: '5 days ago',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Saved Items</h1>
        <p className="text-gray-600">Only you can see what you've saved</p>
      </div>

      <div className="border-b mb-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {savedItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={item.user.avatar}
                  alt={item.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{item.user.name}</p>
                  <p className="text-sm text-gray-500">@{item.user.username}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Saved {item.savedAt}</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            {item.content && (
              <div className="px-4 py-2">
                <p className="text-gray-800">{item.content}</p>
              </div>
            )}

            {item.image && (
              <div className="relative">
                <img
                  src={item.image}
                  alt="Post"
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="px-4 py-3 flex items-center justify-between border-t">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                  <Heart size={20} />
                  <span>{item.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                  <MessageCircle size={20} />
                  <span>{item.comments}</span>
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                  <Share2 size={20} />
                </button>
              </div>
              <button className="text-blue-600">
                <Bookmark size={20} className="fill-current" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {savedItems.length === 0 && (
        <div className="text-center py-12">
          <Bookmark size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved items yet</h3>
          <p className="text-gray-600 mb-6">
            Save posts, photos, and videos to view them later
          </p>
        </div>
      )}
    </div>
  );
};

export default Saved;
