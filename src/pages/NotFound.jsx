import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center border border-purple-200">
        <div className="flex items-center mb-6">
          <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg animate-bounce">
            404
          </span>
          <svg className="w-16 h-16 ml-4 text-pink-400 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 8v4m8-8h-4M4 12H8" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-purple-700 mb-2 drop-shadow">Oops! Page Not Found</p>
        <p className="text-gray-600 mb-8 text-center max-w-lg">
          The page you’re looking for doesn’t exist or was moved.<br />
          Let’s get you back to something awesome!
        </p>
        <Link
          to={'/home'}
          className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-pink-500 hover:to-indigo-500 transition-all font-semibold text-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}