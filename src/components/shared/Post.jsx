import {
  FaUserCircle,
  FaArrowUp,
  FaArrowDown,
  FaComment,
} from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Post = ({ username, content }) => {
  return (
    <div className="border border-neutral-700 p-5 rounded bg-neutral-900/10 hover:bg-neutral-900/20 hover:cursor-pointer">
      <div className="flex items-center mb-4 space-x-2">
        <FaUserCircle className="w-8 h-8" />
        <span className="text-md">{username}</span>
      </div>
      <p>{content}</p>
      <div className="flex items-center mt-4 space-x-2">
        <button className="flex text-sm items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 text-white font-bold py-1 px-2 space-x-1">
          <span>100</span><AiOutlineArrowUp className="w-4 h-4" />
        </button>
        <button className="flex text-sm items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 text-white font-bold py-1 px-2 space-x-1">
        <span>10</span>
          <AiOutlineArrowDown className="w-4 h-4" />
        </button>
        <button className="flex text-sm items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 text-white font-bold py-1 px-2 space-x-1">
        <span>3</span><FaComment className="w-4 h-4 mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Post;
