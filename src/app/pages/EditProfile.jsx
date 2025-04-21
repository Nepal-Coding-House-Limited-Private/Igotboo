import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { X, Camera } from 'lucide-react';
import authService from '../../services/authService';

const EditProfile = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    avatar: null
  });

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }
    setFormData({
      fullName: user.fullName || '',
      email: user.email || '',
      bio: user.bio || '',
      location: user.location || '',
      website: user.website || '',
      avatar: user.avatar || null
    });
    if (user.avatar) {
      setPreviewImage(user.avatar);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.updateProfile(formData);
      toast.success('Profile updated successfully');
      navigate('/app/profile');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <button onClick={() => navigate('/app/profile')} className="text-gray-600">
          <X size={24} />
        </button>
        <h1 className="text-xl font-semibold">Edit profile</h1>
        <button
          onClick={handleSubmit}
          className="text-blue-500 font-semibold hover:text-blue-600"
        >
          Done
        </button>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={previewImage || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="absolute bottom-0 right-0 p-1 bg-blue-500 rounded-full cursor-pointer text-white">
              <Camera size={16} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          <label className="text-blue-500 font-semibold cursor-pointer">
            Change profile photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-400"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-400"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-400"
              placeholder="Bio"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-400"
              placeholder="Location"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-400"
              placeholder="Website"
            />
          </div>

          {/* Mobile Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 sm:hidden"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
