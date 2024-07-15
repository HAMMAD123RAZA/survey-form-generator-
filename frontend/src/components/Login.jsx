import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="name">Name:</label>
          <input className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500" type="text" name="name" placeholder="Name" />
        </div>
        <div className="mb-4">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="email">Email:</label>
          <input className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500" type="email" name="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="password">Password:</label>
          <input className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500" type="password" name="password" placeholder="Password" />
        </div>
        <button className="w-full py-3 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-600">
          <Link to="/form">
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;