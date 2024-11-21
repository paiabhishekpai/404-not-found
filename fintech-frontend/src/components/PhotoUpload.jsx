import React, { useState } from "react";

const PhotoUpload = () => {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file)); // Create a preview URL for the photo
    }
  };

  const handleUpload = () => {
    if (photo) {
      alert("Photo uploaded successfully.");
      // Replace this with the actual upload logic
    } else {
      alert("Please select a photo before uploading.");
    }
  };



  return (
    <div className="  bg-white rounded shadow-md space-y-4 p-6 flex flex-col items-center justify-center mt-8">
      <h2 className="text-xl font-bold mb-4">Upload photo of your address</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="mb-4 border p-2"
      />
      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded shadow-lg"
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      
    </div>
  );
};

export default PhotoUpload;