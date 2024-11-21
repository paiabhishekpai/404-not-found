import React from 'react'
import KYCForm from '../components/KYCForm'

function KYCPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">KYC Form</h1>
      <h2 className="text-xl  mb-6"> Sharing your income and job info helps us assess your ability to repay and tailor the right loan offer for you.</h2>
      <KYCForm />
    </div>
  )
}

export default KYCPage
