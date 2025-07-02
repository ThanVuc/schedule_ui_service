// import React from 'react'

// export default function page() {
//     return (
//         <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">

//             <div className="w-112 absolute z-2 rounded-3xl h-100 bg-cyan-200 p-10 ">
//                 <h2 className="text-3xl font-bold text-center mb-8">Find your account</h2>
//                 <label htmlFor="" className="font-bold text-center">Please enter your email to search for your account.</label>
//                 <div className="mb-4 pt-5">
//                     <label htmlFor='mail' className="text-sm font-semibold ">Email</label>
//                     <div className="flex items-center border-b border-black py-1 ">
//                         <input
//                             type="email"
//                             id="mail"
//                             placeholder="Enter email"
//                             className="bg-transparent outline-none w-full px-2 py-1"
//                         />
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M2 4h20v16H2z" fill="none" />
//                             <path d="M22 4H2v16h20V4zm-2 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
//                         </svg>
//                     </div>
//                 </div>


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
import React from 'react';
import { Mail } from 'lucide-react';

export default function FindAccountPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-100 to-pink-100 p-4 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-40px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full z-0" />
      <div className="absolute top-[-20px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full z-0" />
      <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full z-0" />

      {/* Card */}
      <div className="relative z-10 bg-cyan-200 rounded-[2rem] shadow-2xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Find your account</h2>
        <p className="text-center font-medium mb-8">
          Please enter your email to search for your account.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="text-sm font-semibold block mb-1">
            Email
          </label>
          <div className="relative border-b border-black">
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="bg-transparent outline-none w-full py-2 pr-8 text-sm sm:text-base"
            />
            <Mail className="absolute right-0 top-2 w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Action Buttons */}
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
