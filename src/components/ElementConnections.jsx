import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsPresent } from 'framer-motion'

// Endpoints are measured from the rendered navigation, heading, and content panel.
export default function ElementConnections({ container }) {
  const [geometry, setGeometry] = useState(null)
  const present = useIsPresent()
  useEffect(() => {
    const host = container.current
    if (!host) return
    let frame = 0
    let disposed = false
    const started = performance.now()
    function measure() {
      if (disposed) return
      const title = host.querySelector('h1')
      const panel = host.querySelector(
        '.about-grid, .project-selector, .contact-layout, .expertise-strip',
      )
      const nav = document.querySelector('#primary-navigation a.active')
      const mobile = document.querySelector('.menu-toggle')
      if (!title || !panel || !nav) return
      const h = title.getBoundingClientRect()
      const p = panel.getBoundingClientRect()
      const n = nav.getBoundingClientRect()
      const m = mobile?.getBoundingClientRect()
      const header = document
        .querySelector('.topbar')
        .getBoundingClientRect().bottom
      const desktop = n.width > 0
      const x = h.left - 14
      const start = desktop
        ? [n.right - 5, n.top + n.height / 2]
        : [m.left + m.width / 2, header + 2]
      const end = [h.left, h.top - 9]
      const corner = desktop ? x : h.left - 10
      const panelY = p.top - 9
      const paths = [
        desktop
          ? `M${start[0]} ${start[1]}H${corner}V${end[1]}H${end[0]}`
          : `M${start[0]} ${start[1]}V${header + 12}H${corner}V${end[1]}H${end[0]}`,
        `M${h.left} ${h.bottom + 9}H${x}V${panelY}H${p.left}`,
        `M${p.left} ${panelY}H${p.right}`,
      ]
      setGeometry({
        paths,
        start,
        end,
        panel: [p.left, panelY],
        width: innerWidth,
        height: innerHeight,
        hidden: h.bottom < header || h.top > innerHeight,
        header,
      })
    }
    function settle() {
      measure()
      if (performance.now() - started < 1300)
        frame = requestAnimationFrame(settle)
    }
    function schedule() {
      measure()
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(host)
    window.addEventListener('resize', schedule)
    window.addEventListener('scroll', schedule, { passive: true })
    document.fonts?.ready.then(() => {
      if (!disposed) schedule()
    })
    frame = requestAnimationFrame(settle)
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', schedule)
      window.removeEventListener('scroll', schedule)
    }
  }, [container])
  if (!present || !geometry || geometry.hidden) return null
  return createPortal(
    <svg
      className="element-connections"
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      aria-hidden="true"
      style={{ clipPath: `inset(${geometry.header}px 0 0)` }}
    >
      {geometry.paths.map((path, i) => (
        <path
          key={i}
          d={path}
          pathLength="1"
          className={`connection-step step-${i}`}
        />
      ))}
      <circle cx={geometry.start[0]} cy={geometry.start[1]} r="3" />
      <circle
        className="heading-node"
        cx={geometry.end[0]}
        cy={geometry.end[1]}
        r="3"
      />
      <rect
        className="panel-node"
        x={geometry.panel[0] - 3}
        y={geometry.panel[1] - 3}
        width="6"
        height="6"
      />
    </svg>,
    document.body,
  )
}
