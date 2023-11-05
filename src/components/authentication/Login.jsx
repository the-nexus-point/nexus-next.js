"use client"
import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const apiKey = process.env.API_KEY;
  const backendUrl = process.env.BACKEND_URI || "http://localhost:5001";
  const [token, setToken] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.accessToken) {
        setToken(data.accessToken);
        localStorage.setItem("token", data.accessToken);
        e.target.reset();
        toast({
          title: "Login successful.",
          description: "You have successfully logged in.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        window.location.href = "/";
      } else {
        toast({
          title: "Login failed.",
          description: "Please check your credentials.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Login failed: " + error);
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
      >
        <h3 className="text-center mb-5">Log In with College ID</h3>
        <div className="mb-5">
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
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
              Log In
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
                window.location.href = "/signup";
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
