import { AiFillHome, AiFillFlag } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";

const Feed = () => {
  return (
    <>
      <div className="navbar flex justify-between border-b border-gray-700 p-2">
        <div className="h-14 w-14 mx-8">
          <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
        </div>
        <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer mx-8">
          AC
        </div>
      </div>
      <div className="h-full w-full flex">
        <div className="h-full w-1/4 flex flex-col space-y-5 justify-between pb-10 border-r border-gray-700 my-5">
          <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
            <AiFillHome className="w-8 h-8" />
            Feed
          </button>
          <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
            <AiFillFlag className="w-8 h-8" />
            Challenges
          </button>
          <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
            <SiMarketo className="w-8 h-8" />
            Market Place
          </button>
          <button className="rounded-full bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline mx-5">
            Create Post
          </button>
        </div>
        <div className="w-3/4 h-1/10">
          <h1>Main content</h1>
        </div>
      </div>
    </>
  );
};

export default Feed;
