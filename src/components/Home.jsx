// components/Home.js

import React from "react";

const Home = () => {
  return (
    <div>
      <header className="flex justify-center">
        <img
          src="/img/nexus-website-favicon-white.png"
          alt="Logo"
          className="w-25 h-25 m-5"
        />
      </header>
      <section className="mt-8 px-10 min-h-screen flex flex-col">
        <h1 className="text-9xl font-bold mb-3">Nexus</h1>
        <p className="text-md text-gray-400 mb-8">
          Connect, Collaborate, and Thrive Together.
        </p>
        <div className="flex space-x-5">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </div>
      </section>
      <section className="">
        <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>
        <div className="flex flex-col  space-y-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Curriculum Ranking</h3>
            <p className="text-gray-500">Rank curricular challenges.</p>
          </div>
          <div className="p-6 self-end">
            <h3 className="text-xl font-semibold mb-2">Post/Feed Management</h3>
            <p className="text-gray-500">
              Create, view, and interact with posts and feeds.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Resource Sharing</h3>
            <p className="text-gray-500">
              Share and access notes and resources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
