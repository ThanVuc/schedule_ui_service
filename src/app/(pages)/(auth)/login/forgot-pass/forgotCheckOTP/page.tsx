import React from 'react'
import OTPInput from '../../../../../../components/ui/otp/otp'

export default function page() {
    return (
        <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">

            <div className="w-112 absolute z-2 rounded-3xl h-100 bg-cyan-200 p-10 ">
              
                  <h2 className="text-3xl font-bold text-center mb-6">Verification</h2>
                <p className="text-center font-medium mb-1">Please check the code in your email.</p>
                <p className="text-center font-medium mb-6">This code consists of 6 digits.</p>



                  {/* Gọi component OTPInput tại đây */}
                <OTPInput />



                <div className='flex gap-5 float-end mt-7'>
                    <button className='h-10 px-6 rounded-2xl bg-gray-500 cursor-pointer text-white font-semibold  '>
                        Cancel
                    </button>
                    <button className="h-10 px-6 rounded-2xl bg-blue-500 cursor-pointer text-white font-semibold  ">
                        Next
                    </button>
                </div>

                {/* Decorative Circles */}
                <div className="absolute z-100 top-[-50px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full"></div>
                <div className="absolute z-100 top-[-20px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
                <div className="absolute z-100 bottom-[-20px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
            </div>

        </div>


    )
}
