import { useState } from "react";
import { Edit2, MapPin, Briefcase, GraduationCap, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PhotoUpload from "../components/PhotoUpload";
import { CreatePost, Post } from "../components/Post";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Abhaya Bikram Shahi",
        avatar: "/default-avatar.jpg"
      },
      content: "Just launched my new portfolio website! Check it out and let me know what you think. #webdev #coding",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      author: {
        name: "Abhaya Bikram Shahi",
        avatar: "/default-avatar.jpg"
      },
      content: "Excited to share that I've joined a new project! Looking forward to working with an amazing team.",
      timestamp: "1 day ago",
      likes: 24,
      comments: 5
    }
  ]);

  const handleImageChange = (imageData) => {
    console.log("New image data:", imageData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Photo */}
      <div className="h-72 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
        <button className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white/95 px-4 py-2 rounded-lg text-gray-700 hover:bg-white transition-colors duration-200 shadow-sm z-10">
          <ImageIcon size={18} />
          <span className="text-sm font-medium">Change Cover</span>
        </button>
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-16">
        <div className="max-w-5xl mx-auto mt-8 px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 pt-20">
            <div className="flex items-start space-x-6">
              <div className="absolute -top-16 left-8">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl">
                  <img src="/default-avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <PhotoUpload onImageChange={handleImageChange} className="absolute bottom-0 right-0" />
              </div>
              <div className="flex-1 ml-40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-gray-900">Abhaya Bikram Shahi</h1>
                    <CheckCircle2 size={20} className="text-blue-500" title="Verified" />
                  </div>
                  <Link
                    to="/app/profile/edit"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Edit2 size={18} />
                    <span className="text-sm font-medium">Edit Profile</span>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm mt-1">@abhayashahi</p>
                <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} className="text-gray-400" />
                    <span>New York, USA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase size={16} className="text-gray-400" />
                    <span>Software Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Navigation */}
            <div className="flex space-x-8 mt-8 border-t pt-4">
              {["posts", "about", "photos"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 font-medium text-sm ${
                    activeTab === tab
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 gap-8">
            {/* Left Column - About Info */}
            <div className="space-y-6"></div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              {activeTab === "posts" && (
                <>
                  <CreatePost />
                  {posts.map(post => (
                    <Post key={post.id} post={post} />
                  ))}
                </>
              )}

              {activeTab === "about" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
                    <p className="text-gray-600 text-sm">I'm a seasoned software engineer with over 5 years of experience in developing scalable and high-performance web applications. My expertise lies in full-stack development, with a focus on creating seamless user experiences and tackling complex technical challenges. I thrive in collaborative environments and am passionate about leveraging technology to solve real-world problems.</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <GraduationCap size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Computer Science</h3>
                          <p className="text-gray-500 text-sm">University Name • 2015 - 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "Python", "SQL"].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "photos" && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Photos</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={`https://picsum.photos/400?random=${index}`}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;