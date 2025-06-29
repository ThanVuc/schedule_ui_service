import React from 'react'
import { User } from 'lucide-react';
export default function page() {
    return (
        <div className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">
            <div className=' absolute flex m-auto rounded-3xl  shadow-2xl max-w-4xl bg-white w-400 h-110'>
                {/* Left Side */}
                <div className='absolute top-[-20px] right-[445px] z-10 h-120 bg-green-600 rounded-3xl  w-115 flex items-center justify-center p-10'>
                    <img src="./image8.png" alt="" />
                    <p>ảnh ở đây </p>
                    <User />
                </div>

                {/* Right Side */}
                <div className="w-112 absolute z-2 left-[450px] bg-cyan-100 p-10 ">
                    <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

                    <div className="mb-4">
                        <label htmlFor='mail' className="text-sm font-semibold">Email</label>
                        <div className="flex items-center border-b border-black py-1">
                            <input
                                type="email"
                                id="mail"
                                placeholder="Enter email"
                                className="bg-transparent outline-none w-full px-2 py-1"
                            />
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2 4h20v16H2z" fill="none" />
                                <path d="M22 4H2v16h20V4zm-2 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                            </svg>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor='pass' className="text-sm font-semibold">Password</label>
                        <div className="flex items-center border-b border-black py-1">
                            <input
                                type="password"
                                id="pass"
                                placeholder="Enter password"
                                className="bg-transparent outline-none w-full px-2 py-1"
                            />
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7V8a6 6 0 00-12 0v2H4v12h16V10h-2zM8 8a4 4 0 018 0v2H8V8z" />
                            </svg>
                        </div>
                    </div>

                    <button className="w-full cursor-pointer bg-white py-2 rounded-full shadow hover:bg-gray-100 font-semibold mb-4">
                        Login
                    </button>

                    <button className="w-full cursor-pointer bg-white py-2 rounded-full shadow hover:bg-gray-100 flex items-center justify-center gap-2 font-semibold">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Google
                    </button>

                    <div className="flex justify-between mt-4 text-sm font-semibold">
                        <a href="./signup" className="hover:underline">
                            Create an account
                        </a>
                        <a href="/forgotPass" className="hover:underline">
                            Forget password?
                        </a>
                    </div>
                </div>
                {/* Decorative Circles */}
                <div className="absolute z-100 top-[-50px] left-[-40px] w-24 h-24 bg-blue-400 rounded-full"></div>
                <div className="absolute z-100  top-[-50px] right-[-20px] w-12 h-12 bg-teal-400 rounded-full"></div>
                <div className="absolute z-100 bottom-[-40px] right-[-20px] w-16 h-16 bg-pink-400 rounded-full"></div>
            </div>

        </div>
    )
}
