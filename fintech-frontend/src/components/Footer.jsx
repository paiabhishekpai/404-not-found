import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center text-sm">
      © {new Date().getFullYear()} FinTech. All rights reserved.
    </footer>
  );
};

export default Footer;
