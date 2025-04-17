import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import defaultAvatar from '../../assets/default-avatar.svg';

const PostFeed = () => {
  // Temporary mock data for posts
  const [posts] = useState([
    {
      id: 1,
      user: 'John Doe',
      avatar: defaultAvatar,
      content: 'Just had an amazing day at the beach! 🏖️',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5,
      shares: 2,
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: defaultAvatar,
      content: 'Check out this awesome new restaurant I discovered! The food was incredible. 🍝',
      timestamp: '4 hours ago',
      likes: 42,
      comments: 8,
      shares: 3,
    },
  ]);

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{post.user}</h3>
                <span className="text-sm text-gray-500">{post.timestamp}</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <p className="mt-4 text-gray-700">{post.content}</p>

          <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
              <Heart size={20} />
              <span className="text-sm">{post.likes}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <MessageCircle size={20} />
              <span className="text-sm">{post.comments}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
              <Share2 size={20} />
              <span className="text-sm">{post.shares}</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostFeed;