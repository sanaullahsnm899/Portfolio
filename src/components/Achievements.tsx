"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Target } from "lucide-react";

const achievements = [
  { icon: <Trophy size={20} />, text: "Developed complete SchoolMind AI system from scratch." },
  { icon: <Star size={20} />, text: "Developed multiple AI and software engineering projects, transforming ideas into functional applications." },
  { icon: <Target size={20} />, text: "Completed comprehensive self-learning milestones in Deep Learning and RL." },
  { icon: <Trophy size={20} />, text: "Successfully integrated complex state-management in React/Next.js projects." },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Milestones & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 glass-card p-6"
            >
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full text-primary">
                {item.icon}
              </div>
              <p className="text-text-main pt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
