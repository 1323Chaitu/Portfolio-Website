import React, { useState } from 'react';
import {
  ArrowUpRight, Mail, Menu, X, Download,
  Code2, BriefcaseBusiness, Award, Send, Sparkles
} from 'lucide-react';
const projects = [
  { number: '01', type: 'WEB APPLICATION', name: 'Insight Dashboard', description: 'A clean analytics dashboard that turns complex information into clear, actionable insights.', stack: ['React', 'JavaScript', 'CSS'], link: '#' },
  { number: '02', type: 'PRODUCT DESIGN', name: 'Studio Workspace', description: 'A thoughtful digital workspace concept focused on clarity, accessibility, and productive workflows.', stack: ['Research', 'UI Design', 'Prototyping'], link: '#' },
  { number: '03', type: 'DEVELOPER TOOL', name: 'TaskFlow', description: 'A lightweight task management experience built to make everyday planning feel effortless.', stack: ['React', 'Node.js', 'API'], link: '#' }
];

const skills = ['JavaScript', 'React', 'HTML5', 'CSS3', 'Python', 'Node.js', 'Git & GitHub', 'Responsive Design', 'REST APIs', 'SQL', 'Figma', 'Problem Solving'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A</span> alex<span className="brand-muted">.folio</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Projects', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, I'M ALEX MORGAN</p>
            <h1>I build digital<br /><span>experiences</span> that<br />make an impact.</h1>
            <p className="hero-text">A creative professional combining technology, thoughtful design, and problem-solving to turn ideas into meaningful products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="/resume.pdf" download><Download size={16} /> Download CV</a>
            </div>
            <div className="socials">
  <a href="https://github.com/" aria-label="GitHub">GH</a>
  <a href="https://linkedin.com/" aria-label="LinkedIn">in</a>
  <a href="mailto:hello@example.com" aria-label="Email"><Mail /></a>
</div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait-card">
              <div className="portrait-top"><span>CREATIVE MINDSET</span><Sparkles size={17} /></div>
              <div className="avatar-placeholder"><span>AM</span></div>
              <div className="portrait-bottom"><div><strong>Alex Morgan</strong><small>Developer · Designer · Creator</small></div><span className="arrow-circle"><ArrowUpRight /></span></div>
            </div>
            <div className="float-tag tag-top">✳ &nbsp; Curiosity-led</div>
            <div className="float-tag tag-bottom">Based anywhere <span>↗</span></div>
          </div>
          <a className="scroll-note" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading"><p className="eyebrow">01 / A LITTLE ABOUT ME</p><h2>Good work starts<br />with <span>curiosity.</span></h2></div>
          <div className="about-content">
            <p className="lead">I’m a multidisciplinary professional who enjoys solving real problems through technology and design.</p>
            <p>I like taking ideas from an early sketch to a polished, useful experience. My approach blends practical thinking, continuous learning, and attention to the details that make a product feel right.</p>
            <div className="stats">
              <div><strong>03<span>+</span></strong><small>Years learning & building</small></div>
              <div><strong>12<span>+</span></strong><small>Tools & technologies</small></div>
              <div><strong>08<span>+</span></strong><small>Projects explored</small></div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-title-row"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Things I've <span>made.</span></h2></div><p className="section-aside">A selection of projects, experiments, and ideas brought to life.</p></div>
          <div className="project-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className={`project-art art-${project.number}`}><span>{project.number}</span><div className="art-window"><div className="window-dots">● ● ●</div><div className="art-lines"><i /><i /><i /></div><div className="art-blocks"><b /><b /><b /></div></div><span className="art-caption">SELECTED PROJECT</span></div>
              <div className="project-info"><p className="eyebrow">{project.type}</p><div className="project-name"><h3>{project.name}</h3><a href={project.link} aria-label={`View ${project.name}`}><ArrowUpRight /></a></div><p className="project-description">{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </article>)}
          </div>
        </section>

        <section className="skills section-wrap section-pad">
          <div className="section-title-row"><div><p className="eyebrow">03 / WHAT I BRING</p><h2>Skills & <span>tools.</span></h2></div><p className="section-aside">A growing toolkit for creating thoughtful, reliable digital experiences.</p></div>
          <div className="skill-layout"><div className="skill-intro"><Code2 size={28} /><h3>Always learning.<br />Always building.</h3><p>I believe strong fundamentals and a willingness to learn are just as important as the tools themselves.</p></div><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}<ArrowUpRight size={15} /></div>)}</div></div>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <div className="section-heading"><p className="eyebrow">04 / THE JOURNEY</p><h2>Experience &<br /><span>milestones.</span></h2></div>
          <div className="timeline">
            <article><div className="timeline-date">2024 — PRESENT</div><div><h3>Independent Projects & Learning</h3><p className="role">Developer / Creative Professional</p><p>Building practical projects, strengthening technical foundations, and exploring better ways to solve user problems.</p></div><BriefcaseBusiness /></article>
            <article><div className="timeline-date">2021 — 2024</div><div><h3>Education & Foundations</h3><p className="role">Learning, experimenting, collaborating</p><p>Developed core knowledge through coursework, hands-on practice, and personal experiments.</p></div><Award /></article>
          </div>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-copy"><p className="eyebrow">05 / YOUR TURN</p><h2>Have a good idea?<br /><span>Let's make it real.</span></h2><p>Have a project in mind, an opportunity, or just want to connect? Send a message.</p><a className="email-link" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={17} /></a></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Your name<input required name="name" placeholder="How should I call you?" /></label>
              <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
              <label>Your message<textarea required name="message" rows="4" placeholder="Tell me a little about it..." /></label>
              <button className="button button-primary" type="submit">Send message <Send size={16} /></button>
              {sent && <p className="form-success">Thanks! This demo form is ready to be connected to an email service.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">A</span> alex<span className="brand-muted">.folio</span></a><p>Designed with intention. Built with curiosity.</p><span>© {new Date().getFullYear()} Alex Morgan</span></footer>
    </div>
  );
}

export default App;