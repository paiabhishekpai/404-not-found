import React from 'react'

function Report() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Credit-worthiness Report</h1>
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
  );
}

export default Report