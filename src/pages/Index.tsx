
import React, { useEffect, useRef } from "react";
import ScorpiiForm from "@/components/ScorpiiForm";

const Index: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add animated background effects
  useEffect(() => {
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
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-scorpii-dark">
      {/* Shards container */}
      <div className="shards-container absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shards will be dynamically added here */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScorpiiForm />
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Scorpii Score. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
