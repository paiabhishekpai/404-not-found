import React from "react";
import { useNavigate } from "react-router-dom";
import BankStatementUpload from "../components/BankStatementUpload";

function RoutingPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-bold  pt-5 text-center">Fill Your Details</h1>

      <div className="flex gap-5 my-16 w-[70vw] mx-auto justify-center min-h-screen bg-white">
      <button
          onClick={() => navigate("/kyc")}
          className="bg-blue-500 text-white w-[25%] h-[50vh] px-6  flex flex-col justify-center items-center gap-2 rounded"
        >
          <svg
            fill="#000000"
            width="300px"
            height="300px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
          </svg>
          <h3 className="text-xl font-bold text-center">Personal Details</h3>
        </button>
        <button
          onClick={() => navigate("/address")}
          className="bg-blue-500 text-white w-[25%] h-[50vh] px-6  flex flex-col justify-center items-center gap-2 rounded"
        >
          <svg
            fill="#000000"
            width="300px"
            height="300px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
          </svg>
          <h3 className="text-xl font-bold text-center">Address Proof</h3>
        </button>
        <button
          onClick={() => navigate("/statement")}
          className="bg-blue-500 text-white w-[25%] h-[50vh] px-6  flex flex-col justify-center items-center gap-2 rounded"
        >
          <svg
            fill="#000000"
            width="300px"
            height="300px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
          </svg>
          <h3 className="text-xl font-bold text-center"> Transactions</h3>
        </button>
        <button
          onClick={() => navigate("/socialref")}
          className="bg-blue-500 text-white w-[25%] h-[50vh] px-6  flex flex-col justify-center items-center gap-2 rounded"
        >
          <svg
            fill="#000000"
            width="300px"
            height="300px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
          </svg>
          <h3 className="text-xl font-bold text-center">Social references</h3>
        </button>
      </div>
    </>
  );
}

export default RoutingPage;
