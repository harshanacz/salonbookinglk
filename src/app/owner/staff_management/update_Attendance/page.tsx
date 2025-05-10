"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { FaArrowLeft } from "react-icons/fa";

const EditMember = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    profession: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Member Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <div className="relative w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
        {/* Back Button */}
        <button onClick={() => router.back()} className="absolute top-4 left-4 p-2">
          <FaArrowLeft className="text-purple-500 text-2xl" />
        </button>

        <h2 className="text-center text-2xl font-semibold mb-4">Edit Member</h2>

        {/* Profile Image Upload */}
        <div className="flex justify-center mb-4">
          <label className="relative cursor-pointer">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-lg">+</span>
              )}
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Change name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Change age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Change Gender:</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Change profession:</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Change Button */}
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md">
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMember;
