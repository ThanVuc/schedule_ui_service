import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">
      <div className="flex rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full">
        {/* Left Side */}
        <div className="w-1/2 bg-teal-700 flex items-center justify-center p-10">
          <img src="" alt="" className="w-80" />
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-cyan-100 p-10 relative">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

          <div className="mb-4">
            <label className="text-sm font-semibold">Email</label>
            <div className="flex items-center border-b border-black py-1">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none w-full px-2 py-1"
              />
              <span className="mr-2 text-lg">📧</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold">Password</label>
            <div className="flex items-center border-b border-black py-1">
              <input
                type="password"
                placeholder="Enter password"
                className="bg-transparent outline-none w-full px-2 py-1"
              />
              <span className="mr-2 text-lg">🔒</span>
            </div>
          </div>

          <button className="w-full bg-white py-2 rounded-full shadow hover:bg-gray-100 font-semibold mb-4">
            Login
          </button>

          <button className="w-full bg-white py-2 rounded-full shadow hover:bg-gray-100 flex items-center justify-center gap-2 font-semibold">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>

          <div className="flex justify-between mt-4 text-sm font-semibold">
            <a href="#" className="hover:underline">
              Create an account
            </a>
            <a href="#" className="hover:underline">
              Forget password?
            </a>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-blue-400 rounded-full"></div>
          <div className="absolute top-[-20px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
          <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
