import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Layers3, Terminal, ShieldCheck, GitBranch, ExternalLink, CheckCircle2, MapPin,
  Download, BriefcaseBusiness, GraduationCap, ChevronUp, Sparkles
} from 'lucide-react'
import { profile, skills, projects, experience } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const navItems = [['Welcome', '#home', '00'], ['About', '#about', '01'], ['Skills', '#skills', '02'], ['Projects', '#projects', '03'], ['Education & Experience', '#education', '04'], ['Contact', '#contact', '05']]
const seaCreatureKinds = ['jellyfish', 'octopus', 'turtle', 'crab', 'whale', 'dolphin', 'pufferfish', 'seal', 'shrimp', 'shark']
const seaCreatureEmojis = { jellyfish: '🪼', octopus: '🐙', turtle: '🐢', crab: '🦀', whale: '🐋', dolphin: '🐬', pufferfish: '🐡', seal: '🦭', shrimp: '🦐', shark: '🦈' }
const initialCreatureCount = 50
const maximumCreatureCount = 100

function makeSeaCreature(index, entering = false) {
  const kind = seaCreatureKinds[Math.floor(Math.random() * seaCreatureKinds.length)]
  const size = 44 + Math.random() * 38
  const width = document.documentElement.clientWidth || window.innerWidth

  return {
    id: `${kind}-${index}`,
    kind,
    left: 4 + Math.random() * 88,
    top: 5 + Math.random() * 90,
    size,
    opacity: .24 + Math.random() * .18,
    entering,
    popping: false,
    entryX: 0,
    entryY: 0,
    delay: `${-Math.random() * 12}s`,
    duration: `${7 + Math.random() * 7}s`,
  }
}

function makeSeaCreatures() {
  return Array.from({ length: initialCreatureCount }, (_, index) => makeSeaCreature(index))
}

function makeEnteringCreature(index) {
  const creature = makeSeaCreature(index, true)
  const width = document.documentElement.clientWidth || window.innerWidth
  const minX = window.innerWidth >= 900 ? 220 : 16
  const viewportY = Math.random() * window.innerHeight
  const targetX = minX + Math.random() * Math.max(80, width - minX - creature.size - 24)
  const targetY = window.scrollY + viewportY
  const pageHeight = Math.max(document.documentElement.scrollHeight, targetY + window.innerHeight)
  const side = Math.floor(Math.random() * 4)
  const entryX = side === 0 ? minX - targetX - creature.size : side === 1 ? width - targetX + creature.size : 0
  const entryY = side === 2 ? -viewportY - creature.size : side === 3 ? window.innerHeight - viewportY + creature.size : 0

  return { ...creature, left: targetX / width * 100, top: targetY / pageHeight * 100, entryX, entryY }
}

function SeaCreatures() {
  const [creatures, setCreatures] = useState(makeSeaCreatures)
  const nextCreatureIndex = useRef(initialCreatureCount)

  useEffect(() => {
    const spawnTimer = window.setInterval(() => {
      const newCreatures = [
        makeEnteringCreature(nextCreatureIndex.current++),
        makeEnteringCreature(nextCreatureIndex.current++),
      ]
      setCreatures((current) => [...current, ...newCreatures].slice(-maximumCreatureCount))
    }, 3000)
    return () => window.clearInterval(spawnTimer)
  }, [])

  const popCreature = (id) => {
    setCreatures((current) => current.map((creature) => creature.id === id ? { ...creature, popping: true } : creature))
  }

  const removePoppedCreature = (id) => {
    setCreatures((current) => current.filter((creature) => creature.id !== id))
  }

  return <div className="ocean-creatures" aria-hidden="true">
    {creatures.map((creature) => <div
      key={creature.id}
      className={`sea-creature sea-creature-${creature.kind}${creature.popping ? ' sea-creature-popping' : ''}`}
      style={{ left: `${creature.left}%`, top: `${creature.top}%`, width: creature.size, height: creature.size, opacity: creature.opacity, animationDelay: creature.delay, '--float-duration': creature.duration, '--creature-size': `${creature.size}px`, '--entry-x': `${creature.entryX}px`, '--entry-y': `${creature.entryY}px` }}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse' && !creature.popping) popCreature(creature.id) }}
      onClick={() => { if (!creature.popping) popCreature(creature.id) }}
    >
      <span className={`sea-creature-visual${creature.entering ? ' sea-creature-entering' : ''}`} onAnimationEnd={(event) => {
        if (creature.popping && event.animationName === 'sea-creature-pop') removePoppedCreature(creature.id)
      }}>
        <span className="sea-creature-emoji">{seaCreatureEmojis[creature.kind]}</span>
      </span>
    </div>)}
  </div>
}

