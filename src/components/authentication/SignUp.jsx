"use client"
import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    libId: "",
    email: "",
    password: "",
    branch: "",
  });

  const backendUrl = process.env.BACKEND_URI || "http://localhost:5001";
  const apiKey = process.env.API_KEY;

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.accessToken);
        e.target.reset();
        toast({
          title: "Registration successful.",
          description: "Your account has been created.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        window.location.href = "/";
      } else {
        console.error("Registration failed");
        toast({
          title: "Registration failed.",
          description: "Please check your inputs.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred.",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
        className="bg-black drop-shadow-2xl rounded px-8 pt-10 pb-10 mb-4"
        method="POST"
      >
        <h3 className="text-center mb-5">Sign Up with College ID</h3>
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
              placeholder="Branch"
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Select Branch
              </option>
              <option value="CSE(AI)">CSE(AI)</option>
              <option value="CSE(AIML)">CSE(AIML)</option>
            </select>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button
              type="submit"
              bg="purple.500"
              _hover={{ bg: "purple.700" }}
              color="white"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              _focus={{ outline: "none", shadow: "outline" }}
            >
              Sign Up
            </Button>
            <Button
              bg="white"
              color="purple.500"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              _focus={{ outline: "none", shadow: "outline" }}
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
