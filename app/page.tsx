'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  EnvelopeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [gridDistortion, setGridDistortion] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide(prev => (prev === 0 ? 1 : 0));
      }
    }, 2500); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate grid distortion
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;
      
      setGridDistortion({
        rotateX: deltaY * 5,
        rotateY: -deltaX * 5,
        scale: isHovering ? 1.1 : 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Social Links */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex gap-2 md:gap-6">
        <motion.a
          href="https://github.com/virocodes"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/80 backdrop-blur-sm px-2 py-2 md:px-4 md:py-2 rounded-lg font-medium text-white flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="hidden md:inline">github</span>
          </div>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/dharshanbellan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/80 backdrop-blur-sm px-2 py-2 md:px-4 md:py-2 rounded-lg font-medium text-white flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="hidden md:inline">linkedin</span>
          </div>
        </motion.a>
        <motion.a
          href="https://instagram.com/dharshy_"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/80 backdrop-blur-sm px-2 py-2 md:px-4 md:py-2 rounded-lg font-medium text-white flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="hidden md:inline">instagram</span>
          </div>
        </motion.a>
      </div>

      {/* Cursor spotlight effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, ${isHovering ? '0.15' : '0.06'}), 
              transparent 40%),
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(168, 85, 247, ${isHovering ? '0.15' : '0.06'}), 
              transparent 40%)
          `
        }}
      />

      {/* Animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50" />
      
      {/* Interactive grid background */}
      <div 
        className="fixed inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${gridDistortion.rotateX}deg) rotateY(${gridDistortion.rotateY}deg) scale(${gridDistortion.scale})`,
          backgroundImage: `
            linear-gradient(to right, rgba(79, 79, 79, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79, 79, 79, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          style={{ opacity, scale }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative inline-block">
              dharshan bellan
              <SparklesIcon className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 absolute -top-2 -right-2 md:-top-4 md:-right-4 animate-pulse" />
            </h1>
          </motion.div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 font-light tracking-wide px-4">
            ai fullstack software engineer, hackathon winner, curr founding eng @ giggles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold text-white">
                check out my work
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              onClick={() => {
                document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/40 backdrop-blur-sm px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold text-white border border-white/10">
                view resume
              </div>
            </motion.button>
          </div>
        </motion.div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="relative pt-20 md:pt-32 px-4">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            my projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 mt-4"
          >
            some cool stuff i&apos;ve built
          </motion.p>
        </div>

        {/* Yaptome - Voice AI Journal */}
        <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image Slideshow Section */}
                  <div 
                    className="lg:col-span-2 aspect-video relative overflow-hidden group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
                    <motion.img
                      src="/yaptome-1.png"
                      alt="Yaptome Screenshot 1"
                      className="w-full h-full object-cover absolute inset-0"
                      animate={{
                        x: `${-100 * currentSlide}%`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    <motion.img
                      src="/yaptome-2.png"
                      alt="Yaptome Screenshot 2"
                      className="w-full h-full object-cover absolute inset-0"
                      animate={{
                        x: `${100 - 100 * currentSlide}%`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    
                    {/* Navigation Arrows */}
                    <button 
                      onClick={() => setCurrentSlide(prev => (prev === 0 ? 1 : 0))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setCurrentSlide(prev => (prev === 1 ? 0 : 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      <button 
                        onClick={() => setCurrentSlide(0)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentSlide === 0 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                      <button 
                        onClick={() => setCurrentSlide(1)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentSlide === 1 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                          yaptome
                        </h2>
                        <span className="px-2 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-xs border border-yellow-500/50 text-yellow-500">
                          work in progress
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                        reflect. improve. speak it into existence.
                        a nightly voice AI that helps you process your day, plan tomorrow, 
                        and become the person you want to be — one conversation at a time.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-blue-500/50">Next.js</span>
                        <span className="px-2 md:px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-purple-500/50">Tailwind</span>
                        <span className="px-2 md:px-3 py-1 bg-green-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-green-500/50">Supabase</span>
                        <span className="px-2 md:px-3 py-1 bg-yellow-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-yellow-500/50">Vapi</span>
                        <span className="px-2 md:px-3 py-1 bg-red-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-red-500/50">Gemini</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group w-full"
                        disabled
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/40 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white/50 border border-white/10 text-sm md:text-base">
                          Coming Soon
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TikTok Clone */}
        <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Video Section */}
                  <div className="lg:col-span-2 aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/cW2vMLTLLJ4"
                      title="TikTok Clone Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        tiktok clone
                      </h2>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                        built a full-featured tiktok clone with ai-powered video recommendations. 
                        uses vector embeddings to suggest videos you&apos;ll actually want to watch.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-blue-500/50">Next.js</span>
                        <span className="px-2 md:px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-purple-500/50">Shadcn</span>
                        <span className="px-2 md:px-3 py-1 bg-green-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-green-500/50">Tailwind</span>
                        <span className="px-2 md:px-3 py-1 bg-yellow-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-yellow-500/50">Lucid</span>
                        <span className="px-2 md:px-3 py-1 bg-red-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-red-500/50">Drizzle</span>
                        <span className="px-2 md:px-3 py-1 bg-indigo-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-indigo-500/50">Neon</span>
                        <span className="px-2 md:px-3 py-1 bg-pink-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-pink-500/50">Vercel Blob</span>
                        <span className="px-2 md:px-3 py-1 bg-emerald-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-emerald-500/50">OpenAI</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/virocodes/tiktokclone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-sm md:text-base">
                          View Code
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* VZN - Pinterest with AI */}
        <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Video Section */}
                  <div className="lg:col-span-2 aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/rvbA8XFkfos"
                      title="VZN Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        vzn - pinterest with ai
                      </h2>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                        what&apos;s your [vzn]? it&apos;s like pinterest, but for ai-generated images. 
                        create and discover cool ai art in a beautiful social platform. 
                        i even hosted the image generation model myself using modal for 
                        serverless compute.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-blue-500/50">Next.js</span>
                        <span className="px-2 md:px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-purple-500/50">Tailwind</span>
                        <span className="px-2 md:px-3 py-1 bg-green-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-green-500/50">Firebase</span>
                        <span className="px-2 md:px-3 py-1 bg-yellow-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-yellow-500/50">HuggingFace</span>
                        <span className="px-2 md:px-3 py-1 bg-red-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-red-500/50">SDXL-Turbo</span>
                        <span className="px-2 md:px-3 py-1 bg-indigo-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-indigo-500/50">Modal</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/virocodes/vzn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-center text-sm md:text-base">
                          View Code
                        </div>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://vzn.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-center text-sm md:text-base">
                          Live Demo
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* KUPL - AI Relationship Analysis */}
        <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Video Section */}
                  <div className="lg:col-span-2 aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Cqkp-7FBRvU"
                      title="KUPL Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        kupl - ai relationship analysis
                      </h2>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                        ever wondered what your instagram dms say about your relationships? 
                        kupl analyzes your messages and gives you the full scoop - from 
                        most used words to relationship scores and summaries.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-blue-500/50">Next.js</span>
                        <span className="px-2 md:px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-purple-500/50">Tailwind</span>
                        <span className="px-2 md:px-3 py-1 bg-green-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-green-500/50">Firebase</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/virocodes/kupl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-center text-sm md:text-base">
                          View Code
                        </div>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://kupl.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-center text-sm md:text-base">
                          Live Demo
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ReviewPal - Video and Product Summary Scraper */}
        <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Video Section */}
                  <div className="lg:col-span-2 aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Gw1CilpraKY"
                      title="ReviewPal Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        reviewpal - video & product summary scraper
                      </h2>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                        a web app that scrapes youtube videos and product pages to get concise summaries. 
                        search for products or videos, and get a summarized version of the content, making 
                        it easier to gather key information quickly.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-blue-500/50">React</span>
                        <span className="px-2 md:px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-purple-500/50">Tailwind</span>
                        <span className="px-2 md:px-3 py-1 bg-green-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-green-500/50">Node.js</span>
                        <span className="px-2 md:px-3 py-1 bg-yellow-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-yellow-500/50">Express</span>
                        <span className="px-2 md:px-3 py-1 bg-red-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-red-500/50">Puppeteer</span>
                        <span className="px-2 md:px-3 py-1 bg-indigo-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-indigo-500/50">Cheerio</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/julmcardenas/web-scraper-olo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-center text-sm md:text-base">
                          View Code
                        </div>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://web-scraper-olo.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg font-semibold text-white text-center text-sm md:text-base">
                          Live Demo
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 md:py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                resume
              </h2>
              <motion.a
                href="/resume.pdf"
                download="Dharshan_Bellan_Resume.pdf"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors flex items-center mt-1 md:mt-2"
                title="Download Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Header Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Dharshan Bellan
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 break-words px-2">
              SF/Bay Area | dbellan1291@gmail.com | linkedIn.com/in/dharshanbellan | github.com/virocodes | dharshan.dev
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Experience
            </h2>
            
            {/* Giggles */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Founding Engineer</h3>
                  <span className="text-sm sm:text-base text-gray-400">Jul 2025 - Present</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Giggles Platforms Inc. • San Francisco, CA</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>First engineering hire; architected entire social media backend from scratch, scaling to 20k DAU and 75k+ users</li>
                  <li>Cut Firebase read costs by ~80%, and migrated full backend to Supabase with custom migration scripts</li>
                  <li>Built AI-driven vector based recommendation engine using Vertex AI + Pinecone, powering personalized video feeds</li>
                  <li>Engineered Node.js + Fastify + Redis microservices with async media pipelines, HLS conversion, and AI analysis</li>
                  <li>Deployed distributed infra on Railway, optimized for speed, cost, and scalability under load</li>
                </ul>
              </div>
            </div>

            {/* Motive */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Software Engineer</h3>
                  <span className="text-sm sm:text-base text-gray-400">Mar 2025 - Jul 2025</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Motive • San Francisco, CA</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Built a computer vision pipeline for test video analysis, cutting manual review time by ~30% across 100+ tests/week.</li>
                  <li>Added support for a new vehicle simulation protocol, expanding coverage from 2 to 3 simulation types</li>
                  <li>Rebuilding reporting tool into a full-stack FastAPI web app for 20+ engineers, enabling interactive test result reporting</li>
                  <li>Collaborate with QA, embedded, and AI teams to build scalable automation tools and improve test system reliability.</li>
                </ul>
              </div>
            </div>

            {/* Headstarter */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Software Engineering Resident</h3>
                  <span className="text-sm sm:text-base text-gray-400">Jul 2024 - Jun 2025</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Headstarter • San Francisco, CA</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Built 14+ machine learning, ai-engineering, and full-stack projects in fast-paced software team environments</li>
                  <li>Developed neural networks in Python, and 11 apps in Typescript on AWS/Vercel with dev and production environments</li>
                  <li>Implemented agentic AI, llm-chaining, etc, on 10+ LLM models</li>
                  <li>Coached by Google Machine Learning, Google Kubernetes, Two Sigma, Tesla, Figma, and Citadel Engineers</li>
                </ul>
              </div>
            </div>

            {/* MandrakeTech */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Software Engineering Intern</h3>
                  <span className="text-sm sm:text-base text-gray-400">Jun 2024 - Aug 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">MandrakeTech • Remote</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Developed a full-stack web app using Flask and PostgreSQL to help users manage job applications</li>
                  <li>Implemented ScrapingDog API to scrape job listings from LinkedIn, enhancing job search automation</li>
                  <li>Deployed the application on Heroku, achieving 50+ visits and 30+ user sign-ups</li>
                </ul>
              </div>
            </div>

            {/* S#AI */}
            <div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Machine Learning Intern</h3>
                  <span className="text-sm sm:text-base text-gray-400">Nov 2023 - May 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">S#AI • Remote</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Built a GPT model from scratch in PyTorch, implementing tokenization, training, and inference</li>
                  <li>Trained a character-level GPT model using AdamW optimizer on a T4 GPU in Google Colab to generate text</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hackathon Wins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Hackathon Wins
            </h2>

            {/* Storybook */}
            <div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">storybook</h3>
                  <span className="text-sm sm:text-base text-gray-400">Oct 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Team Project (~32 hours)</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Won $1000 (2nd Place Best AI App) from Story Foundation for an interactive AI-powered document builder</li>
                  <li>Designed a canvas-style UI in Next.js and Tailwind with draggable blocks and embedded chatbots</li>
                  <li>Integrated OpenAI API to return JSON-formatted data, dynamically rendering tables in HTML</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* AI Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              AI Projects
            </h2>

            {/* TikTok Clone */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">TikTok Clone</h3>
                  <span className="text-sm sm:text-base text-gray-400">Dec 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Team Project (~30 hours)</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Built a TikTok-style recommendation system using vector embeddings for personalized video feeds</li>
                  <li>Developed a scalable recommendation pipeline with Next.js, TypeScript, Neon, Drizzle, and OpenAI embeddings</li>
                  <li>Optimized user engagement tracking using cosine similarity and a learning rate-based update strategy</li>
                </ul>
              </div>
            </div>

            {/* VZN */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">vzn</h3>
                  <span className="text-sm sm:text-base text-gray-400">Aug 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Published Web-App 20 Users (~30 hours)</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Created an AI-powered vision board generator with Next.js and Firebase, reaching 20+ users</li>
                  <li>Implemented Stable Diffusion sdxl-turbo model on HuggingFace via Modal with sub-30s latency</li>
                  <li>Optimized cloud storage using Cloudflare R2 and AWS S3 API for efficient image retrieval</li>
                </ul>
              </div>
            </div>

            {/* ReviewPal */}
            <div className="mb-8 md:mb-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">ReviewPal</h3>
                  <span className="text-sm sm:text-base text-gray-400">Dec 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Team Project (~30 hours)</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Developed a full-stack application with React, Node, and Express to generates product summaries from YouTube videos</li>
                  <li>Scraped video transcripts using YouTube Data API and generated summaries with Gemini API</li>
                </ul>
              </div>
            </div>

            {/* Aptrak */}
            <div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">aptrak</h3>
                  <span className="text-sm sm:text-base text-gray-400">Jun 2024 - Aug 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3">Published Web-App 50 Users (~40 hours)</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                  <li>Developed full stack job tracking application using Flask, PostgreSQL, and Jinja</li>
                  <li>Implemented OpenAI API to generate AI-powered cover letters from job descriptions and resumes</li>
                  <li>Designed an intuitive UI with JavaScript, HTML, and CSS, enhancing user experience</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills & Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* Skills */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Skills
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 md:mb-3">Languages/Frameworks</h3>
                    <p className="text-sm sm:text-base text-gray-300">Python (4yrs) · JavaScript (3yrs) · React (2yrs) · Next.js (1yr) · Node.js (1yr) · Flask (1yr)</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 md:mb-3">Software</h3>
                    <p className="text-sm sm:text-base text-gray-300">Firebase · Vercel · Heroku · JupyterNotebook · Google Colab · Git · Bash</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Education
              </h2>
              <div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Diablo Valley College</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-2">Expected Graduation: May 2026</p>
                  <p className="text-sm sm:text-base text-gray-300">Associate of Science in Computer Science | 4.0 GPA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-black/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg border border-gray-800">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                let&apos;s chat
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 px-2">
                always down to talk about new projects, cool ideas, or just chat about tech. 
                hit me up!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-block"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-black/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 rounded-lg font-semibold text-white inline-flex items-center gap-2 text-sm sm:text-base break-all">
                  <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="break-all">dbellan1291@gmail.com</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
