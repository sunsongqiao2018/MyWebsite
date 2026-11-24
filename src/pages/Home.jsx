import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data'
import HeroArtwork from '../components/HeroArtwork'

export default function Home() {
  const heroRef = useRef(null)
  return (
    <div className="page home-page">
      <section ref={heroRef} className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-intro">AI Software Engineer / Game Developer</p>
          <h1 id="hero-title" className="hero-quote">
            <span className="headline-mask"><span>Can</span></span>
            <span className="headline-mask"><span>machines</span></span>
            <span className="headline-mask"><span>think?</span></span>
          </h1>
          <p className="quote-attribution">— Alan Turing</p>
          <p className="hero-description">Exploring what AI makes possible in software and game development excites me every day.</p>
          <div className="hero-actions"><Link className="button primary" to="/projects">Explore my work</Link></div>
        </div>
        <HeroArtwork heroRef={heroRef} />
      </section>

      <section className="selected-work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Selected work<span className="yellow">.</span></h2></div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" key={project.id} to={`/projects?project=${project.id}`}>
              <div className="project-thumbnail"><img src={project.images[0]} alt="" loading="lazy" /></div>
              <div className="project-card-copy"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.short}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-banner"><h2>Let’s make something great.</h2><Link className="text-link" to="/contact">Get in touch</Link></section>
    </div>
  )
}
