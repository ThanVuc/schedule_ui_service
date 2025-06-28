import React from 'react'


export default function page() {
    return (
        <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">
            <div className=' absolute flex m-auto rounded-3xl  shadow-2xl max-w-4xl bg-white w-400 h-110'>

                {/* Right Side */}
                <div className="w-116 h-110 absolute z-2 rounded-3xl  bg-cyan-100 p-10 pt-5 ">
                    <h2 className="text-3xl font-bold text-center  mb-6">Sign up</h2>
                   
                    <p className=" font-medium text-2xl pt-4 mb-6">Valid confirmation code.</p>

                    {/* Gọi component OTPInput tại đây */}
                  
                    <div className='pt-6'>
                        <a href="" className=" font-medium mb-6 mt-4 "><i>Go to home page</i></a>

                    </div>
                    <div className='flex gap-5 float-end mt-7 px-10'>
                      
                        <button className="h-10 px-6 rounded-2xl  bg-blue-500 cursor-pointer text-white font-semibold  ">
                            Cancel
                        </button>
                    </div>

                </div>


                {/* Left Side */}
                <div className='absolute top-[-20px] left-[450px] z-10 h-120 bg-green-600 rounded-3xl  w-115 flex items-center justify-center p-10'>
                    <img src="" alt="" />
                    <p>ảnh ở đây </p>
                </div>


                {/* Decorative Circles */}
                <div className="absolute z-100 top-[-50px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full"></div>
                <div className="absolute z-100 top-[-50px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
                <div className="absolute z-100 bottom-[-40px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
            </div>

        </div>
    )
}
