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
      <section className="mt-8 px-10">
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
    </div>
  );
};

export default Home;
