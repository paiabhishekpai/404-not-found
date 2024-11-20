import React from 'react'
import { useNavigate } from 'react-router-dom'
import BankStatementUpload from "../components/BankStatementUpload";

function LoanPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Select Loan Type</h1>
      <button
        onClick={() => navigate('/kyc')}
        className="bg-blue-500 text-white px-6 py-3 rounded mb-4"
      >
        Business Loan
      </button>
      <button
        onClick={() => navigate('/kyc')}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Personal Loan
      </button>
    </div>
  )
}

export default LoanPage
