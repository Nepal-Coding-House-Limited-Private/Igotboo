import { useState } from "react";
import { User, Camera, MapPin, Briefcase, GraduationCap, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "johndoe",
    location: "New York, USA",
    occupation: "Software Engineer",
    about: "I'm a passionate software engineer with experience in web development. I love building user-friendly applications and solving complex problems.",
    education: {
      degree: "Computer Science",
      school: "University Name",
      year: "2015 - 2019"
    },
    experience: {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2020 - Present"
    },
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"]
  });

  const [newSkill, setNewSkill] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [name]: value
      }
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      experience: {
        ...prev.experience,
        [name]: value
      }
    }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/app/profile");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <button
              onClick={() => navigate("/app/profile")}
              className="text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center space-x-2">
              <Check size={20} />
              <span>Profile updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={64} className="text-gray-400" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors cursor-pointer">
                  <Camera size={20} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About Me
              </label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree
                  </label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.education.degree}
                    onChange={handleEducationChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.education.school}
                    onChange={handleEducationChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    name="year"
                    value={formData.education.year}
                    onChange={handleEducationChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.experience.title}
                    onChange={handleExperienceChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.experience.company}
                    onChange={handleExperienceChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Period
                  </label>
                  <input
                    type="text"
                    name="period"
                    value={formData.experience.period}
                    onChange={handleExperienceChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <form onSubmit={handleAddSkill} className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Add
                </button>
              </form>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate("/app/profile")}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile; 