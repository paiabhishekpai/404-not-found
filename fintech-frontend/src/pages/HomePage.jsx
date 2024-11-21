import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
    <div className="flex">
      <div className="cover">
        <img src="fintech-frontend/src/assets/cover.jpg" alt=" not found" />
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to NanoAid</h1>
      <h4 className="text-xl font-bold mb-6">Lets get Started</h4>
      <button
        onClick={() => navigate("/loan")}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Proceed to Loan Application
      </button>
    </div>
    </div>
    </>
  );
}

export default HomePage;
