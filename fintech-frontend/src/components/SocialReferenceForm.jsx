// src/components/SocialReferenceForm.jsx

import React, { useState } from "react";

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
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Social References</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {references.map((reference, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-medium">Reference {index + 1}</h3>
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
    </div>
  );
};

export default SocialReferenceForm;
