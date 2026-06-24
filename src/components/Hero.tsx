"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Bot } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_7s_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_7s_infinite] [animation-delay:2s]"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_7s_infinite] [animation-delay:4s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
            <Bot className="text-accent" size={18} />
            <span className="text-sm font-medium text-text-muted">Future AGI Developer</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Building the Future with <br className="hidden md:block" />
          <span className="text-gradient">Artificial Intelligence</span> & Robotics
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-10"
        >
          Software Engineer passionate about AI, Machine Learning, Human-Robot Interaction, Computer Vision, and Autonomous Intelligent Systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center space-x-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-medium transition-all"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/SanaUllah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
