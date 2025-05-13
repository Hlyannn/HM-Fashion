import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Feedback from '@/components/Feedback';


export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Feedback />
      </main>
    </div>
  );
} 