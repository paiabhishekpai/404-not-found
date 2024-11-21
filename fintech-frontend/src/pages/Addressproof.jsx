import React from 'react'
import PhotoUpload from '../components/PhotoUpload'

function Addressproof() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Address Proof</h1>
      <h2 className="text-xl  mb-6"> Your address proof helps us verify where you live and ensures all loan communication reaches you smoothly.</h2>

    <PhotoUpload/>
    </div>
  )
}

export default Addressproof
