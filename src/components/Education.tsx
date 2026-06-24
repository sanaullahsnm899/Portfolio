"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookMarked } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Background</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={120} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">BS Software Engineering</h3>
              <p className="text-primary font-medium text-lg mb-8">Currently Pursuing</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center text-white font-semibold mb-4 text-lg">
                    <BookMarked className="text-accent mr-2" size={20} />
                    Relevant Coursework
                  </h4>
                  <ul className="space-y-3 text-text-muted">
                    <li className="flex items-start"><span className="text-accent mr-2">•</span> Data Structures & Algorithms</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span> Object-Oriented Programming</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span> Software Architecture</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span> Artificial Intelligence</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span> Database Systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="flex items-center text-white font-semibold mb-4 text-lg">
                    <Award className="text-accent mr-2" size={20} />
                    Academic Interests
                  </h4>
                  <ul className="space-y-3 text-text-muted">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span> Research in AGI architectures</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span> Open-source AI contributions</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span> Human-Robot Interaction studies</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span> Continuous autonomous learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
