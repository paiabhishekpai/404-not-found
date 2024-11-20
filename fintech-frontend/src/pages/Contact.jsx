import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-md text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          We'd love to hear from you! If you have any questions, suggestions, or
          need support, feel free to reach out to us.
        </p>
        <p className="mt-4 text-blue-500 font-semibold">
          Email: <a href="mailto:notfound404@gmail.com">notfound404@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
