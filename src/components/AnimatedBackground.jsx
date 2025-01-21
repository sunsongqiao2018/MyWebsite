import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

const Shape = styled(motion.div)`
  position: fixed;
  filter: blur(100px);
  opacity: 0.5;
  z-index: 0;
`

const TopRight = styled(Shape)`
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #FF6B6B, #4834d4);
  top: -200px;
  right: -200px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
`

const BottomLeft = styled(Shape)`
  width: 600px;
  height: 600px;
  background: linear-gradient(225deg, #4834d4, #686de0);
  bottom: -200px;
  left: -200px;
  border-radius: 60% 40% 30% 70% / 50% 40% 60% 50%;
`

const Center = styled(Shape)`
  width: 800px;
  height: 800px;
  background: linear-gradient(45deg, #FF6B6B20, #4834d420);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
`

function AnimatedBackground() {
  return (
    <BackgroundWrapper>
      <TopRight
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 40% 50% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <BottomLeft
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
          borderRadius: [
            "60% 40% 30% 70% / 50% 40% 60% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 50% 40% 60% 50%"
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <Center
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    </BackgroundWrapper>
  )
}

export default AnimatedBackground 