import React, { useState } from 'react';
import { Search as SearchIcon, Users } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search Input */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search people, posts, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Recent Searches */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://via.placeholder.com/40?text=User${i}`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">User {i}</p>
                  <p className="text-sm text-gray-500">@username{i}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Suggested</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://via.placeholder.com/40?text=User${i}`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">User {i}</p>
                  <p className="text-sm text-gray-500">@username{i}</p>
                </div>
              </div>
              <button className="px-4 py-1 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-full">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
