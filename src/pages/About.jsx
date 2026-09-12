import { useState } from 'react'
import { skills } from '../data'
import gallery1 from '../assets/gallery/gallery_1.jpeg'
import gallery2 from '../assets/gallery/gallery_2.jpeg'
import gallery3 from '../assets/gallery/gallery_3.jpeg'
const gallery = [
  {
    image: gallery1,
    title: 'Paw friends / Haile',
    description:
      'Our lovely longhair friend. Eating is always her top priority, and milk makes her sing.',
  },
  {
    image: gallery2,
    title: 'Paw friends / Hebe',
    description:
      'Our playful second cat. In winter, you’ll find her sleeping on the warm vents around the house.',
  },
  {
    image: gallery3,
    title: 'The everyday ritual',
    description:
      'A little latte art, and the sip of coffee that starts the day.',
  },
]
export default function About() {
  const [index, setIndex] = useState(0)
  return (
    <div className="page">
      <div className="page-meta">
        <span>PERSONAL FILE / SS–001</span>
        <span>02 / ABOUT ME</span>
      </div>
      <header className="page-heading">
        <span className="eyebrow">THE PERSON BEHIND THE CODE</span>
        <h1>
          Curiosity.
          <br />
          Made interactive<span className="yellow">.</span>
        </h1>
        <p>
          A software engineer, game developer, and lifelong explorer of what
          comes next.
        </p>
      </header>
      <section className="about-grid">
        <div className="light-panel">
          <span className="eyebrow">01 / BACKGROUND</span>
          <h2>
            Technology meets
            <br />a little imagination.
          </h2>
          <p>
            Hello! I’m Songqiao Sun, a software engineer specializing in game
            development and immersive experiences. With a Master’s degree in
            Computer Science, I’m drawn to the possibilities of interactive
            digital environments.
          </p>
          <p>
            My journey began with a fascination for video games. It grew into a
            passion for creating experiences of my own — combining technical
            excellence with thoughtful, user-centered design.
          </p>
        </div>
        <div className="dark-panel">
          <span className="eyebrow">02 / TOOLKIT</span>
          <h2>Tools of the trade.</h2>
          <p>From multiplayer VR to cloud services and web applications.</p>
          <div className="tags">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="credential">
            <span>MSc</span>
            <div>
              COMPUTER SCIENCE<small>Academic foundation</small>
            </div>
          </div>
        </div>
      </section>
      <section className="life-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / OFF THE CLOCK</span>
            <h2>
              A life beyond the screen<span className="yellow"> /</span>
            </h2>
          </div>
        </div>
        <div className="gallery">
          <img src={gallery[index].image} alt={gallery[index].title} />
          <div className="gallery-copy">
            <div aria-live="polite">
              <span className="eyebrow">PERSONAL SNAPSHOTS / 0{index + 1}</span>
              <h3>{gallery[index].title}</h3>
              <p>{gallery[index].description}</p>
            </div>
            <div className="gallery-controls">
              <button
                aria-label="Previous photo"
                onClick={() =>
                  setIndex((index + gallery.length - 1) % gallery.length)
                }
              >
                ←
              </button>
              <span>0{index + 1} / 03</span>
              <button
                aria-label="Next photo"
                onClick={() => setIndex((index + 1) % gallery.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
