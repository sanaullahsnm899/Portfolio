import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Sana<span className="text-gradient">Ullah</span>
          </Link>
          <p className="text-text-muted text-sm mt-2">
            Building the Future with Artificial Intelligence and Robotics.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/sanaullahsnm899" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/sana-ullah-960a50322" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a href="mailto:sanaullah.research@gmail.com" className="text-text-muted hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-text-muted text-xs">
        &copy; {new Date().getFullYear()} Sana Ullah. All rights reserved.
      </div>
    </footer>
  );
}
