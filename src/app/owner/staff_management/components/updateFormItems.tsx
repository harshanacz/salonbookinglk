import React from "react";

interface FormItemsProps {
  onSave: (data: {
    name: string;
    age: number;
    gender: string;
    profession: string;
  }) => void;
}

const FormItems: React.FC<FormItemsProps> = ({ onSave }) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [profession, setProfession] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, age: parseInt(age), gender, profession });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl text-center"
    >
      <h2 className="text-2xl font-semibold mb-6">Change Member</h2>

      {/* Profile Image Upload Placeholder */}
      <div className="flex justify-center mb-6">
        <div className="relative w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M16 21v-2a4 4 0 00-8 0v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <div className="absolute bottom-1 right-1 bg-white border border-gray-400 rounded-full p-1">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold text-left">
            Change Name:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold text-left">
              Change Age:
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold text-left">
              Change Gender:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold text-left">
              Change Profession:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="mt-6 bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition"
      >
        Change
      </button>
    </form>
  );
};

export default FormItems;
