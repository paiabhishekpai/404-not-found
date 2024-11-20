import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoanPage from "./pages/LoanPage";
import KYCPage from "./pages/KYCPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>

          <Route path="/about" element={<AboutPage />} />;
          <Route path="/contact" element={<ContactPage />} />;
            <Route path="/" element={<HomePage />} />
            <Route path="/loan" element={<LoanPage />} />
            <Route path="/kyc" element={<KYCPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
