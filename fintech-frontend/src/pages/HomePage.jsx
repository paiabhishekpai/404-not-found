import React from "react";
import { useNavigate } from "react-router-dom";
import cover from '../assets/cover.jpg';

function HomePage() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
    <div className="flex gap-5 justify-around">
      <div className="cover text-center flex justify-center items-center w-[50%]">
        <img src={cover} className="w-[430px] " alt="not found" />
      </div>
    <div className="flex flex-col w-[50%] items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to NanoAid</h1>
      <h4 className="text-xl font-semibold mb-6">NanoAid is a loan assistance platform that helps nano entrepreneurs demonstrate creditworthiness to financial institutions and secure loans.</h4>
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
