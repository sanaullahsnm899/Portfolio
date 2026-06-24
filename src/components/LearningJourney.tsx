"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "Phase 1", title: "Programming Foundations", desc: "Mastered Python, C++, and Data Structures." },
  { year: "Phase 2", title: "AI Fundamentals", desc: "Explored classical Machine Learning and algorithms." },
  { year: "Phase 3", title: "Deep Learning & Vision", desc: "Built neural networks and computer vision models." },
  { year: "Phase 4", title: "Robotics & HRI", desc: "Started developing embodied AI and conversational agents." },
  { year: "Future", title: "AGI Research", desc: "Focusing on autonomous multi-agent systems and foundational AGI." },
];

export default function LearningJourney() {
  return (
    <section id="journey" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Learning Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative pl-12 md:pl-0">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 md:hidden"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2"></div>
                
                {/* Dot for Desktop */}
                <div className="absolute left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10 hidden md:block"></div>
                {/* Dot for Mobile */}
                <div className="absolute left-[-2rem] w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10 md:hidden"></div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6 relative">
                    <span className="text-primary font-bold text-sm mb-1 block">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-text-muted">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
