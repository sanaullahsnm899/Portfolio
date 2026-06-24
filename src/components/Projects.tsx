"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { Github } from "@/components/Icons";

const projects = [
  {
    title: "SchoolMind AI",
    github: "",
    demo: "http://13.222.185.229/accounts/login/?next=/",
    description: "AI-powered school management system with intelligent automation and modern dashboard experience.",
    problem: "Traditional school systems lack automation and predictive insights.",
    solution: "Integrated AI features for predictive analytics and automated administrative tasks.",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    challenges: "Handling real-time data synchronization across multiple user roles.",
    lessons: "Deepened understanding of scalable database architecture and AI integration.",
    roadmap: "Mobile app release and advanced NLP-based grading system.",
  },
  {
    title: "SNN Digit Recognizer",
    github: "https://github.com/sanaullahsnm899/snn-digit-recognizer",
    demo: "",
    description: "An AI-powered handwritten digit recognition system that classifies numerical digits using a Spiking Neural Network (SNN) architecture inspired by biological neurons.",
    problem: "Traditional neural networks can be computationally expensive for real-time digit recognition tasks.",
    solution: "Developed a Spiking Neural Network model capable of recognizing handwritten digits efficiently using event-driven neural processing.",
    tech: ["Python", "Spiking Neural Networks (SNN)", "Machine Learning", "NumPy"],
    challenges: "Understanding SNN concepts, neuron spike behavior, and optimizing model accuracy during training.",
    lessons: "Gained practical experience in neuromorphic computing, deep learning fundamentals, and AI model evaluation.",
    roadmap: "Improve recognition accuracy, deploy as a web application, and explore advanced neuromorphic hardware integration.",
  },
  {
    title: "Plant Disease Detection",
    github: "https://github.com/sanaullahsnm899/Plant_Disease_Detection",
    demo: "",
    description: "An AI-based computer vision system that detects plant diseases from leaf images and provides instant diagnostic results to assist farmers and agricultural researchers.",
    problem: "Farmers often face difficulty identifying plant diseases at an early stage, leading to reduced crop yield.",
    solution: "Built an image classification model that analyzes plant leaf images and predicts diseases using machine learning and computer vision techniques.",
    tech: ["Python", "Jupyter Notebook", "Computer Vision", "Machine Learning", "Deep Learning"],
    challenges: "Dataset preprocessing, handling image variations, and improving model generalization across different plant species.",
    lessons: "Learned image preprocessing, dataset management, model training, and practical applications of AI in agriculture.",
    roadmap: "Expand disease coverage, improve prediction accuracy, and develop a mobile application for real-time field use.",
  },
  {
    title: "EduAttend",
    github: "https://github.com/sanaullahsnm899/EduAttend",
    demo: "",
    description: "A modern attendance management mobile app designed for teachers and educational institutions to efficiently manage classes, students, attendance records, and reports.",
    problem: "Manual attendance systems are time-consuming, difficult to maintain, and lack efficient reporting features.",
    solution: "Built a mobile application that simplifies attendance tracking, student management, report generation, and Excel exports through an intuitive interface.",
    tech: ["React Native", "Expo", "JavaScript", "AsyncStorage", "Context API", "XLSX Export"],
    challenges: "Implementing offline data storage, Excel export functionality, attendance audit logs, and reliable backup & restore features.",
    lessons: "Strengthened skills in mobile app development, state management, local storage, file handling, and UI/UX design.",
    roadmap: "Cloud synchronization, multi-user support, analytics dashboard, and AI-powered attendance insights.",
  },
  {
    title: "Autonomous Aircraft Concept",
    github: "",
    demo: "",
    description: "Conceptual intelligent aircraft capable of autonomous navigation and mode switching.",
    problem: "UAVs struggle with dynamic environment adaptation.",
    solution: "A reinforcement learning agent that adapts flight modes based on sensor data.",
    tech: ["C++", "Simulink", "Reinforcement Learning"],
    challenges: "Simulating accurate aerodynamic physics for the RL environment.",
    lessons: "Gained experience in control systems and simulation environments.",
    roadmap: "Hardware-in-the-loop testing and small-scale physical prototyping.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col h-full group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Code2 size={24} />
                </div>
                
                <div className="flex space-x-3">
                  {/* Only show GitHub icon if a link is provided */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-muted hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  
                  {/* Only show External Link icon if a live demo link is provided */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-muted hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div> {/* <-- This was the missing closing div! */}
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-text-muted mb-6 flex-grow">{project.description}</p>
              
              <div className="space-y-4 mb-6 text-sm relative z-10 bg-surface/50 p-4 rounded-xl border border-white/5">
                <div>
                  <span className="font-semibold text-white">Problem: </span>
                  <span className="text-text-muted">{project.problem}</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Solution: </span>
                  <span className="text-text-muted">{project.solution}</span>
                </div>
                {/* Expandable details on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out overflow-hidden">
                  <div className="mb-2">
                    <span className="font-semibold text-white">Challenges: </span>
                    <span className="text-text-muted">{project.challenges}</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-white">Lessons: </span>
                    <span className="text-text-muted">{project.lessons}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Roadmap: </span>
                    <span className="text-text-muted">{project.roadmap}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {tech}
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