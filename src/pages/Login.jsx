import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      Swal.fire({
        title: "Success",
        text: "Login is successful",
        icon: "success"
      });
    } else {
       Swal.fire({
        title: "Invalid",
        text: "Login is invalid",
        icon: "error"
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full p-3 shadow-lg mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              placeholder="Enter your password"
            />
          </div>
          <button
            type='submit'
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg hover:from-pink-500 hover:to-blue-500 transition-all font-semibold shadow-md"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-500 text-sm">Don't have an account?</span>
          <a href="#" className="ml-2 text-pink-500 font-semibold hover:underline text-sm">Sign up</a>
        </div>
      </div>
    </div>
  )
}