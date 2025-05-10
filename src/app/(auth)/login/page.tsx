'use client';
import React, { useState } from 'react';
import Image from 'next/image'; 

export default function Login() {

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');


  const isFormFilled = emailOrPhone.trim() !== '' && password.trim() !== '';

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side Login Form */}
      <div className="md:w-1/2 w-full bg-[#FFF5FF] flex justify-center items-center px-4 sm:px-6 md:px-12 py-8 md:py-0">
        <div className="w-full max-w-sm md:max-w-md p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email or phone number</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className={`w-full p-2 rounded text-white ${
                isFormFilled ? 'bg-[#6A0DAD]' : 'bg-gray-500'
              }`}
              disabled={!isFormFilled}
            >
              Log in
            </button>
            <div className="flex justify-between items-center mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
            </div>
          </form>
          <div className="mt-4">
            <button className="w-full border p-2 rounded flex items-center justify-center">
              <Image
                src="/images/signupPage/googleIcon.png"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
          <p className="text-sm text-center mt-4">
            Don&apos;t have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 w-full h-64 md:h-screen hidden md:block overflow-hidden">
        <Image
          src="/images/signupPage/loginImage.png"
          alt="Side Image"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
