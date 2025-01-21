import styled from '@emotion/styled'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import profileImage from '../assets/profileimage.jpeg'
import { Link } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import project1Image from '../assets/projects/project1.jpg'
import project2Image from '../assets/projects/project2.png'
import project3Image1 from '../assets/projects/project3_1.png'

const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: #0f0f0f;
`

const HeroSection = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  flex-direction: column;
`

const ScrollSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 1;
  position: relative;
`

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #888;
  margin-bottom: 2rem;
`

const BackgroundShape = styled(motion.div)`
  position: fixed;
  filter: blur(60px);
  opacity: 0.4;
  z-index: 0;
`

const Shape1 = styled(BackgroundShape)`
  width: 600px;
  height: 600px;
  background: linear-gradient(45deg, #ff3366, #ff6b6b);
  top: -100px;
  right: -100px;
  border-radius: 50%;
`

const Shape2 = styled(BackgroundShape)`
  width: 500px;
  height: 500px;
  background: linear-gradient(45deg, #4834d4, #686de0);
  bottom: -100px;
  left: -100px;
  border-radius: 50%;
`

const Shape3 = styled(BackgroundShape)`
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #6ab04c, #badc58);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`

const ScrollCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    background: linear-gradient(45deg, #fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  p {
    color: #888;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  color: #fff;
`

const ProjectPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
`

const ProjectThumbnail = styled(motion.div)`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(15, 15, 15, 0.5) 100%
    );
  }
`

const ScrollIndicator = styled(motion.div)`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  text-align: center;
`

const ScrollArrow = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  transform: rotate(45deg);
`

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto 3rem;
  
  &::before {
    content: '';
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: breathe 4s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    animation: breathe 4s ease-in-out infinite 2s;
  }

  @keyframes breathe {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
  }

  @keyframes borderRotate {
    0% {
      border-image-source: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    }
    50% {
      border-image-source: linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
    }
    100% {
      border-image-source: linear-gradient(360deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    }
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  padding: 4px;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3)) border-box;
  border: 4px solid transparent;
  background-clip: padding-box, border-box;
  animation: borderRotate 4s linear infinite;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`

function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const shape1Y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const shape2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const shape3Scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const shape3Rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <HomeContainer ref={containerRef}>
      <AnimatedBackground />
      <HeroSection>
        <motion.div style={{ opacity, scale, y }}>
          <ContentWrapper>
            <ProfileImageWrapper
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileImage 
                src={profileImage} 
                alt="Profile" 
              />
            </ProfileImageWrapper>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              SONGQIAO SUN
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Software Engineer | Unity Game Developer | Msc in Computer Science
            </Subtitle>
          </ContentWrapper>
        </motion.div>
        <ScrollIndicator
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <span>Scroll to explore</span>
          <ScrollArrow />
        </ScrollIndicator>
      </HeroSection>

      <ScrollSection>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ScrollCard
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardContent>
              <h2>About Me</h2>
              <p>
                A creative developer with a passion for building immersive digital
                experiences. I combine technical expertise with artistic vision to
                create memorable web applications.
              </p>
              <Link to="/about">
                <Button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </ScrollCard>

          <ScrollCard
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardContent>
              <h2>My Skills</h2>
              <p>Specialized in building online multiplayer vr games and everything other fun things</p>
              <SkillsList>
                {['C#','ASP.NET', 'Unity3D','C++', 'Unreal', 'AWS Cloud Services', 'Javascript', 'React', 'React Native', 'CI/CD', 'Test Automation'].map((skill) => (
                  <SkillTag
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </CardContent>
          </ScrollCard>

          <ScrollCard
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardContent>
              <h2>Featured Projects</h2>
              <p>A selection of my recent work and experiments</p>
              <ProjectPreview>
                <Link to="/projects">
                  <ProjectThumbnail
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={project1Image} alt="VR Multiplayer Game" />
                  </ProjectThumbnail>
                </Link>
                <Link to="/projects">
                  <ProjectThumbnail
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={project2Image} alt="Cloud-Based Game Backend" />
                  </ProjectThumbnail>
                </Link>
                <Link to="/projects">
                  <ProjectThumbnail
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={project3Image1} alt="AR Mobile Experience" />
                  </ProjectThumbnail>
                </Link>
              </ProjectPreview>
              <Link to="/projects">
                <Button
                  style={{ marginTop: '2rem' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                </Button>
              </Link>
            </CardContent>
          </ScrollCard>
        </motion.div>
      </ScrollSection>
    </HomeContainer>
  )
}

export default Home 