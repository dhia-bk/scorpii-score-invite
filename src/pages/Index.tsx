
import React, { useEffect, useRef } from "react";
import ScorpiiForm from "@/components/ScorpiiForm";

const Index: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add animated background effects
  useEffect(() => {
    // Parallax effect for orbs
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const elements = containerRef.current.querySelectorAll('.parallax');
      
      elements.forEach((el, index) => {
        const speed = index % 2 === 0 ? 0.05 : -0.05;
        const yPos = scrollY * speed;
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Floating animation for orbs
    const orbs = containerRef.current?.querySelectorAll('.orb') || [];
    orbs.forEach((orb, index) => {
      const delay = index * 0.5;
      const element = orb as HTMLElement;
      element.style.animation = `float 8s ease-in-out ${delay}s infinite`;
    });
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-x"></div>
      
      {/* Moving particles/stars */}
      <div className="stars-container absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="star absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 3}s linear ${Math.random() * 5}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs with parallax and floating effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] right-[15%] w-32 h-32 rounded-full bg-blue-400/20 backdrop-blur-sm parallax orb glow" />
        <div className="absolute top-[25%] left-[8%] w-40 h-40 rounded-full bg-purple-500/20 backdrop-blur-sm parallax orb glow" />
        <div className="absolute bottom-[35%] right-[10%] w-56 h-56 rounded-full bg-indigo-400/20 backdrop-blur-sm parallax orb glow" />
        <div className="absolute bottom-[15%] left-[20%] w-48 h-48 rounded-full bg-cyan-400/20 backdrop-blur-sm parallax orb glow" />
        <div className="absolute top-[50%] left-[40%] w-24 h-24 rounded-full bg-pink-400/20 backdrop-blur-sm parallax orb glow" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScorpiiForm />
          
          <div className="mt-8 text-center">
            <p className="text-xs text-white/70">
              &copy; {new Date().getFullYear()} Scorpii Score. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
