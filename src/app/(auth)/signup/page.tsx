import React from "react";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"style={{ backgroundColor: "#FFF5FF" }}>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden flex">
        {/* Left Section - Image */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/images/signupPage/signupImage.jpg" 
            alt="Signup page illustration"
            width={500}
            height={600}
            className="object-cover h-full"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign up now</h1>

          <form className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="mt-1 block w-full p-3 border rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="mt-1 block w-full p-3 border rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="mt-1 block w-full p-3 border rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mt-1 block w-full p-3 border rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account? <a href="/login" className="text-purple-600 hover:underline">Log in</a>
            </p>

            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-500">OR</span>
            </div>

            <button
              type="button"
              className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Image
                src="/images/signupPage/googleIcon.png" 
                alt="Google icon"
                width={25}
                height={25}
                className="mr-2"
              />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;