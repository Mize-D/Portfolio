import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Layers3, Terminal, ExternalLink, CheckCircle2, MapPin,
  Download, BriefcaseBusiness, GraduationCap, ChevronUp, Sparkles
} from 'lucide-react'
import { profile, skills, projects, experience } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span><span>{eyebrow}</span></div>
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
        <span className="visual-number">{project.number}</span>
        <span className="visual-open"><ArrowUpRight size={19} /></span>
      </button>
      <div className="project-content">
        <div className="project-meta"><span>{project.type}</span><span>{project.role}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        <button className="text-link" onClick={() => onOpen(project)}>View project details <ArrowUpRight size={16} /></button>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <motion.div className="project-modal" initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
          <span className="eyebrow">{project.number} / {project.type}</span>
          <h2 id="modal-title">{project.name}</h2>
          <p className="modal-role">{project.role}</p>
          <p>{project.description}</p>
          <h4>Selected contributions</h4>
          <ul className="contribution-list">{project.highlights.map((item) => <li key={item}><CheckCircle2 size={17} /><span>{item}</span></li>)}</ul>
          <div className="contribution-note"><strong>My contribution</strong><br />{project.contribution}</div>
          <h4>Technology stack</h4>
          <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          <p className="small-note">{project.note}</p>
          {(project.demoUrl || project.sourceUrl) && <div className="modal-actions">
            {project.demoUrl && <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16} /></a>}
            {project.sourceUrl && <a className="button button-secondary" href={project.sourceUrl} target="_blank" rel="noreferrer">Source code <Github size={16} /></a>}
          </div>}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Education', '#education'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell" id="home">
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
        <section className="hero section-wrap">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .11 } } }}>
            <motion.div className="availability" variants={fadeUp}><span className="availability-dot" /> OPEN TO BACKEND OPPORTUNITIES</motion.div>
            <motion.p className="hero-intro" variants={fadeUp}>Hello, I'm <span>{profile.fullName}</span>.</motion.p>
            <motion.h1 variants={fadeUp}>Building the<br /><span className="gradient-text">logic behind</span><br />the web.</motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>I'm a {profile.role} interested in building reliable APIs, thoughtful database structures, and maintainable web applications.</motion.p>
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
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.ts</span><Terminal size={15} /></div>
              <div className="code-body">
                <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-number">02</span>&nbsp;&nbsp;name: <span className="code-green">'{profile.name}'</span>,</div>
                <div><span className="line-number">03</span>&nbsp;&nbsp;role: <span className="code-green">'Backend Developer'</span>,</div>
                <div><span className="line-number">04</span>&nbsp;&nbsp;focus: [</div>
                <div><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Java & Node.js'</span>,</div>
                <div><span className="line-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'REST APIs'</span>,</div>
                <div><span className="line-number">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Database design'</span></div>
                <div><span className="line-number">08</span>&nbsp;&nbsp;],</div>
                <div><span className="line-number">09</span>&nbsp;&nbsp;learning: <span className="code-orange">true</span>,</div>
                <div><span className="line-number">10</span>{'}'};</div>
                <div className="code-cursor-line"><span className="line-number">11</span><span className="code-comment">// Build. Learn. Improve.</span><span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="footer-status" /> Backend development</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-api"><Code2 size={16} /> API DEVELOPMENT</div>
            <div className="floating-chip chip-db"><Database size={16} /> DATA MODELING</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading number="01" eyebrow="ABOUT ME" title="Curious by nature. Backend by focus." description="A little about the developer behind the screen." />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I enjoy turning complex requirements into software that is <span>useful, maintainable, and dependable.</span></p>
              <p>My focus is backend development — designing data models, implementing business logic, and building APIs that connect applications. Through academic projects and internship experience, I've also worked across frontend integration and collaborative development workflows.</p>
              <p>I'm continuing to strengthen my engineering fundamentals and looking for an opportunity to contribute, learn from a team, and grow as a developer.</p>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-icon"><BriefcaseBusiness size={19} /></span><div><strong>Backend-focused</strong><small>Professional direction</small></div></div>
              <div className="fact-card"><span className="fact-icon"><Layers3 size={19} /></span><div><strong>Full-stack project work</strong><small>Academic experience</small></div></div>
              <div className="fact-card"><span className="fact-icon"><MapPin size={19} /></span><div><strong>{profile.location}</strong><small>Based in</small></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading number="02" eyebrow="TECHNICAL TOOLKIT" title="Tools for building the backend." description="Technologies used or studied through projects, internship, and hands-on learning." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = [Code2, Database, Layers3, Terminal][index]
              return <motion.div className="skill-card" key={group.group} variants={fadeUp}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div><h3>{group.group}</h3><p>{group.focus}</p><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>
            })}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading number="03" eyebrow="SELECTED WORK" title="Projects, not just code." description="A closer look at the problems I worked on and the contributions I made." />
          <motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={{ visible: { transition: { staggerChildren: .13 } } }}>
            {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}
          </motion.div>
          <p className="project-footnote"><Sparkles size={14} /> Project descriptions highlight my own contributions within team projects.</p>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading number="04" eyebrow="EXPERIENCE" title="Where I started building." description="Early professional exposure to software development." />
          <div className="experience-list">
            {experience.map((item) => <article className="experience-card" key={item.role}>
              <div className="experience-icon"><BriefcaseBusiness size={20} /></div>
              <div className="experience-main"><span className="eyebrow">INTERNSHIP</span><h3>{item.role}</h3><p className="experience-company">{item.company} <span>·</span> {item.location}</p><p className="experience-description">{item.description}</p><div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <span className="experience-period">{item.period}</span>
            </article>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading number="05" eyebrow="EDUCATION" title="The foundation." description="Academic background and continuous learning." />
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={24} /></div>
            <div><span className="eyebrow">BACHELOR'S DEGREE</span><h3>Software Engineering</h3><p>FPT University · Can Tho Campus</p></div>
            <span className="education-period">2021 — 2026</span>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="eyebrow">06 / GET IN TOUCH</span>
            <h2>Have a project or<br /><span className="gradient-text">an opportunity?</span></h2>
            <p>I'm open to connecting with teams and people working on meaningful software. Let's start a conversation.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} /></a>
            <div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><div className="contact-socials"><SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink><SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">&lt;/&gt;</span>{profile.brand}<span className="brand-dot">.</span></a>
        <span>Designed & built with care · {new Date().getFullYear()}</span>
        <a href="#home" className="back-top">Back to top <ChevronUp size={15} /></a>
      </footer>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
