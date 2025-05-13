import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#14452F]/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 text-[#0A5C36] font-poetsen">
          Welcome to HM Fashion
        </h1>
        <p className="text-xl text-[#1D2E28] mb-8">
          Discover Bangkok's finest fashion and snacks
        </p>
      </div>
    </section>
  );
};

export default Hero; 