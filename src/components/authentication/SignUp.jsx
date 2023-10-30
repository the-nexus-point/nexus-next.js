"use client"
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    libId: "",
    email: "",
    password: "",
    branch: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        console.log('Registration successful');
        e.target.reset();
      }
      else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="bg-black drop-shadow-2xl rounded px-8 pt-10 pb-10 mb-4 w-1/4"
        method="POST"
      >
        <h3 className="text-center mb-5">Sign Up with College Id</h3>
        <div className="mb-5">
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="Full Name"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              name="libId"
              type="text"
              placeholder="Library ID"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <select
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 rounded w-full py-2 px-3 text-white leading-tight bg-neutral-900 focus:outline-none focus:shadow-outline"
              name="branch"
              placeholder="branch"
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Select Branch
              </option>
              <option value="CSE(AI)">CSE(AI)</option>
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
