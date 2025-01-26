import Link from 'next/link'
import React from 'react'

const FoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href={"/"} className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Go Back Home
      </Link>
    </div>
  )
}

export default FoundPage