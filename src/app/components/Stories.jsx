import { useState, useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import defaultAvatar from '../../assets/default-avatar.svg';

const Stories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const fileInputRef = useRef(null);

  // Temporary mock data for stories
  const stories = [
    { id: 1, user: 'John Doe', avatar: defaultAvatar, hasStory: true },
    { id: 2, user: 'Jane Smith', avatar: defaultAvatar, hasStory: true },
    { id: 3, user: 'Mike Johnson', avatar: defaultAvatar, hasStory: true },
    { id: 4, user: 'Sarah Wilson', avatar: defaultAvatar, hasStory: true },
    { id: 5, user: 'Tom Brown', avatar: defaultAvatar, hasStory: true },
  ];

  const scroll = (direction) => {
    const container = document.getElementById('stories-container');
    const scrollAmount = 200;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(container.scrollLeft);
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(container.scrollLeft);
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Story uploaded:', file.name);
      // TODO: handle story upload logic
    }
  };

  return (
    <div className="relative w-full bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Stories</h2>
      </div>

      <div className="relative">
        {scrollPosition > 0 && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div
          id="stories-container"
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Upload Story Box ("You") */}
          <div
            className="relative min-w-[120px] h-[200px] bg-gray-100 rounded-lg cursor-pointer hover:opacity-90 transition"
            onClick={handleUploadClick}
          >
            <img
              src={defaultAvatar}
              alt="Your profile"
              className="w-full h-3/4 object-cover rounded-t-lg"  // Removed rounded-full to make it rectangular
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-1 rounded-full shadow">
              <Plus size={18} className="text-blue-600" />
            </div>
            <div className="text-center mt-2 text-sm font-medium text-gray-700">Add to Story</div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Story Items */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="min-w-[120px] h-[200px] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition"
            >
              <img
                src={story.avatar}
                alt={story.user}
                className="w-full h-3/4 object-cover rounded-t-lg"  // Removed rounded-full to make it rectangular
              />
              <div className="text-center mt-2 text-sm font-medium text-gray-700">
                {story.user}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Stories;
