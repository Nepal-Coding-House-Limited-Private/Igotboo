import { motion } from "framer-motion";
import { User, Camera, Edit2, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <User size={64} className="text-gray-400" />
                </div>
                <button className="absolute bottom-0 right-0 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                  <Camera size={20} />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                  <Link
                    to="/app/profile/edit"
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500"
                  >
                    <Edit2 size={20} />
                    <span>Edit Profile</span>
                  </Link>
                </div>
                <p className="text-gray-600 mt-2">@johndoe</p>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-600">New York, USA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase size={16} className="text-gray-400" />
                    <span className="text-gray-600">Software Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600">
                  I'm a passionate software engineer with experience in web development.
                  I love building user-friendly applications and solving complex problems.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Briefcase size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Senior Software Engineer</h3>
                      <p className="text-gray-600">Tech Company • 2020 - Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <GraduationCap size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Computer Science</h3>
                    <p className="text-gray-600">University Name • 2015 - 2019</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 