// src/components/SocialReferenceForm.jsx

import React, { useState } from "react";
import graph from "../assets/graph.jpg"
import bar from "../assets/bar.jpg"


const SocialReferenceForm = ({ onSubmit }) => {
  const [references, setReferences] = useState([
    { name: "", mobile: "", email: "" },
    { name: "", mobile: "", email: "" },
    { name: "", mobile: "", email: "" },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedReferences = [...references];
    updatedReferences[index][name] = value;
    setReferences(updatedReferences);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(references);  // Pass references to parent component
  };

  return (
    <div className="w-[70vw] mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {references.map((reference, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-bold">Reference {index + 1}</h3>
            <div className="flex flex-col">
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={reference.name}
                onChange={(event) => handleInputChange(index, event)}
                className="mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={reference.mobile}
                onChange={(event) => handleInputChange(index, event)}
                className="mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={reference.email}
                onChange={(event) => handleInputChange(index, event)}
                className="mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit References
        </button>
      </form>

      <div className="report mt-96">
        <h1 className="font-bold text-3xl text-center  mb-8">Credit-Worthiness Report</h1>
        <div>
          <ul className="flex flex-col list-none text-center font-bold">
            <li>Name:Ramesh</li>
            <li>Age:40</li>
            <li>Aadhar Number: 8282 2728 8162</li>
            <li>Pan Number: OEHPI09LK</li>
            <li>Annual Income: 200000</li>
            </ul>
            
          </div>
        <div className="graphs flex justify-center gap-10 mb-24">
      
        <img src={graph} className="w-[300px] " alt="not found" />
        <img src={bar} className="w-[300px] " alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default SocialReferenceForm;