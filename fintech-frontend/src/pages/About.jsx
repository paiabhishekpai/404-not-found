import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Team 404 Not Found</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-2xl text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our FinTech project! We are a passionate team of
          engineering students exploring the realms of Artificial Intelligence,
          Fintech, Blockchain, and innovative technologies. Our team includes:
        </p>
        <ul className="list-none flex gap-5 justify-center font-bold list-inside mt-4 text-gray-600">
        <li>Rupali</li>
          <li>Abhishek </li>
          <li>Nidhithashree</li>
        </ul>
        <p className="mt-4 text-gray-700">
          With our shared enthusiasm for technology and its applications, we
          aim to create solutions that make a real-world impact. Through this
          project, we hope to revolutionize the way financial institutions
          assess creditworthiness and make financing accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
