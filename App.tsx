import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Trophy, 
  Music,
  ChevronRight,
  Globe
} from 'lucide-react';
import { RESUME_DATA } from './constants';

const Section = ({ title, children, icon: Icon, id }: { title: string, children: React.ReactNode, icon: any, id: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-20"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-xl font-bold text-slate-900">NHS.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          </div>
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif italic font-bold text-slate-900 mb-6 leading-tight">
              {RESUME_DATA.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {RESUME_DATA.title}. Passionate about building impactful software and solving complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={`https://${RESUME_DATA.contact.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href={`https://${RESUME_DATA.contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`https://${RESUME_DATA.contact.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Globe size={18} />
                <span>Website</span>
              </a>
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <Section title="Technical Skills" icon={Code2} id="skills">
          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.skills.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-sm border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Featured Projects" icon={Briefcase} id="projects">
          <div className="grid gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      {project.title}
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    {project.date}
                  </span>
                </div>
                <ul className="space-y-3">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-slate-600 leading-relaxed">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-12">
          <Section title="Education" icon={GraduationCap} id="education">
            <div className="space-y-8">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
                  <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                  <p className="text-blue-600 font-medium">{edu.degree}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                    <span>{edu.date}</span>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  {edu.details && <p className="text-sm text-slate-400 mt-1 italic">{edu.details}</p>}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Experience" icon={Briefcase} id="experience">
            <div className="space-y-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-sm" />
                  <h3 className="text-lg font-bold text-slate-900">{exp.organization}</h3>
                  <p className="text-slate-600 font-medium">{exp.role}</p>
                  <p className="text-sm text-slate-400 mt-1">{exp.date}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Hobbies & Awards */}
        <Section title="Beyond Code" icon={Music} id="hobbies">
          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.hobbies.map((hobby, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">{hobby.name}</h3>
                  <span className="text-xs font-medium text-slate-400">{hobby.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-bold text-xl">NHS.</span>
            <span className="text-slate-400 text-sm">© 2024 Nguyen Hoang Sang</span>
          </div>
          <div className="flex gap-6">
            <a href={`https://${RESUME_DATA.contact.github}`} className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
            <a href={`https://${RESUME_DATA.contact.linkedin}`} className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-slate-400 hover:text-slate-900 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
