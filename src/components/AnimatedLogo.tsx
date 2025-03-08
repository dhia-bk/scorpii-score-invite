
import React from "react";

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-center mb-6 justify-center">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="relative bg-scorpii-dark rounded-xl p-1 overflow-hidden">
          {/* Soccer ball with central star */}
          <div className="relative w-12 h-12">
            {/* White soccer ball */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 A40 40 0 1 1 49.99 10"
                fill="none"
                stroke="white"
                strokeWidth="20"
              />
              {/* Soccer ball patterns */}
              <path
                d="M50 10 L70 40 L50 70 L30 40 Z"
                fill="none"
                stroke="#1A1F2C"
                strokeWidth="2"
              />
            </svg>
            
            {/* Central orange star */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse-subtle"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#F97316"
                  stroke="#FEC6A1"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            
            {/* Surrounding stars */}
            <div className="absolute top-0 left-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="absolute top-0 right-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0EA5E9" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0EA5E9" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 text-2xl font-bold">
        <span className="text-white">SCORPII</span>
        <span className="block text-lg tracking-widest text-white/90">SCORE</span>
      </div>
    </div>
  );
};

export default AnimatedLogo;
