// import React from 'react'

// export default function page() {
//     return (
//         <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">

//             <div className="w-112 absolute z-2 rounded-3xl h-100 bg-cyan-200 p-10 ">
//                 <h2 className="text-3xl font-bold text-center mb-4">Verification</h2>
//                 <p className=" font-medium text-2xl pt-4 mb-6">Invalid confirmation code.</p>

                    
//                     <div className='pt-6'>
//                         <a href="" className=" font-medium mb-6 mt-4 "><i>Resend the code</i></a>

//                     </div>
//                     <div className='flex gap-5 float-end mt-7 px-10'>
                      
//                         <button className="h-10 px-6 rounded-2xl  bg-blue-500 cursor-pointer text-white font-semibold  ">
//                             Cancel
//                         </button>
//                     </div>
//                 {/* Decorative Circles */}
//                 <div className="absolute z-100 top-[-50px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full"></div>
//                 <div className="absolute z-100  top-[-50px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
//                 <div className="absolute z-100 bottom-[-40px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
//             </div>

//         </div>


//     )
// }


'use client';
import React from 'react';

export default function VerificationFailedPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-100 to-pink-100 p-4 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-40px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full z-0" />
      <div className="absolute top-[-20px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full z-0" />
      <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full z-0" />

      {/* Main Card */}
      <div className="relative z-10 bg-cyan-200 rounded-[2rem] shadow-2xl w-full max-w-md p-8 sm:p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Verification</h2>
        <p className="text-red-700 text-xl font-medium mb-6">Invalid confirmation code.</p>

        <a
          href="#"
          className="inline-block text-blue-700 underline font-medium italic mb-10"
        >
          Resend the code
        </a>

        <div className="pt-6">
          <button className="h-10 px-6 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
