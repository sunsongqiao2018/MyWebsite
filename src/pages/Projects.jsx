import styled from '@emotion/styled'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import project1Image from '../assets/projects/project1.jpg'
import project2Image from '../assets/projects/project2.png'
import project3Image1 from '../assets/projects/project3_1.png'
import project3Image2 from '../assets/projects/project3_2.png'
import AnimatedBackground from '../components/AnimatedBackground'
// Import more project images as needed

const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ProjectSection = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  position: relative;
  overflow: hidden;
`

const ProjectContent = styled(motion.div)`
  padding: 4rem 6rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(15, 15, 15, 0.5) 60%,
    transparent
  );
`

const ProjectTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ProjectDescription = styled.p`
  color: #888;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 600px;
`

const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(15, 15, 15, 0.5) 0%,
      rgba(15, 15, 15, 0.3) 10%,
      rgba(15, 15, 15, 0.1) 30%,
      transparent 100%
    );
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Navigation = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
`

const NavDot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  padding: 0;
  outline: none;
`

const ImageCarousel = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`

const CarouselDots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
`

const CarouselDot = styled(motion.button)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  padding: 0;
  outline: none;
`

const projects = [
  {
    id: 1,
    title: "VR Multiplayer Casino Game",
    description: `Designed and improved many key systems and features on the popular social casino game.
    The unique VR experience makes you feel like you are in a real location with unbeatable human interactions.
    My favorite part is joining the game and play with other players to see them enjoy and being competitive.`,
    image: project1Image,
    technologies: ["Unity", "C#", "VR", "Photon"],
  },
  {
    id: 2,
    title: "Slot Machine Game",
    description: `Led the development of multiple slot machine titles, 
    with a strong focus on delivering captivating and engaging gaming experiences. 
    Ensured exceptional game quality and performance, 
    meeting the high standards required for charitable applications`,
    image: project2Image,
    technologies: ["Unity", "C#",".Net","Mathmatics"],
  },
  {
    id: 3,
    title: "Immersive Kinect Gallery Experience",
    description: `A very fun final project for my bechalor degree.
    Together with my tutor, we explored a lot with Microsoft Kinect and whats possbile experience it can provides.
    Even today I still firmly believe that Kinect is the best motion sensor products which can greately reduce the weight on your head from a VR headset.`,
    image: project3Image1,
    technologies: ["Unity", "Kinect", "Interactive"],
  }
]

function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const { scrollYProgress } = useScroll()
  
  const shape1Y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const shape2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default scrolling
      e.preventDefault()
      
      if (e.deltaY > 0) {
        // Scroll down - next project
        setCurrentProject(current => 
          current === projects.length - 1 ? current : current + 1
        )
      } else {
        // Scroll up - previous project
        setCurrentProject(current => 
          current === 0 ? current : current - 1
        )
      }
    }

    // Add event listener with passive: false to prevent scrolling
    const container = document.querySelector('.projects-container')
    container.addEventListener('wheel', handleWheel, { passive: false })

    // Cleanup
    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentProject(current => 
          current === projects.length - 1 ? current : current + 1
        )
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentProject(current => 
          current === 0 ? current : current - 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const renderProjectImage = (project) => {
    if (Array.isArray(project.images)) {
      return (
        <ProjectImage
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${project.title} - View ${index + 1}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            />
          ))}
        </ProjectImage>
      )
    }

    // Default single image rendering
    return (
      <ProjectImage
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
        />
      </ProjectImage>
    )
  }

  // Reset currentImage when changing projects
  useEffect(() => {
    setCurrentImage(0)
  }, [currentProject])

  return (
    <ProjectsContainer className="projects-container">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        <ProjectSection
          key={currentProject}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectContent
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ProjectTitle>{projects[currentProject].title}</ProjectTitle>
            <ProjectDescription>
              {projects[currentProject].description}
            </ProjectDescription>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {projects[currentProject].technologies.map((tech) => (
                <motion.span
                  key={tech}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </ProjectContent>
          
          <ProjectImage
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title}
            />
          </ProjectImage>
        </ProjectSection>
      </AnimatePresence>

      <Navigation>
        {projects.map((_, index) => (
          <NavDot
            key={index}
            active={currentProject === index}
            onClick={() => setCurrentProject(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </Navigation>
    </ProjectsContainer>
  )
}

export default Projects 