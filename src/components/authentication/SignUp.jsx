"use client"
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
      <form className="bg-black drop-shadow-2xl rounded px-8 pt-10 pb-10 mb-4 w-1/4">
        <h3 className="text-center mb-5">Sign Up with College Id</h3>
        <div className="mb-5">
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              id="libraryId"
              type="text"
              placeholder="Library ID"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <select
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              id="department"
              name="department"
              placeholder="Department"
            >
              <option value="CSE(AI))">CSE(AI)</option>
              <option value="CSE(AIML)">CSE(AIML)</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
