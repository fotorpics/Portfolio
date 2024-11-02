import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              DevPortfolio
            </h3>
            <p className="mt-2 text-gray-400">Building the future, one line at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:contact@example.com"
               className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}