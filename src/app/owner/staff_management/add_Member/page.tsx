"use client"; // Required for client-side rendering

import React from "react";
import Header from "../components/header";
import FormItems from "../components/formItems";
import BackButton from "../components/backButton";

const AddMember: React.FC = () => {
  const handleSave = (data: {
    name: string;
    age: number;
    gender: string;
    profession: string;
  }) => {
    console.log("Saving data:", data);
  };

  const handleBack = () => {
    console.log("Going back!");
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {/* Main Container */}
      <div className="w-full h-screen bg-purple-100 rounded-xl shadow-lg relative">
        {/* Header */}
        <Header title="SalonBooking.lk" />

        {/* Back Button */}
        <BackButton onClick={handleBack} />

        {/* Form Container */}
        <div className="flex items-start justify-center h-screen pt-20">
  <div className="w-[85%] max-w-3xl bg-white rounded-xl shadow-md p-6">
    <FormItems onSave={handleSave} />
  </div>
</div>

      </div>
    </div>
  );
};

export default AddMember;
