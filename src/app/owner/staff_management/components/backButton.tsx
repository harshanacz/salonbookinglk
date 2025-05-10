import React from "react";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-12 top-24 p-2 bg-purple-300 rounded-full hover:bg-purple-400 transition"
    >
      <ArrowLeft className="w-6 h-6 text-purple-800" />
    </button>
  );
};

export default BackButton;
