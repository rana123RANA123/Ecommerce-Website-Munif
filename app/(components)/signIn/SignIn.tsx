"use client";
import React, { useState } from "react";

const SignInJoinDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign In/Join
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-6 6-6-6"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-44 mt-2 bg-white rounded-md shadow-sm dark:bg-gray-800">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="#" className="block px-4 py-2">
                Sign In
              </a>
            </li>
            <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="#" className="block px-4 py-2">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignInJoinDropdown;
