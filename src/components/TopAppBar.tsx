import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";

interface TopAppBarProps {
  onBack?: () => void;
}

const TopAppBar: React.FC<TopAppBarProps> = ({ onBack }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center px-4 pt-4">
      <button
        onClick={onBack}
        aria-label="Go back"
        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        <ArrowLeft size={24} weight="regular" />
      </button>
    </div>
  );
};

export default TopAppBar;
