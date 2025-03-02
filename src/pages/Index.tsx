
import React, { useEffect, useRef } from "react";
import ScorpiiForm from "@/components/ScorpiiForm";

// Shard animation styles defined directly in the component
const shardStyles = `
  @keyframes float-shard {
    0% {
      transform: translateX(-50px) translateY(-50px) rotate(0deg);
    }
    100% {
      transform: translateX(calc(100vw + 50px)) translateY(calc(100vh + 50px)) rotate(360deg);
    }
  }

  .shard {
    position: absolute;
    animation: float-shard linear infinite;
    will-change: transform;
  }

  .shard-diamond {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }

  .shard-pentagon {
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }

  .shard-hexagon {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  .shard-octagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
`;

const Index: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add animated background effects directly in the component
  useEffect(() => {
    // Insert the styles into the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = shardStyles;
    document.head.appendChild(styleElement);
    
    // Create animated shards
    const createShard = () => {
      if (!containerRef.current) return;
      
      const shard = document.createElement('div');
      shard.classList.add('shard');
      
      // Random size between 20-60px
      const size = Math.random() * 40 + 20;
      shard.style.width = `${size}px`;
      shard.style.height = `${size}px`;
      
      // Random position
      shard.style.left = `${Math.random() * 100}%`;
      shard.style.top = `${Math.random() * 100}%`;
      
      // Random rotation
      const rotation = Math.random() * 360;
      shard.style.transform = `rotate(${rotation}deg)`;
      
      // Random animation duration between 15-30s
      const duration = Math.random() * 15 + 15;
      shard.style.animationDuration = `${duration}s`;
      
      // Random delay
      const delay = Math.random() * 5;
      shard.style.animationDelay = `${delay}s`;
      
      // Random opacity
      shard.style.opacity = `${Math.random() * 0.3 + 0.1}`;
      
      // Determine shard type and color
      const shardType = Math.floor(Math.random() * 4);
      switch (shardType) {
        case 0:
          shard.classList.add('shard-diamond');
          shard.style.backgroundColor = '#0EA5E9';
          break;
        case 1:
          shard.classList.add('shard-pentagon');
          shard.style.backgroundColor = '#0072CE';
          break;
        case 2:
          shard.classList.add('shard-hexagon');
          shard.style.backgroundColor = '#33C3F0';
          break;
        case 3:
          shard.classList.add('shard-octagon');
          shard.style.backgroundColor = '#1EAEDB';
          break;
      }
      
      // Add to container
      containerRef.current.querySelector('.shards-container')?.appendChild(shard);
    };
    
    // Create initial shards
    const shardCount = 20;
    for (let i = 0; i < shardCount; i++) {
      createShard();
    }
    
    // Create new shards periodically
    const interval = setInterval(() => {
      if (containerRef.current?.querySelectorAll('.shard').length > 30) {
        // Remove oldest shard if we have too many
        const oldestShard = containerRef.current.querySelector('.shard');
        oldestShard?.remove();
      }
      createShard();
    }, 3000);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-white">
      {/* Shards container */}
      <div className="shards-container absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shards will be dynamically added here */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScorpiiForm />
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Scorpii Score. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
