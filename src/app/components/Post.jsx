import { useState } from "react";
import { Heart, MessageCircle, Share2, Image as ImageIcon, Smile, Send } from "lucide-react";

export const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the post data to your backend
    console.log("Post submitted:", { text: postText, image: selectedImage });
    setPostText("");
    setSelectedImage(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-4">
          <img
            src="/default-avatar.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              rows={3}
            />
            {selectedImage && (
              <div className="relative mt-2">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-h-60 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                >
                  <span className="sr-only">Remove image</span>
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 border-t pt-4">
          <div className="flex space-x-4">
            <label className="cursor-pointer text-gray-600 hover:text-red-500 flex items-center space-x-2">
              <ImageIcon size={20} />
              <span>Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <button
              type="button"
              className="text-gray-600 hover:text-red-500 flex items-center space-x-2"
            >
              <Smile size={20} />
              <span>Feeling</span>
            </button>
          </div>
          <button
            type="submit"
            disabled={!postText.trim() && !selectedImage}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Send size={20} />
            <span>Post</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={post.author.avatar || "/default-avatar.jpg"}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{post.author.name}</h3>
          <p className="text-gray-500 text-sm">{post.timestamp}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="rounded-lg mb-4 max-h-96 w-full object-cover"
        />
      )}
      <div className="flex items-center justify-between border-t pt-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 ${liked ? "text-red-500" : "text-gray-600"} hover:text-red-500`}
        >
          <Heart size={20} fill={liked ? "currentColor" : "none"} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
          <MessageCircle size={20} />
          <span>{post.comments || 0}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};