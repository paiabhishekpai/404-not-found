import React from "react";
import { useNavigate } from "react-router-dom";
import BankStatementUpload from "../components/BankStatementUpload";

function LoanPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-bold  pt-5 text-center">Select Loan Type</h1>

      <div className="flex gap-5 my-16 justify-center min-h-screen bg-white">
        <button
          onClick={() => navigate("/routing")}
          className="bg-blue-500 text-white w-[25vw] h-[50vh] px-6  rounded flex flex-col justify-center items-center gap-2 "
        >
          <svg
            fill="#000000"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
            id="ROI"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M266.533,114.519c-55.518,0-100.687,45.168-100.687,100.687c0,16.021,3.858,31.964,11.153,46.104 c1.713,3.325,5.803,4.627,9.126,2.915c3.325-1.716,4.631-5.801,2.914-9.126c-6.399-12.404-9.645-25.826-9.645-39.893 c0-48.049,39.089-87.138,87.138-87.138s87.139,39.089,87.139,87.138c0,28.891-14.283,55.85-38.211,72.115 c-3.094,2.104-3.896,6.317-1.793,9.412c1.312,1.928,3.439,2.965,5.607,2.965c1.313,0,2.637-0.38,3.803-1.172 c27.642-18.791,44.143-49.938,44.143-83.32C367.221,159.687,322.053,114.519,266.533,114.519z"></path>{" "}
                <path d="M288.548,279.445c0.806,0,1.625-0.146,2.423-0.452c26.231-10.056,43.854-35.689,43.854-63.788 c0-37.657-30.635-68.292-68.292-68.292c-37.656,0-68.294,30.635-68.294,68.292c0,17.505,6.616,34.151,18.63,46.875 c2.566,2.721,6.855,2.847,9.575,0.276c2.722-2.569,2.845-6.855,0.275-9.575c-9.628-10.201-14.932-23.546-14.932-37.576 c0-30.185,24.559-54.743,54.745-54.743c30.186,0,54.744,24.558,54.744,54.743c0,22.527-14.129,43.076-35.156,51.138 c-3.493,1.34-5.239,5.258-3.901,8.751C283.254,277.789,285.822,279.445,288.548,279.445z"></path>{" "}
                <path d="M139.154,291.404c3.741,0,6.774-3.034,6.774-6.775c0-3.74-3.033-6.773-6.774-6.773H120.2c-3.74,0-6.773,3.033-6.773,6.773 v94.236c0,3.74,3.033,6.774,6.773,6.774h43.683h123.129c16.077,0,31.971-5.372,44.752-15.127l41.123-31.384 c11.452-8.738,13.832-25.293,5.306-36.902c-8.536-11.625-25.058-14.301-36.831-5.965l-21.052,14.91 c-3.053,2.163-3.774,6.391-1.612,9.445c2.164,3.051,6.391,3.773,9.444,1.612l21.053-14.911c5.78-4.096,13.891-2.776,18.077,2.928 c4.187,5.699,3.019,13.824-2.603,18.113l-41.124,31.383c-10.436,7.964-23.408,12.349-36.533,12.349H170.657v-80.687h45.86 c7.957,0,15.471,3.062,21.159,8.624c8.239,8.048,19.117,12.48,30.632,12.48h13.123c6.145,0,11.142,4.997,11.142,11.14 c0,8.19-6.662,14.854-14.853,14.854h-47.532c-3.74,0-6.774,3.033-6.774,6.773c0,3.741,3.034,6.774,6.774,6.774h47.532 c15.66,0,28.401-12.741,28.401-28.401c0-13.611-11.076-24.688-24.69-24.688h-13.123c-7.956,0-15.471-3.063-21.162-8.623 c-8.233-8.051-19.111-12.482-30.629-12.482h-52.635c-3.74,0-6.774,3.033-6.774,6.773v87.462h-30.134v-80.687H139.154z"></path>{" "}
                <path d="M266.533,264.991c3.741,0,6.774-3.034,6.774-6.774v-5.484c9.539-1.76,16.792-10.123,16.792-20.163 c0-11.316-9.205-20.521-20.521-20.521h-1.047h-3.98h-1.047c-3.845,0-6.973-3.126-6.973-6.971c0-3.845,3.128-6.971,6.973-6.971 h15.839c3.741,0,6.774-3.034,6.774-6.774c0-3.74-3.033-6.774-6.774-6.774h-6.035v-4.326c0-3.741-3.033-6.774-6.774-6.774 c-3.74,0-6.773,3.034-6.773,6.774v4.685c-9.532,1.767-16.777,10.127-16.777,20.161c0,11.314,9.205,20.519,20.521,20.519h1.047h3.98 h1.047c3.845,0,6.973,3.128,6.973,6.973s-3.128,6.971-6.973,6.971h-15.839c-3.74,0-6.774,3.034-6.774,6.774 c0,3.741,3.034,6.774,6.774,6.774h6.021v5.128C259.76,261.957,262.793,264.991,266.533,264.991z"></path>{" "}
                <path d="M438.971,425.09l-55.309-38.197c-3.078-2.125-7.299-1.355-9.424,1.724c-2.126,3.079-1.354,7.298,1.724,9.425l47.238,32.623 l-36.613,25.288V444.5c0-3.74-3.034-6.774-6.774-6.774H166.964v-14.123h212.849c3.74,0,6.774-3.034,6.774-6.774 s-3.034-6.773-6.774-6.773H160.189c-3.74,0-6.773,3.033-6.773,6.773V444.5c0,3.74,3.033,6.773,6.773,6.773h212.849v17.59 c0,2.518,1.397,4.829,3.627,5.999c0.989,0.519,2.069,0.775,3.147,0.775c1.352,0,2.697-0.405,3.85-1.2l55.309-38.199 c1.832-1.265,2.925-3.35,2.925-5.574C441.896,428.438,440.803,426.354,438.971,425.09z"></path>{" "}
                <path d="M131.646,410.055h-30.093c-3.74,0-6.774,3.033-6.774,6.773V444.5c0,3.74,3.034,6.773,6.774,6.773h30.093 c3.74,0,6.773-3.033,6.773-6.773v-27.672C138.419,413.088,135.386,410.055,131.646,410.055z M124.871,437.726h-16.544v-14.123 h16.544V437.726z"></path>{" "}
                <path d="M73.008,410.055c-3.74,0-6.774,3.033-6.774,6.773V444.5c0,3.74,3.034,6.773,6.774,6.773s6.774-3.033,6.774-6.773v-27.672 C79.782,413.088,76.748,410.055,73.008,410.055z"></path>{" "}
                <path d="M73.029,86.91l55.309,38.199c1.176,0.811,2.516,1.2,3.844,1.2c2.151,0,4.267-1.021,5.58-2.924 c2.126-3.079,1.354-7.297-1.724-9.424L88.8,81.335l36.613-25.288V67.5c0,3.74,3.034,6.774,6.774,6.774h212.849v14.123H132.188 c-3.74,0-6.774,3.034-6.774,6.774c0,3.74,3.034,6.774,6.774,6.774h219.623c3.74,0,6.773-3.034,6.773-6.774V67.5 c0-3.741-3.033-6.774-6.773-6.774H138.962V43.136c0-2.518-1.397-4.829-3.627-6c-2.23-1.168-4.927-1.005-6.997,0.426L73.029,75.762 c-1.832,1.264-2.925,3.349-2.925,5.574S71.197,85.645,73.029,86.91z"></path>{" "}
                <path d="M380.355,101.945h30.092c3.74,0,6.774-3.034,6.774-6.774V67.5c0-3.741-3.034-6.774-6.774-6.774h-30.092 c-3.741,0-6.775,3.034-6.775,6.774v27.671C373.58,98.912,376.614,101.945,380.355,101.945z M387.129,74.274h16.544v14.123h-16.544 V74.274z"></path>{" "}
                <path d="M438.992,60.726c-3.74,0-6.774,3.034-6.774,6.774v27.671c0,3.74,3.034,6.774,6.774,6.774s6.774-3.034,6.774-6.774V67.5 C445.767,63.759,442.732,60.726,438.992,60.726z"></path>{" "}
              </g>{" "}
            </g>
          </svg>

          <h3 className="text-xl font-bold text-center">Business Loan</h3>
        </button>
        <button
          onClick={() => navigate("/routing")}
          className="bg-blue-500 text-white w-[25vw] h-[50vh] px-6  flex flex-col justify-center items-center gap-2 rounded"
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
          <h3 className="text-xl font-bold text-center">Personal Loan</h3>
        </button>
      </div>
    </>
  );
}

export default LoanPage;
