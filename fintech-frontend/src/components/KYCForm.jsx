import React, { useState } from 'react'

function KYCForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [income, setIncome] = useState('')
  const [address, setAddress] = useState('')
  const [dependents, setDependents] = useState('')
  const [aadhar, setAadhar] = useState('')
  const [pan, setPan] = useState('')
  const [gst, setGst] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, age, businessType, income, address, dependents, pan,gst })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6  bg-white rounded shadow-md w-[90vw] mx-auto">
    <div className="flex gap-5 justify-center">
      <div className="personal w-1/2 flex flex-col gap-2 items-center">
        <h3 className='text-lg font-bold '>Personal Details</h3>
        <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Aadhar Number"
        value={aadhar}
        onChange={(e) => setAadhar(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
       <input
        type="number"
        placeholder="PAN Number"
        value={pan}
        onChange={(e) => setPan(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Annual Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Number of Dependents"
        value={dependents}
        onChange={(e) => setDependents(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      </div>
      <div className="business flex flex-col gap-2 w-1/2 items-center">
        <h3 className='text-lg font-bold'>Business Details</h3>
        <input
        type="text"
        placeholder="Business Type"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Business Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="GSTIN number"
        value={gst}
        onChange={(e) => setGst(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      </div>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Submit
      </button>
    </form>
  )
}

export default KYCForm
