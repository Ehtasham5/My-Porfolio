import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <p className="font-serif text-lg mb-1">Ehtasham<span className="text-accent">.</span></p>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/Ehtasham5" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a 
              href="https://linkedin.com/in/ehtashamfaryad" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
          </div>

          {/* Right */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            Back to top 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
