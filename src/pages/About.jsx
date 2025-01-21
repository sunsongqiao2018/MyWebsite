import styled from '@emotion/styled'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'

// Import your gallery images
import gallery1 from '../assets/gallery/gallery_1.jpeg'
import gallery2 from '../assets/gallery/gallery_2.jpeg'
import gallery3 from '../assets/gallery/gallery_3.jpeg'

const galleryData = [
  {
    image: gallery1,
    title: "Paw Friends-Haile",
    description: `Our lovely longhair friend, she has been living with us for 8 years.
    Eating food is her top priority always, milk will make her singing.`
  },
  {
    image: gallery2,
    title: "Paw Friends-Hebe",
    description: `Our second cat, who has been living with us for 6 years.
    She is playful and loves sleeping on every vents we have in the house during winter.`
  },
  {
    image: gallery3,
    title: "Latte Art",
    description: `You will neeed the sip of coffee to start your day.`
  }
];

const AboutContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: #0f0f0f;
`

const ContentSection = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const AboutCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
`

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Paragraph = styled.p`
  color: #888;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  min-height: 500px;
  max-height: 600px;
`

const NavigationContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
`

const GalleryText = styled.div`
  color: #888;
  font-size: 1.1rem;
  line-height: 1.8;
  padding-right: 2rem;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 1rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const GalleryImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-height: 400px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  perspective: 1500px;
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const NavigationButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const ImageCounter = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(4px);
`

function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const shape1Y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const shape2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  const [images] = useState(galleryData.map(item => item.image))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <AboutContainer ref={containerRef}>
      <AnimatedBackground />

      <ContentSection>
        <ContentWrapper>
          <AboutCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>About Me</Title>
            <Paragraph>
              Hello! I'm Songqiao Sun, a passionate software engineer specializing in game development
              and immersive experiences. With a Master's degree in Computer Science, I've dedicated my
              career to pushing the boundaries of what's possible in interactive digital environments.
            </Paragraph>
            <Paragraph>
              My journey in technology began with a fascination for video games, which evolved into a
              deep interest in creating engaging digital experiences. Today, I work at the intersection
              of technology and creativity, developing solutions that combine technical excellence with
              user-centered design.
            </Paragraph>
            <Paragraph>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or experimenting with game development frameworks.
            </Paragraph>
          </AboutCard>

          <AboutCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Title>About My Life</Title>
            <GalleryContainer>
              <GalleryText>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{galleryData[currentImageIndex].title}</h3>
                  <p>{galleryData[currentImageIndex].description}</p>
                </motion.div>
              </GalleryText>
              
              <ImageContainer>
                <AnimatePresence mode="wait">
                  <GalleryImage
                    key={currentImageIndex}
                    initial={{ 
                      opacity: 0, 
                      rotateX: -15,
                      rotateY: direction * 15,
                      scale: 0.95
                    }}
                    animate={{ 
                      opacity: 1, 
                      rotateX: 0,
                      rotateY: 0,
                      scale: 1
                    }}
                    exit={{ 
                      opacity: 0, 
                      rotateX: 15,
                      rotateY: direction * -15,
                      scale: 0.95
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <img 
                      src={galleryData[currentImageIndex].image} 
                      alt={galleryData[currentImageIndex].title} 
                    />
                  </GalleryImage>
                </AnimatePresence>
              </ImageContainer>
            </GalleryContainer>
            
            <NavigationContainer>
              <NavigationButton
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </NavigationButton>
              
              <ImageCounter>
                {currentImageIndex + 1} / {images.length}
              </ImageCounter>
              
              <NavigationButton
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </NavigationButton>
            </NavigationContainer>
          </AboutCard>
        </ContentWrapper>
      </ContentSection>
    </AboutContainer>
  )
}

export default About 