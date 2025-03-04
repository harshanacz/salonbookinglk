import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full bg-purple-100 py-4 px-6 flex justify-between items-center rounded-t-xl">
      <h1 className="text-xl font-bold text-purple-800">{title}</h1>
      <img
        src="/profile-icon.png"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
};

export default Header;
