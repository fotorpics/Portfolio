import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "AI Task Manager",
    description: "Smart task management system using AI to prioritize and categorize tasks. Built with Next.js and OpenAI API.",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization using WebSocket technology and D3.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["Vue.js", "D3.js", "WebSocket", "Express"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <Github size={20} className="mr-1" /> Code
                  </a>
                  <a href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <ExternalLink size={20} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}