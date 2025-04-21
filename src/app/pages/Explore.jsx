import React from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

const Explore = () => {
  // Sample post data
  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    imageUrl: `https://via.placeholder.com/600x600?text=Post${i + 1}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));

  return (
    <div className="max-w-7xl mx-auto">
      {/* Categories */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {['For You', 'Trending', 'Photography', 'Art', 'Music', 'Food', 'Travel', 'Fashion'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              className="w-full h-full object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <Heart size={24} className="fill-current" />
                  <span className="font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle size={24} />
                  <span className="font-medium">{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Topics */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['#Photography', '#Travel', '#Fashion', '#Food', '#Art', '#Music'].map((topic) => (
            <div
              key={topic}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <p className="font-medium text-blue-600">{topic}</p>
              <p className="text-sm text-gray-500">{Math.floor(Math.random() * 10000)} posts</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
