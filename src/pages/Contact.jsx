import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
const socials = [
  [
    'GitHub',
    'Code & experiments',
    'https://github.com/sunsongqiao2018',
    FaGithub,
  ],
  [
    'LinkedIn',
    'Professional connections',
    'https://www.linkedin.com/in/songqiao-sun/',
    FaLinkedin,
  ],
  [
    'YouTube',
    'Videos & moments',
    'https://www.youtube.com/@songqiaosun8389',
    FaYoutube,
  ],
  [
    'Facebook',
    'A little more personal',
    'https://www.facebook.com/profile.php?id=100010138597299',
    FaFacebook,
  ],
]
export default function Contact() {
  const form = useRef()
  const sending = useRef(false)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState({ message: '', success: false })
  async function submit(event) {
    event.preventDefault()
    if (sending.current) return
    let count = 0
    try {
      const last = Number(localStorage.getItem('lastEmailSubmission'))
      if (new Date(last).toDateString() === new Date().toDateString())
        count = Number(localStorage.getItem('emailCount')) || 0
    } catch {
      /* The form also works with browser storage disabled. */
    }
    if (count >= 3) {
      setStatus({
        message:
          'Daily email limit reached. Please try again tomorrow or use a social link.',
        success: false,
      })
      return
    }
    sending.current = true
    setBusy(true)
    setStatus({ message: '', success: false })
    try {
      await emailjs.sendForm(
        'service_il8qb9h',
        'template_ddeuayb',
        form.current,
        'FaZF8zcXp5DtdIjDn',
      )
      setStatus({
        message: 'Message sent successfully. Thank you for reaching out!',
        success: true,
      })
      form.current.reset()
      try {
        localStorage.setItem('emailCount', String(count + 1))
        localStorage.setItem('lastEmailSubmission', String(Date.now()))
      } catch {
        /* Sending succeeded even if local storage is unavailable. */
      }
    } catch {
      setStatus({
        message:
          'Your message could not be sent. Please try again or connect through a social link.',
        success: false,
      })
    } finally {
      sending.current = false
      setBusy(false)
    }
  }
  return (
    <div className="page">
      <header className="page-heading">
        <h1>
          Let’s connect<span className="yellow">.</span>
        </h1>
        <p>
          Have a project, an idea, or just want to say hello? I’d love to hear
          from you.
        </p>
      </header>
      <div className="contact-layout">
        <section className="contact-socials">
          <h2>Find me online.</h2>
          <div className="social-list">
            {socials.map(([name, description, url, Icon]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                <Icon />
                <div>
                  {name}
                  <small>{description}</small>
                </div>
              </a>
            ))}
          </div>
        </section>
        <form
          className="contact-form light-panel"
          ref={form}
          onSubmit={submit}
          aria-busy={busy}
        >
          <h2>
            Send a message
          </h2>
          <div className="form-row">
            <div>
              <label htmlFor="user-name">
                YOUR NAME <span>*</span>
              </label>
              <input
                id="user-name"
                name="user_name"
                autoComplete="name"
                required
                maxLength={120}
                placeholder="How should I call you?"
              />
            </div>
            <div>
              <label htmlFor="user-email">
                EMAIL ADDRESS <span>*</span>
              </label>
              <input
                id="user-email"
                name="user_email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <label htmlFor="message">
            YOUR MESSAGE <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={6}
            placeholder="Tell me what you have in mind…"
          />
          <div className="form-bottom">
            <span>* Required fields</span>
            <button className="button primary" disabled={busy}>
              {busy ? 'SENDING…' : 'SEND MESSAGE'}
            </button>
          </div>
          <p
            className={`form-status ${status.success ? 'success' : ''}`}
            role="status"
          >
            {status.message}
          </p>
        </form>
      </div>
    </div>
  )
}
