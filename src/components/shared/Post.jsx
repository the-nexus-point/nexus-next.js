import {
  FaUserCircle,
  FaArrowUp,
  FaArrowDown,
  FaComment,
} from "react-icons/fa";

const Post = ({ username, content }) => {
  return (
    <div className="p-2 ">
      <div className="flex items-center mb-4">
        <FaUserCircle className="w-8 h-8 mr-2" />
        <span className="text-xl">{username}</span>
      </div>
      <p>{content}</p>
      <div className="flex items-center mt-4">
        <button className="flex items-center mr-4 text-gray-500 hover:text-gray-700">
          <FaArrowUp className="w-4 h-4 mr-1" />
        </button>
        <button className="flex items-center mr-4 text-gray-500 hover:text-gray-700">
          <FaArrowDown className="w-4 h-4 mr-1" />
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <FaComment className="w-4 h-4 mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Post;
