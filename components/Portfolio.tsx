'use client'

import React from 'react'
import { Mail, Phone, Link as LinkIcon, ExternalLink, Code } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-2xl">
              SS
            </div>
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Siddharth Singh
              </h1>
              <p className="text-xl text-purple-300 mt-2">AI/ML & Full-Stack Developer</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Building innovative solutions at the intersection of AI and web development. Passionate about creating scalable, intelligent systems.
          </p>
        </header>

        {/* Contact Links */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">Get in Touch</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <Mail size={20} /> Email
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <Phone size={20} /> Phone
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <LinkIcon size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
            >
              <Code size={20} /> GitHub
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-cyan-400/50 hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Project {project}</h3>
                <p className="text-gray-300 mb-4">
                  Innovative AI/ML solution demonstrating advanced capabilities and best practices.
                </p>
                <div className="flex gap-3 flex-wrap mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full">FastAPI</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AI & Machine Learning', skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'] },
              { title: 'Full-Stack Development', skills: ['React', 'Next.js', 'Python', 'Node.js'] },
              { title: 'Data & Analytics', skills: ['SQL', 'Pandas', 'Data Visualization', 'ETL'] },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-purple-300">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-10 border-t border-white/10">
          <p className="text-gray-400">© 2024 Siddharth Singh. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
