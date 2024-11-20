import React from 'react'
import KYCForm from '../components/KYCform'
import BankStatementUpload from '../components/BankStatementUpload'
import SocialReferenceForm from '../components/SocialReferenceForm'
import PhotoUpload from '../components/PhotoUpload'

function KYCPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">KYC Form</h1>
      <KYCForm />
    <BankStatementUpload/>
    <SocialReferenceForm/>
    <PhotoUpload/>
    </div>
  )
}

export default KYCPage
