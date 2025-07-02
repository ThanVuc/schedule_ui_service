// import React from 'react'

// export default function page() {
//     return (
//         <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">

//             <div className="w-112 absolute z-2 rounded-3xl h-100 bg-cyan-200 p-10 ">
//                 <h2 className="text-3xl font-bold text-center mb-4">New Password</h2>
//                 <label htmlFor="" className="font-bold text-center ">Enter your new password.</label>
//                  <div className="mb-6 pt-4">
//                         <label htmlFor='pass' className="text-sm font-semibold">New Password</label>
//                         <div className="flex items-center border-b border-black py-1">
//                             <input
//                                 type="password"
//                                 id="pass"
//                                 placeholder="Enter new password"
//                                 className="bg-transparent outline-none w-full px-2 py-1"
//                             />
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7V8a6 6 0 00-12 0v2H4v12h16V10h-2zM8 8a4 4 0 018 0v2H8V8z" />
//                             </svg>
//                         </div>
//                     </div>
//                  <div className="mb-6 ">
//                         <label htmlFor='pass' className="text-sm font-semibold">Again New Password</label>
//                         <div className="flex items-center border-b border-black py-1">
//                             <input
//                                 type="password"
//                                 id="pass"
//                                 placeholder="Again New Password"
//                                 className="bg-transparent outline-none w-full px-2 py-1"
//                             />
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7V8a6 6 0 00-12 0v2H4v12h16V10h-2zM8 8a4 4 0 018 0v2H8V8z" />
//                             </svg>
//                         </div>
//                     </div>


//                 <div className='flex gap-5 float-end mt-7'>
//                     <button className='h-10 px-6 rounded-2xl bg-gray-500 cursor-pointer text-white font-semibold hover:bg-blue-600 transition'>
//                         Cancel
//                     </button>
//                     <button className="h-10 px-6 rounded-2xl bg-gray-500 cursor-pointer text-white font-semibold hover:bg-blue-600 transition">
//                         Next
//                     </button>
//                 </div>

//                 {/* Decorative Circles */}
//                 <div className="absolute z-100 top-[-50px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full"></div>
//                 <div className="absolute z-100 top-[-20px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
//                 <div className="absolute z-100 bottom-[-20px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
//             </div>

//         </div>


//     )
// }


'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-100 to-pink-100 p-4 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-40px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full z-0" />
      <div className="absolute top-[-20px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full z-0" />
      <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full z-0" />

      {/* Card */}
      <div className="relative z-10 bg-cyan-200 rounded-[2rem] shadow-2xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-4">New Password</h2>
        <p className="text-center font-medium mb-8">Enter your new password.</p>

        {/* New Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold mb-1">
            New Password
          </label>
          <div className="relative border-b border-black">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter new password"
              className="w-full bg-transparent outline-none py-2 pr-8"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-2 text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block text-sm font-semibold mb-1">
            Confirm New Password
          </label>
          <div className="relative border-b border-black">
            <input
              type={showConfirm ? 'text' : 'password'}
              id="confirm-password"
              placeholder="Confirm new password"
              className="w-full bg-transparent outline-none py-2 pr-8"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-0 top-2 text-gray-600"
            >
              {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="h-10 px-6 rounded-2xl bg-gray-500 text-white font-semibold hover:bg-gray-600 transition">
            Cancel
          </button>
          <button className="h-10 px-6 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
