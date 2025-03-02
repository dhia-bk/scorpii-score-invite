
import React, { useEffect, useRef } from "react";
import ScorpiiForm from "@/components/ScorpiiForm";

const Index: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add subtle parallax effect on scroll
  useEffect(() => {
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-[10%] w-20 h-20 rounded-full bg-blue-100 opacity-30 parallax" />
        <div className="absolute top-40 left-[5%] w-32 h-32 rounded-full bg-blue-50 opacity-30 parallax" />
        <div className="absolute bottom-[30%] right-[15%] w-40 h-40 rounded-full bg-blue-100 opacity-20 parallax" />
        <div className="absolute bottom-[10%] left-[20%] w-24 h-24 rounded-full bg-blue-100 opacity-30 parallax" />
      </div>
      
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
