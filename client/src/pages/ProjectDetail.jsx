import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import api from '../services/api';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProject = async () => {
      try {
        const { data } = await api.get(`/projects/slug/${slug}`);
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-6 h-6 border-2 border-border border-t-accent rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted">Project not found</p>
        <Link to="/" className="text-accent hover:underline text-sm">← Back to home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Ehtasham Faryad</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <FadeIn>
          <Link to="/" className="group inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-12">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Case Study</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-muted max-w-2xl">{project.summary}</p>
          </div>

          {/* Meta Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-6 mb-12">
            <div>
              <span className="block text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">Role</span>
              <span className="text-sm font-medium">{project.role}</span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">Year</span>
              <span className="text-sm font-medium">{project.year}</span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">Source</span>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
                <FaGithub size={14} /> GitHub
              </a>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">Demo</span>
              {project.liveUrl && project.liveUrl !== '#' ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
                  <ExternalLink size={14} /> Live Site
                </a>
              ) : (
                <span className="text-sm text-muted">Coming soon</span>
              )}
            </div>
          </div>

          {/* Project Image */}
          {project.images && project.images.length > 0 ? (
            <div className="mb-16 rounded-xl overflow-hidden border border-border shadow-lg group">
              <img 
                src={project.images[0]} 
                alt={`${project.title} screenshot`} 
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          ) : (
            <div className="w-full aspect-video bg-foreground/[0.02] border border-border flex items-center justify-center mb-16 rounded-xl">
              <span className="font-serif text-xl text-muted/50 italic">
                Screenshots coming soon
              </span>
            </div>
          )}

          {/* Description */}
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Overview</h2>
            <p className="text-foreground/85 leading-relaxed text-base mb-16">
              {project.description}
            </p>

            <h2 className="font-serif text-2xl md:text-3xl mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mb-16">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[11px] px-4 py-2 border border-border text-muted tracking-wide uppercase hover:border-accent hover:text-accent transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-12 flex flex-wrap gap-4">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button>
                  View Live Site <ArrowUpRight size={16} />
                </Button>
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Button variant="outline">
                <FaGithub size={16} /> View Source Code
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default ProjectDetail;
