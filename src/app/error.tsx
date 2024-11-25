"use client";

import Navbar from "@/components/Navbar/Navbar";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
    <div className="flex items-center justify-center h-[400px] bg-white">
      <div className="p-6 rounded-lg shadow-lg bg-white text-center max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded bg-basicColor text-white font-semibold hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    </div>
    </div>
  );
};

export default Error;
