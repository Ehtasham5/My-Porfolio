import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Download, Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { ProjectCard } from '../components/ui/ProjectCard';
import { FadeIn } from '../components/ui/FadeIn';

import { personalInfo, experience, skills, projects } from '../data/content';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call for purely frontend version
      // In a real app without your own backend, you would use Web3Forms, Formspree, or EmailJS here.
      // Example: await fetch('https://api.web3forms.com/submit', { method: 'POST', body: JSON.stringify({...data, access_key: 'YOUR_ACCESS_KEY'}) })
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{personalInfo.shortName} — Full-Stack Developer</title>
        <meta name="description" content={`Portfolio of ${personalInfo.name} — ${personalInfo.title}.`} />
        <meta property="og:title" content={`${personalInfo.shortName} — Full-Stack Developer`} />
        <meta property="og:description" content={`${personalInfo.title}.`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">

        {/* ─── HERO ─── */}
        <section className="min-h-[85vh] pt-8 pb-16 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-medium tracking-wider text-accent">OPEN TO INTERNSHIPS</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] mb-6 text-balance">
                  Building full-stack{' '}
                  <span className="text-accent italic">products.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed">
                  I'm <span className="text-foreground font-medium">{personalInfo.shortName}</span> — 
                  a software engineering student who ships production-grade APIs and polished interfaces.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                    View Selected Work <ArrowRight size={16} />
                  </Button>
                  <Button variant="outline">
                    <Download size={16} /> Download CV
                  </Button>
                </div>

                {/* Social Row */}
                <div className="flex items-center gap-4 mt-10 pt-10 border-t border-border">
                  <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all" aria-label="Email">
                    <Mail size={16} />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all" aria-label="GitHub">
                    <FaGithub size={16} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all" aria-label="LinkedIn">
                    <FaLinkedin size={16} />
                  </a>
                  <span className="ml-2 text-sm text-muted">{personalInfo.email}</span>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
              <FadeIn delay={0.2} direction="left">
                <div className="relative w-64 md:w-80 mx-auto">
                  {/* Accent ring behind image */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/20 translate-x-3 translate-y-3" />
                  <img 
                    src="/profile.jpg" 
                    alt={personalInfo.name} 
                    className="relative w-full aspect-square object-cover object-top rounded-full border-2 border-border shadow-2xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-700"
                    loading="eager"
                  />
                  
                  {/* Floating card */}
                  <div className="absolute bottom-2 -left-4 bg-background border border-border px-4 py-3 rounded-xl shadow-lg hidden md:flex items-center gap-3 z-10">
                    <MapPin size={14} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted leading-none mb-0.5">Based in</p>
                      <p className="text-sm font-medium leading-none">Faisalabad, PK</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── SELECTED WORK ─── */}
        <section id="work" className="py-24 md:py-32 border-t border-border">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Portfolio</p>
                <h2 className="font-serif text-4xl md:text-6xl">Selected Work</h2>
              </div>
              <span className="hidden md:block text-sm text-muted">{projects.length} projects</span>
            </div>
          </FadeIn>
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* ─── ABOUT & EXPERIENCE ─── */}
        <section id="about" className="py-24 md:py-32 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Background</p>
                <h2 className="font-serif text-4xl md:text-6xl mb-8">About</h2>
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-foreground/85 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border mt-10">
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2">Location</h3>
                    <p className="text-sm">{personalInfo.location}</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2">Education</h3>
                    <p className="text-sm">{personalInfo.education}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2">Coursework</h3>
                    <p className="text-sm text-foreground/80">{personalInfo.coursework}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-1" />
            
            <div className="lg:col-span-6">
              <FadeIn delay={0.2}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Career</p>
                <h2 className="font-serif text-4xl md:text-6xl mb-12">Experience</h2>
                
                {experience.map((job, idx) => (
                  <div key={idx} className="relative border-l-2 border-border pl-8 pb-10 last:pb-2">
                    <div className="absolute w-3.5 h-3.5 bg-accent rounded-full -left-[8px] top-1" />
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent block mb-2">{job.year}</span>
                    <h3 className="text-xl font-medium mb-1">{job.role}</h3>
                    <p className="text-sm text-muted mb-5">{job.company} · {job.location}</p>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-accent mt-1.5 shrink-0">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="py-24 md:py-32 border-t border-border">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Expertise</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-16">Skills & Tools</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {skills.map((skillGroup, index) => (
              <FadeIn key={skillGroup.category} delay={0.1 * (index + 1)}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-5 pb-3 border-b border-border">{skillGroup.category}</h3>
                <ul className="space-y-2.5 text-sm text-foreground/85">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-24 md:py-32 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Get in Touch</p>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Let's Talk<span className="text-accent">.</span></h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-10 max-w-md">
                Currently looking for new opportunities. Whether you have a project idea or just want to say hi — I'd love to hear from you.
              </p>
              
              <div className="space-y-5">
                <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-4 hover:text-accent transition-colors">
                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent transition-all">
                    <Mail size={16} />
                  </span>
                  <span className="text-sm">{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-4 hover:text-accent transition-colors">
                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent transition-all">
                    <Phone size={16} />
                  </span>
                  <span className="text-sm">{personalInfo.phone}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-4 hover:text-accent transition-colors">
                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent transition-all">
                    <FaLinkedin size={16} />
                  </span>
                  <span className="text-sm">{personalInfo.linkedin.replace('https://', '')}</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="group flex items-center gap-4 hover:text-accent transition-colors">
                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent transition-all">
                    <FaGithub size={16} />
                  </span>
                  <span className="text-sm">{personalInfo.github.replace('https://', '')}</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted block mb-3">Name</label>
                  <Input placeholder="John Doe" {...register('name')} />
                  {errors.name && <span className="text-red-500 text-xs mt-2 block">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted block mb-3">Email</label>
                  <Input placeholder="john@example.com" type="email" {...register('email')} />
                  {errors.email && <span className="text-red-500 text-xs mt-2 block">{errors.email.message}</span>}
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted block mb-3">Message</label>
                  <Textarea placeholder="Tell me about your project or idea..." {...register('message')} />
                  {errors.message && <span className="text-red-500 text-xs mt-2 block">{errors.message.message}</span>}
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={14} />
                </Button>
                
                {submitSuccess && (
                  <p className="text-accent text-sm mt-4 flex items-center gap-2">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
