import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group relative"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 md:py-14 border-b border-border hover:bg-foreground/[0.02] transition-colors duration-300 -mx-6 px-6">
          {/* Left: Number + Title */}
          <div className="w-full md:w-5/12 flex flex-col">
            <span className="text-muted/40 font-serif italic text-5xl md:text-6xl mb-4 block leading-none select-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-muted uppercase tracking-[0.15em] mb-6">
              {project.role} — {project.year}
            </p>
            
            <div className="flex gap-3 mt-auto" onClick={(e) => e.preventDefault()}>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
              >
                <FaGithub size={14} />
              </a>
              {project.liveUrl && project.liveUrl !== '#' && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
          
          {/* Right: Summary + Tags + CTA */}
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 max-w-xl">
              {project.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[11px] px-3 py-1 border border-border text-muted tracking-wide uppercase">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm font-medium text-muted group-hover:text-accent transition-colors duration-300">
              View Project 
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
