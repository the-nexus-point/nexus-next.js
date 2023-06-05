import { AiOutlineUser, AiFillMessage, AiOutlineLogout } from "react-icons/ai";
import { RxActivityLog } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    bio: "Software Developer | Tech Enthusiast",
    location: "New York, USA",
    website: "https://www.example.com",
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-full w-full flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <div className="h-14 w-14 mx-8 cursor-pointer">
              <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
            </div>
            <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
              <AiOutlineUser className="w-8 h-8 mx-2" />
              Profile
            </button>
            <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
              <RxActivityLog className="w-8 h-8 mx-2" />
              Activities
            </button>
            <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
              <BiEditAlt className="w-8 h-8 mx-2" />
              Edit Profile
            </button>
            <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 font-bold py-2 px-4 mx-5">
              <CiSettings className="w-8 h-8 mx-2" />
              Account Settings
            </button>
          </div>
          <div className="flex justify-between mt-auto mb-5 mx-5">
            <button className="flex items-center border border-gray-700 hover:border-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <AiFillMessage className="mx-2" />
              <span>feedback</span>
            </button>
            <button className="logout-button flex items-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <AiOutlineLogout className="text-lg" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        <div className="w-3/4 h-full overflow-y-auto scrollbar-none">
          <div className="flex justify-between border-b border-gray-700 p-2">
            <button className="text-3xl mx-8 hover:text-black hover:opacity-75">
              <FaUserCircle className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
