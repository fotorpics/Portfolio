import React from 'react';
import { Code2, Database, Globe, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Python", "Java", "GraphQL", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    category: "DevOps",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["JavaScript", "Python", "Java", "C++", "Go"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}