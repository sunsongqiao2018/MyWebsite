import { useState } from 'react'
import gallery1 from '../assets/gallery/gallery_1.jpeg'
import gallery2 from '../assets/gallery/gallery_2.jpeg'
import gallery3 from '../assets/gallery/gallery_3.jpeg'
const gallery = [
  {
    image: gallery1,
    title: 'Paw friends / Haile',
    description:
      'Haile is our longhaired cat. Food comes first, and if there’s milk around, she’ll sing for it.',
  },
  {
    image: gallery2,
    title: 'Paw friends / Hebe',
    description:
      'Hebe is the playful one. In winter, if I can’t find her, I check the heating vents first.',
  },
  {
    image: gallery3,
    title: 'The everyday ritual',
    description:
      'Most mornings start with coffee. I like trying my hand at a little latte art, too.',
  },
]
export default function About() {
  const [index, setIndex] = useState(0)
  return (
    <div className="page">
      <header className="page-heading">
        <h1>
          About me<span className="yellow">.</span>
        </h1>
      </header>
      <section className="about-letter" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Hello,<br />I’m Songqiao.</h2>
        <div className="letter-copy">
          <p className="letter-lead">
            I’m an AI software engineer and game developer based in the
            Greater Toronto Area. My favorite part of building something
            is the moment an idea finally works and I can hand it to
            someone to try.
          </p>
          <p>
            I’ve spent the past seven years building games and interactive
            software, and more recently I’ve been building with AI. One of
            my favorite things about working on a multiplayer VR game was
            going into the game myself and playing a few rounds with the
            people we built it for.
          </p>
          <p>
            I studied Multimedia & Digital Art Design before doing my
            master’s in Computer Science at the University of Windsor.
            Both still show up in my work. I like figuring out how things
            work, and I care just as much about how they feel to use.
          </p>
          <p>
            What excites me about AI is finding out what I can make now
            that I couldn’t before. Sometimes that’s a tool I’d want to
            use again tomorrow. Sometimes it’s a game I’d play one more
            round of. I’d love to keep trying those ideas with people
            who are just as curious about what might work.
          </p>
        </div>
      </section>
      <section className="life-section">
        <div className="section-heading">
          <div>
            <h2>
              Beyond the screen.
            </h2>
          </div>
        </div>
        <div className="gallery">
          <img key={index} src={gallery[index].image} alt={gallery[index].title} />
          <div className="gallery-copy">
            <div aria-live="polite">
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
                ‹
              </button>
              <span>0{index + 1} / 03</span>
              <button
                aria-label="Next photo"
                onClick={() => setIndex((index + 1) % gallery.length)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
