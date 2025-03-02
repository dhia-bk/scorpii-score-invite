
import React from "react";

const AnimatedLogo: React.FC = () => {
  return (
    <div className="hidden">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#0072CE"
            strokeWidth="2"
            className="animate-pulse-subtle"
          />
          <path
            d="M50 20 L75 65 L25 65 Z"
            fill="#0072CE"
            className="origin-center animate-pulse-subtle"
          />
        </svg>
      </div>
      <div className="ml-3 text-2xl font-semibold text-scorpii-dark">
        Scorpii<span className="text-scorpii-blue font-bold">Score</span>
      </div>
    </div>
  );
};

export default AnimatedLogo;
