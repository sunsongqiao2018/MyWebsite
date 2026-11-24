import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projects } from '../data'
export default function Projects() {
  const [params, setParams] = useSearchParams()
  const project =
    projects.find((item) => item.id === params.get('project')) || projects[0]
  const [imageIndex, setImageIndex] = useState(0)
  const projectCount = String(projects.length).padStart(2, '0')
  const projectPosition = String(projects.indexOf(project) + 1).padStart(2, '0')
  useEffect(() => setImageIndex(0), [project.id])
  function select(id) {
    setImageIndex(0)
    setParams({ project: id })
  }
  return (
    <div className="page">
      <header className="page-heading">
        <h1>
          Selected work<span className="yellow">.</span>
        </h1>
        <p>
          Experiments in immersion, interaction, and bringing people together.
        </p>
      </header>
      <div className="project-selector" aria-label="Select project">
        {projects.map((item) => (
          <button
            key={item.id}
            aria-pressed={item.id === project.id}
            onClick={() => select(item.id)}
          >
            {item.category}
          </button>
        ))}
      </div>
      <div className="project-stage">
        {projects.map((item) => {
          const active = item.id === project.id
          const viewIndex = active ? imageIndex : 0
          return (
            <article
              key={item.id}
              className={`project-detail${active ? ' is-active' : ''}`}
              aria-hidden={!active}
              inert={active ? undefined : ''}
            >
              <div className="project-visual">
                <img
                  key={`${item.id}-${viewIndex}`}
                  src={item.images[viewIndex] || item.images[0]}
                  alt={`${item.title} — view ${viewIndex + 1}`}
                />
                {item.images.length > 1 && (
                  <div className="image-controls">
                    {item.images.map((image, i) => (
                      <button
                        key={image}
                        aria-label={`Show project image ${i + 1}`}
                        aria-pressed={i === viewIndex}
                        onClick={() => setImageIndex(i)}
                      >
                        0{i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-story">
                <div className="project-story-meta">
                  <span className="eyebrow">{item.category}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="tags">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {item.liveUrl && (
                  <a
                    className="button primary project-source"
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Mahjong Zero
                  </a>
                )}
                {item.sourceUrl && (
                  <a
                    className="text-link project-source"
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
      <div className="project-pagination">
        <span>{projectPosition} / {projectCount}</span>
        <button
          className="text-link"
          onClick={() =>
            select(
              projects[(projects.indexOf(project) + 1) % projects.length].id,
            )
          }
        >
          Next project
        </button>
      </div>
    </div>
  )
}
