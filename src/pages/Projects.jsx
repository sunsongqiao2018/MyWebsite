import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projects } from '../data'
export default function Projects() {
  const [params, setParams] = useSearchParams()
  const project =
    projects.find((item) => item.id === params.get('project')) || projects[0]
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => setImageIndex(0), [project.id])
  function select(id) {
    setImageIndex(0)
    setParams({ project: id })
  }
  return (
    <div className="page">
      <div className="page-meta">
        <span>PROJECT ARCHIVE / 03 ENTRIES</span>
        <span>03 / PROJECTS</span>
      </div>
      <header className="page-heading">
        <span className="eyebrow">IDEAS, BUILT AND PLAYED</span>
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
            <span>/{item.id}</span>
            {item.category}
            <span>↗</span>
          </button>
        ))}
      </div>
      <article className="project-detail" key={project.id}>
        <div className="project-visual">
          <img
            src={project.images[imageIndex] || project.images[0]}
            alt={`${project.title} — view ${imageIndex + 1}`}
          />
          <span className="image-label">PROJECT / {project.id}</span>
          {project.images.length > 1 && (
            <div className="image-controls">
              {project.images.map((image, i) => (
                <button
                  key={image}
                  aria-label={`Show project image ${i + 1}`}
                  aria-pressed={i === imageIndex}
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
            <span className="eyebrow">{project.category}</span>
            <span className="big-number">{project.id}</span>
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <span className="eyebrow">TECHNOLOGY STACK</span>
          <div className="tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </article>
      <div className="project-pagination">
        <span>ARCHIVE / {project.id} OF 03</span>
        <button
          className="text-link"
          onClick={() =>
            select(
              projects[(projects.indexOf(project) + 1) % projects.length].id,
            )
          }
        >
          Next project <span>→</span>
        </button>
      </div>
    </div>
  )
}
