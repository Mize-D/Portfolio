import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Layers3, Terminal, ExternalLink, CheckCircle2, MapPin,
  Download, BriefcaseBusiness, GraduationCap, ChevronRight
} from 'lucide-react'
import { profile, skills, projects } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function SocialLink({ href, label, children }) {
  if (!href) return null
  return <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article className="project-card" variants={fadeUp}>
      <button className="project-visual" onClick={() => onOpen(project)} aria-label={`View ${project.name} details`}>
        <img src={project.image} alt={project.imageAlt} />
        <span className="visual-open"><ArrowUpRight size={18} /></span>
      </button>
      <div className="project-content">
        <div className="project-meta"><span>{project.number} / PROJECT</span><span>{project.type}</span></div>
        <h3>{project.name}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        <button className="text-link" onClick={() => onOpen(project)}>Explore project <ArrowRight size={16} /></button>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <motion.div className="project-modal" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
          <span className="eyebrow">{project.number} / {project.type}</span>
          <h2 id="modal-title">{project.name}</h2>
          <p className="modal-role">{project.role}</p>
          <p>{project.description}</p>
          <h4>Selected contributions</h4>
          <ul className="contribution-list">
            {project.highlights.map((item) => <li key={item}><CheckCircle2 size={17} /> <span>{item}</span></li>)}
          </ul>
          <div className="contribution-note"><strong>My scope:</strong> {project.contribution}</div>
          <h4>Technology stack</h4>
          <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          <p className="small-note">{project.note}</p>
          <div className="modal-actions">
            {project.demoUrl && <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16} /></a>}
            {project.sourceUrl && <a className="button button-secondary" href={project.sourceUrl} target="_blank" rel="noreferrer">Source code <Github size={16} /></a>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">&lt;/&gt;</span>{profile.brand}<span className="brand-dot">.</span></a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="availability" variants={fadeUp}><span className="availability-dot" /> OPEN TO OPPORTUNITIES</motion.div>
            <motion.p className="hero-intro" variants={fadeUp}>Hello, I'm <span>{profile.name}</span>.</motion.p>
            <motion.h1 variants={fadeUp}>I build the <span className="gradient-text">logic</span><br />behind the web.</motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>A {profile.role} focused on building reliable APIs, designing databases, and turning ideas into practical web applications.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href={profile.cvPath} download><Download size={16} /> Download CV</a>
            </motion.div>
            <motion.div className="hero-socials" variants={fadeUp}>
              <SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink>
              <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-divider" /><span className="location"><MapPin size={14} /> {profile.location}</span>
            </motion.div>
          </motion.div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><Terminal size={15} /></div>
              <div className="code-body">
                <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-number">02</span>&nbsp;&nbsp;name: <span className="code-green">'{profile.name}'</span>,</div>
                <div><span className="line-number">03</span>&nbsp;&nbsp;role: <span className="code-green">'Backend Developer'</span>,</div>
                <div><span className="line-number">04</span>&nbsp;&nbsp;focus: [</div>
                <div><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'APIs'</span>,</div>
                <div><span className="line-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Databases'</span>,</div>
                <div><span className="line-number">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'System Design'</span></div>
                <div><span className="line-number">08</span>&nbsp;&nbsp;],</div>
                <div><span className="line-number">09</span>&nbsp;&nbsp;learning: <span className="code-orange">true</span>,</div>
                <div><span className="line-number">10</span>{'}'};</div>
                <div className="code-cursor-line"><span className="line-number">11</span><span className="code-comment">// Always building, always learning.</span><span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="footer-status" /> JavaScript</span><span>UTF-8</span><span>Ln 11, Col 1</span></div>
            </div>
            <div className="floating-chip chip-api"><Code2 size={16} /> RESTful APIs</div>
            <div className="floating-chip chip-db"><Database size={16} /> Database Design</div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title="A little about me." description="The person behind the code." />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I enjoy solving problems and building software that is <span>useful, maintainable, and dependable.</span></p>
              <p>My interests are centered around backend development — from designing data models and implementing business logic to building APIs that connect applications. I also have full-stack project experience, which helps me understand how backend systems support real user experiences.</p>
              <p>I'm continuously improving my engineering fundamentals, learning new tools, and looking for opportunities to contribute to a development team.</p>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-icon"><BriefcaseBusiness size={19} /></span><div><strong>Backend-focused</strong><small>Career direction</small></div></div>
              <div className="fact-card"><span className="fact-icon"><Layers3 size={19} /></span><div><strong>Full-stack experience</strong><small>Academic projects</small></div></div>
              <div className="fact-card"><span className="fact-icon"><MapPin size={19} /></span><div><strong>{profile.location}</strong><small>Based in</small></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="02 / TOOLKIT" title="Technologies I work with." description="A growing toolkit for building web applications." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = [Code2, Database, Layers3, Terminal][index]
              return <motion.div className="skill-card" key={group.group} variants={fadeUp}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div><h3>{group.group}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>
            })}
          </div>
          <p className="skills-footnote"><span className="tiny-dot" /> Skills listed reflect technologies and tools used or studied in academic projects.</p>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects that I've built." description="A closer look at my experience, contributions, and technical decisions." />
          <motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}
          </motion.div>
          <div className="project-footnote"><span className="tiny-dot" /> Project descriptions focus on my own contributions, not the entire team's work.</div>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading eyebrow="04 / BACKGROUND" title="Education & growth." description="The foundation behind my development journey." />
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-icon"><GraduationCap size={20} /></div><div className="timeline-content"><span className="eyebrow">EDUCATION</span><h3>Software Engineering</h3><p className="timeline-place">FPT University · Can Tho</p><p>Building a foundation in software development, programming, databases, and collaborative project work.</p></div><span className="timeline-date">2021 - 2026</span></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>Let's build something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>I'm open to opportunities where I can learn, contribute, and grow as a Backend Developer. Feel free to reach out.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
              <div className="contact-socials"><SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink><SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">&lt;/&gt;</span>{profile.brand}<span className="brand-dot">.</span></a>
        <span>Designed & built with care · {new Date().getFullYear()}</span>
        <a href="#home" className="back-top">Back to top <ChevronRight size={15} className="back-top-icon" /></a>
      </footer>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
