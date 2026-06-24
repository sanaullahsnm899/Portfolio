"use client";

import { motion } from "framer-motion";
import { BookOpen, Network, BrainCircuit, Bot } from "lucide-react";

const interests = [
  { icon: <Bot size={24} />, title: "Human-Robot Interaction" },
  { icon: <BrainCircuit size={24} />, title: "Emotion-Aware AI" },
  { icon: <Network size={24} />, title: "AGI Architectures" },
  { icon: <BookOpen size={24} />, title: "Reinforcement Learning" },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Research Focus</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Current Focus & Vision</h3>
            <div className="space-y-6 text-text-muted text-lg">
              <p>
                My research is centered around <strong className="text-white">Embodied Intelligence</strong> and how artificial agents can learn to interact naturally within human environments. I am particularly interested in emotion-aware AI that can decode subtle human cues and respond with empathy.
              </p>
              <p>
                The long-term vision is to develop foundational AGI architectures that are safe, reliable, and capable of autonomous reasoning in unpredictable real-world scenarios.
              </p>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl mt-6">
                <h4 className="text-primary font-semibold mb-2">Potential Publications</h4>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>"Emotion-Aware Dialogue Systems in Service Robotics"</li>
                  <li>"Modular AGI Architectures for Low-Latency Perception"</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-accent mb-4">{interest.icon}</div>
                <h4 className="font-semibold text-white">{interest.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
