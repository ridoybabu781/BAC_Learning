import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    CaretRightIcon,
    Eye,
    EyeSlash,
    HouseIcon,
} from "@phosphor-icons/react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className='bg-[url(/images/shopHero.jpg)]'> 
                <div className=' backdrop-brightness-50 text-white w-full'>
                    <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
                        <HouseIcon /> Account <CaretRightIcon /> Signup
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center min-h-[80vh] bg-gray-50'>
                <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-12'>
                    <h2 className='text-4xl font-semibold text-center mb-6'>
                        Sign In
                    </h2>

                    <form className='space-y-8' onSubmit={handleSubmit}>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='w-full border border-gray-300 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />

                        <div className='relative flex '>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder='Password'
                                className='w-full border border-gray-300 rounded-full px-6 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500'
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 mr-4 text-gray-500 hover:text-gray-700'
                            >
                                {showPassword ? (
                                    <EyeSlash size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>

                        <div className='flex justify-between items-center text-sm'>
                            <label className='flex items-center gap-2'>
                                <input
                                    type='checkbox'
                                    className='accent-green-600'
                                />
                                Remember me
                            </label>
                            <Link
                                to='/forgot-password'
                                className='text-green-600 hover:underline'
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type='submit'
                            className='w-full cursor-pointer bg-green-600 text-white font-medium py-4  rounded-full hover:bg-green-700 transition'
                        >
                            Login
                        </button>

                        <p className='text-center text-sm text-gray-600'>
                            Don’t have an account?{" "}
                            <Link
                                to='/signup'
                                className='text-green-600 font-medium hover:underline'
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
