"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning", 
      "Deep Learning", 
      "Computer Vision", 
      "NLP", 
      "Reinforcement Learning"
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "OOP", 
      "Data Structures", 
      "Algorithms", 
      "System Design", 
      "Software Architecture"
    ],
  },
  {
    title: "Electronics & Robotics",
    skills: [
      "Electronics", 
      "Circuit Design", 
      "Raspberry Pi", 
      "Arduino", 
      "Embedded Systems", 
      "Sensors & Actuators", 
      "Robot Control Systems", 
      "IoT Development"
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git & GitHub", "Linux", "AWS", "Docker", "VS Code", "StarUML"],
  },
  {
    title: "Future Horizons",
    skills: [
      "AGI Systems", 
      "Advanced Robotics", 
      "Multi-Agent AI", 
      "Embodied Intelligence", 
      "Autonomous Systems", 
      "Human-Robot Interaction"
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap justify-center">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 flex-1 min-w-[300px]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-text-muted hover:text-white hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