function CursorBubbles() {
  const [bubbles, setBubbles] = useState([])
  const nextBubbleId = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let lastSpawnAt = 0
    const handlePointerMove = (event) => {
      if (event.pointerType !== 'mouse') return
      const now = performance.now()
      if (now - lastSpawnAt < 38) return
      lastSpawnAt = now

      const newBubbles = Array.from({ length: 3 }, () => {
        const drift = (Math.random() - .5) * 54
        const rise = -(24 + Math.random() * 42)
        return {
          id: nextBubbleId.current++,
          x: event.clientX + (Math.random() - .5) * 28,
          y: event.clientY + (Math.random() - .5) * 22,
          size: 5 + Math.random() * 10,
          drift: `${drift}px`,
          rise: `${rise}px`,
          midDrift: `${drift * .45}px`,
          midRise: `${rise * .45}px`,
          duration: `${.72 + Math.random() * .52}s`,
          delay: `${Math.random() * .1}s`,
        }
      })

      setBubbles((current) => [...current, ...newBubbles].slice(-72))
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const removeBubble = (id) => setBubbles((current) => current.filter((bubble) => bubble.id !== id))

  return createPortal(
    <div className="cursor-bubble-layer" aria-hidden="true">
      {bubbles.map((bubble) => <i
        key={bubble.id}
        className="cursor-bubble"
        style={{ left: bubble.x, top: bubble.y, '--bubble-size': `${bubble.size}px`, '--bubble-drift': bubble.drift, '--bubble-rise': bubble.rise, '--bubble-mid-drift': bubble.midDrift, '--bubble-mid-rise': bubble.midRise, '--bubble-duration': bubble.duration, '--bubble-delay': bubble.delay }}
        onAnimationEnd={(event) => { if (!event.pseudoElement) removeBubble(bubble.id) }}
      />)}
    </div>,
    document.body,
  )
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
    <motion.article className="project-card" variants={fadeUp} whileHover={{ y: -6, transition: { duration: .22, ease: 'easeOut' } }} whileTap={{ scale: .99 }}>
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
          {project.note && <p className="small-note">{project.note}</p>}
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
  const [activeSection, setActiveSection] = useState('')
  const activeSectionRef = useRef('')
  const pendingSectionRef = useRef('')
  const sectionClassName = (sectionId, baseClass = 'section-wrap section-block') => `${baseClass}${activeSection && activeSection !== `#${sectionId}` ? ' section-muted' : ''}`
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => {
    const updateActiveSection = () => {
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      let currentSection = atPageEnd ? '#contact' : ''
      if (!atPageEnd) {
        document.querySelectorAll('main section[id]').forEach((section) => {
          if (section.getBoundingClientRect().top <= 160) currentSection = `#${section.id}`
        })
      }
      if (pendingSectionRef.current) {
        const pendingTarget = pendingSectionRef.current === '#home'
          ? null
          : document.querySelector(pendingSectionRef.current)
        const pendingReached = pendingSectionRef.current === '#home'
          ? window.scrollY < 80
          : pendingSectionRef.current === '#contact'
            ? atPageEnd || pendingTarget?.getBoundingClientRect().top <= 160
            : pendingTarget?.getBoundingClientRect().top <= 160

        if (pendingReached) {
          currentSection = pendingSectionRef.current
          pendingSectionRef.current = ''
        } else currentSection = pendingSectionRef.current
      } else if (window.scrollY < 80) currentSection = '#home'
      else if (!currentSection) currentSection = activeSectionRef.current

      if (currentSection !== activeSectionRef.current) {
        activeSectionRef.current = currentSection
        setActiveSection(currentSection)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <div className="app-shell" id="home">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <SeaCreatures />
      <header className="site-header">
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, href, number]) => <a key={label} className={activeSection === href ? 'nav-item nav-item-active' : 'nav-item'} href={href} onClick={() => { closeMenu(); pendingSectionRef.current = href; activeSectionRef.current = href; setActiveSection(href) }} aria-current={activeSection === href ? 'location' : undefined}><span className="nav-index">{number}</span>{label}</a>)}
        </nav>
      </header>

      <main>
        <section className={sectionClassName('home', 'hero section-wrap')}>
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .11 } } }}>
            <motion.a className="hero-brand" href="#home" variants={fadeUp}>{profile.brand}</motion.a>
            <motion.div className="availability" variants={fadeUp}><span className="availability-dot" /> BACKEND DEVELOPER · FPT UNIVERSITY</motion.div>
            <motion.h1 variants={fadeUp}>Building the<br /><span className="gradient-text">logic behind</span><br />the web.</motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>I build RESTful APIs, implement backend logic, and connect databases with frontend applications.</motion.p>
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
                <div><span className="line-number">03</span>&nbsp;&nbsp;role: <span className="code-green">'{profile.role}'</span>,</div>
                <div><span className="line-number">04</span>&nbsp;&nbsp;focus: [</div>
                <div><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Java & C#'</span>,</div>
                <div><span className="line-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Node.js & Express.js'</span>,</div>
                <div><span className="line-number">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'RESTful APIs'</span></div>
                <div><span className="line-number">08</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'MongoDB, SQL Server'</span></div>
                <div><span className="line-number">09</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Git & GitHub'</span></div>
                <div><span className="line-number">10</span>&nbsp;&nbsp;],</div>
                <div><span className="line-number">11</span>&nbsp;&nbsp;learning: <span className="code-orange">true</span>,</div>
                <div><span className="line-number">12</span>{'}'};</div>
                <div className="code-cursor-line"><span className="line-number">13</span><span className="code-comment">// Build. Learn. Improve.</span><span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="footer-status" /> Backend development</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-api"><Code2 size={16} /> API DEVELOPMENT</div>
            <div className="floating-chip chip-db"><Database size={16} /> DATA MODELING</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className={sectionClassName('about')} id="about">
          <SectionHeading number="01" eyebrow="ABOUT ME" title="Curious by nature. Backend by focus." description="A little about the developer (Its me 🙋‍♂️) behind the screen." />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I enjoy turning complex requirements into software that is <span>useful, maintainable, and dependable.</span></p>
              <p>Backend developer focused on APIs, data design, and the logic that connects useful products. I bring hands-on experience from an internship and collaborative full-stack projects.</p>
            </div>
            <motion.div className="architecture-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="architecture-top"><span><i className="architecture-pulse" /> REQUEST FLOW</span><span>SYSTEM MAP</span></div>
              <div className="architecture-flow">
                <div className="flow-node"><span className="flow-icon"><Code2 size={19} /></span><strong>Client</strong><small>Frontend</small></div>
                <div className="flow-connector"><ArrowRight size={17} /><i /></div>
                <div className="flow-node flow-node-focus"><span className="flow-icon"><Layers3 size={19} /></span><strong>API</strong><small>Java · Node</small></div>
                <div className="flow-connector"><ArrowRight size={17} /><i /></div>
                <div className="flow-node"><span className="flow-icon"><Database size={19} /></span><strong>Data</strong><small>Mongo · SQL</small></div>
              </div>
              <div className="architecture-bottom"><span>DESIGN</span><b>→</b><span>BUILD</span><b>→</b><span>IMPROVE</span></div>
            </motion.div>
          </div>
        </section>

        <section className={sectionClassName('skills')} id="skills">
          <SectionHeading number="02" eyebrow="TECHNICAL TOOLKIT" title="Tools for building the backend." description="Technologies used or studied through projects, internship, and hands-on learning." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = [Code2, Layers3, Database, ShieldCheck, GitBranch][index]
              return <motion.div className="skill-card" key={group.group} variants={fadeUp}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div><h3>{group.group}</h3><p>{group.focus}</p><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>
            })}
          </div>
        </section>

        <section className={sectionClassName('projects')} id="projects">
          <SectionHeading number="03" eyebrow="SELECTED WORK" title="Projects, not just code." description="A closer look at the problems I worked on and the contributions I made." />
          <motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={{ visible: { transition: { staggerChildren: .13 } } }}>
            {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}
          </motion.div>
          <p className="project-footnote"><Sparkles size={14} /> Project descriptions highlight my own contributions within team projects.</p>
        </section>

        <section className={sectionClassName('education')} id="education">
          <SectionHeading number="04" eyebrow="EDUCATION & EXPERIENCE" title="Where I learned to build." description="Professional experience and academic background." />
          <div className="experience-list">
            {experience.map((item) => <article className="experience-card" key={item.role}>
              <div className="experience-icon"><BriefcaseBusiness size={20} /></div>
              <div className="experience-main"><span className="eyebrow">INTERNSHIP</span><h3>{item.role}</h3><p className="experience-company">{item.company} <span>·</span> {item.location}</p><p className="experience-description">{item.description}</p><div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <span className="experience-period">{item.period}</span>
            </article>)}
            <div className="education-card">
              <div className="education-icon"><GraduationCap size={24} /></div>
              <div><span className="eyebrow">BACHELOR'S DEGREE</span><h3>Software Engineering</h3><p>FPT University · Can Tho Campus</p></div>
              <span className="education-period">2021 — 2026</span>
            </div>
          </div>
        </section>

        <section className={sectionClassName('contact', 'section-wrap contact-section')} id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <h2>Have a project or<br /><span className="gradient-text">an opportunity?</span></h2>
            <p>I'm open to connecting with teams and people working on meaningful software. Let's start a conversation.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} /></a>
            <div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><div className="contact-socials"><SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink><SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="back-top back-top-centered">Back to top <ChevronUp size={18} /></a>
      </footer>
      <CursorBubbles />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
