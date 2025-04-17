import CulturalPhotoGallery from '../components/CulturalPhotoGallery'; 
import defaultImage from '../upload/default-cultural-image.jpg';

const CulturalRecommended = () => {
  // Filtered Hindu-only data
  const hinduRecommendations = [
    {
      id: 1,
      title: 'Hindu Festival: Diwali',
      culture: 'Hindu',
      image: defaultImage,
      description: 'Join the vibrant celebration of Diwali, the festival of lights.',
    },
    {
      id: 5,
      title: 'Hindu Holi Celebration',
      culture: 'Hindu',
      image: defaultImage,
      description: 'Splash colors and spread joy at the Holi festival.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Hindu Cultural Highlights
        </h1>
        <p className="text-gray-600 mb-6">
          Explore the vibrant and spiritual traditions of Hindu culture.
        </p>

        {/* Recommended Hindu Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {hinduRecommendations.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.culture}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Hindu Photo Gallery */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Hindu Cultural Photos</h2>
        <CulturalPhotoGallery onlyHindu />
      </div>
    </div>
  );
};

export default CulturalRecommended;
