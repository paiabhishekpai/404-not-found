import React from 'react'
import SocialReferenceForm from '../components/SocialReferenceForm'

function SocialRefPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Social References</h1>
      <h2 className="text-xl mb-6"> Social references help confirm your identity and add trust, making the loan process quicker and smoother.</h2>
    <SocialReferenceForm/>
   
    </div>
  )
}

export default SocialRefPage
