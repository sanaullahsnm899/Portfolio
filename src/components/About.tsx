"use client";

import { motion } from "framer-motion";
import { User, Cpu, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-text-muted text-lg leading-relaxed"
          >
            <p>
              My journey into software engineering started with a simple curiosity about how machines think. Today, that curiosity has evolved into a deep passion for Artificial Intelligence and Robotics.
            </p>
            <p>
              I am driven by the desire to build intelligent systems that can perceive, reason, and interact with the world. My research focuses on bridging the gap between human cognition and machine learning, particularly in the fields of Human-Robot Interaction and Autonomous Systems.
            </p>
            <p>
              Looking ahead, my goal is to contribute to the development of AGI (Artificial General Intelligence) and create technologies that amplify human potential and solve complex global challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <User className="text-primary mb-4" size={32} />,
                title: "Software Engineer",
                desc: "Building scalable and robust software architectures.",
              },
              {
                icon: <Cpu className="text-accent mb-4" size={32} />,
                title: "AI Researcher",
                desc: "Exploring neural networks and machine learning models.",
              },
              {
                icon: <Sparkles className="text-purple-400 mb-4" size={32} />,
                title: "Robotics Enthusiast",
                desc: "Designing autonomous and intelligent robotic systems.",
              },
            ].map((item, index) => (
              <div key={index} className={`glass-card p-6 ${index === 2 ? 'sm:col-span-2 text-center flex flex-col items-center' : ''}`}>
                {item.icon}
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
