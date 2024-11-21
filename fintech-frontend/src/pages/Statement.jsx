import React from 'react'
import BankStatementUpload from '../components/BankStatementUpload'


function Statement() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Transaction statement</h1>
      <h2 className="text-xl mb-6  ">Your UPI transaction history lets us understand your spending, helping us offer loan terms that fit your financial situation.</h2>
    <BankStatementUpload/>
    </div>
  )
}

export default Statement
