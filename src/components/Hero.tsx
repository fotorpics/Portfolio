import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Full Stack Developer
            <span className="block text-indigo-600">Building Digital Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforming ideas into elegant, scalable solutions. Specialized in modern web technologies
            and cloud architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" 
               className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              View My Work <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#contact"
               className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}