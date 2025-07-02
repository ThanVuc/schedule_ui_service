// import React from 'react'

// export default function page() {
//     return (
//         <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">
//             <div className=' absolute flex m-auto rounded-3xl  shadow-2xl max-w-4xl bg-white w-400 h-110'>

//                 {/* Right Side */}
//                 <div className="w-116 absolute z-2 rounded-3xl bg-cyan-100 p-10 pt-5  pr-15">
//                     <h2 className="text-3xl font-bold text-center ">Sign up</h2>

//                     <div className="mb-4">
//                         <label htmlFor='email' className="text-sm font-semibold ">Email</label>
//                         <div className="flex items-center border-b border-black py-1">

//                             <input id='email'
//                                 type="email"
//                                 placeholder="Enter email"
//                                 className="bg-transparent outline-none w-full px-2 py-1"
//                             />
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M2 4h20v16H2z" fill="none" />
//                                 <path d="M22 4H2v16h20V4zm-2 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor='pass' className="text-sm font-semibold">Password</label>
//                         <div className="flex items-center border-b border-black py-1">
//                             <input
//                                 type="password"
//                                 id="pass"
//                                 placeholder="Enter password"
//                                 className="bg-transparent outline-none w-full px-2 py-1"
//                             />
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7V8a6 6 0 00-12 0v2H4v12h16V10h-2zM8 8a4 4 0 018 0v2H8V8z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="mb-6">
//                         <label htmlFor='rpass' className="text-sm font-semibold">Reset Password</label>
//                         <div className="flex items-center border-b border-black py-1">
//                             <input
//                                 type="password"
//                                 id="rpass"
//                                 placeholder="Enter password"
//                                 className="bg-transparent outline-none w-full px-2 py-1"
//                             />
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7V8a6 6 0 00-12 0v2H4v12h16V10h-2zM8 8a4 4 0 018 0v2H8V8z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <button className="w-full cursor-pointer bg-white py-2 rounded-full shadow hover:bg-gray-100 font-semibold mb-4">
//                         Sign up
//                     </button>

//                     <button className="w-full cursor-pointer bg-white py-2 rounded-full shadow hover:bg-gray-100 flex items-center justify-center gap-2 font-semibold">
//                         <img
//                             src="https://www.svgrepo.com/show/475656/google-color.svg"
//                             alt="Google"
//                             className="w-5 h-5"
//                         />
//                         Google
//                     </button>

//                     <div className=" absolute  top-[395px] flex justify-between mt-4 text-sm  font-semibold">
//                         <a href="/login" className="hover:underline" >
//                             Already have an account?
//                         </a>
//                     </div>
//                 </div>


//                 {/* Left Side */}
//                 {/* <div className='absolute top-[-20px] left-[450px] z-10 h-120 bg-green-600 rounded-3xl  w-115 flex items-center justify-center p-10'> */}
//                 <div className='absolute top-[-70px] left-[400px]   z-10 w-[560px] h-[580px] rounded-3xl flex items-center justify-center p-10'>
//                      <img
//                         src="./image8.png"
//                         alt="Login Illustration"
//                         className="w-full h-full object-cover rounded-3xl"
//                     />
//                 </div>


//                 {/* Decorative Circles */}
//                 <div className="absolute z-100 top-[-50px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full"></div>
//                 <div className="absolute z-100  top-[-50px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
//                 <div className="absolute z-100 bottom-[-40px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
//             </div>

//         </div>
//     )
// }


'use client';
import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-blue-100 to-pink-100 relative overflow-hidden">
      {/* Decorative Circles */}
       <div className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-blue-400 rounded-full z-0" />
      <div className="absolute top-[-30px] right-[-30px] w-20 h-20 bg-teal-400 rounded-full z-0" />
      <div className="absolute bottom-[-30px] right-[-30px] w-24 h-24 bg-pink-400 rounded-full z-0" />

      <div className="relative z-10 flex  max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Form */}
        <div className="flex-1 bg-[#CFFFFE] p-10 flex flex-col  justify-center">
          <h2 className="text-3xl font-bold text-center mb-8">Sign up</h2>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor='email' className="text-sm font-semibold">Email</label>
            <div className="flex items-center border-b border-black py-1 relative">
              <input
                id='email'
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none w-full px-2 py-1"
              />
              <Mail className="absolute right-2 h-5 w-5 text-gray-600" />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor='pass' className="text-sm font-semibold">Password</label>
            <div className="flex items-center border-b border-black py-1 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="pass"
                placeholder="Enter password"
                className="bg-transparent outline-none w-full px-2 py-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Reset Password */}
          <div className="mb-6">
            <label htmlFor='rpass' className="text-sm font-semibold">Reset Password</label>
            <div className="flex items-center border-b border-black py-1 relative">
              <input
                type={showResetPassword ? 'text' : 'password'}
                id="rpass"
                placeholder="Enter password"
                className="bg-transparent outline-none w-full px-2 py-1"
              />
              <button
                type="button"
                onClick={() => setShowResetPassword(!showResetPassword)}
                className="absolute right-2 text-gray-600"
              >
                {showResetPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Sign up button */}
          <button className="w-full bg-white py-2 rounded-full shadow hover:bg-gray-100 font-semibold mb-4">
            Sign up
          </button>

          {/* Google button */}
          <button className="w-full bg-white py-2 rounded-full shadow hover:bg-gray-100 flex items-center justify-center gap-2 font-semibold">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>

          {/* Link to Login */}
          <div className="flex justify-start mt-6 text-sm font-semibold">
            <a href="/login" className="hover:underline">
              Already have an account?
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1  bg-[#047b7b] flex hidden md:flex items-center justify-center p-10">
          <img
            src="./image8.png"
            alt="Illustration"
            className="rounded-2xl w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
