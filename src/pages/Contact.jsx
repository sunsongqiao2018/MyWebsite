import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedBackground from '../components/AnimatedBackground'

emailjs.init('FaZF8zcXp5DtdIjDn');

const ContactContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: #0f0f0f;
  padding: 6rem 2rem;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled(motion.p)`
  color: #888;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`

const SocialGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const SocialLink = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  text-decoration: none;
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  svg {
    font-size: 2.5rem;
    color: #888;
    transition: all 0.3s ease;
  }

  span {
    font-size: 1rem;
    color: #888;
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    
    svg, span {
      color: white;
    }
  }
`

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 4rem auto 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: #888;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }
`

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const StatusMessage = styled(motion.div)`
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.success ? '#4CAF50' : '#f44336'};
`

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/sunsongqiao2018',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/songqiao-sun/',
    color: '#0077B5'
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/@songqiaosun8389',
    color: '#FF0000'
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    url: 'https://www.facebook.com/profile.php?id=100010138597299',
    color: '#1877F2'
  }
]

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState({ message: '', success: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const checkRateLimit = () => {
    const now = Date.now()
    const lastSubmission = localStorage.getItem('lastEmailSubmission')
    const emailCount = parseInt(localStorage.getItem('emailCount') || '0')
    
    // Reset count if it's a new day
    if (lastSubmission && new Date(parseInt(lastSubmission)).getDate() !== new Date(now).getDate()) {
      localStorage.setItem('emailCount', '0')
    }
    
    // Limit to 3 emails per day
    if (emailCount >= 3) {
      return false
    }
    
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!checkRateLimit()) {
      setStatus({ 
        message: 'Daily email limit reached. Please try again tomorrow.', 
        success: false 
      })
      return
    }

    setIsSubmitting(true)
    
    emailjs.sendForm(
      'service_il8qb9h',
      'template_ddeuayb',
      form.current,
      'FaZF8zcXp5DtdIjDn'
    )
      .then((result) => {
        console.log('SUCCESS!', result.text)
        setStatus({ message: 'Message sent successfully!', success: true })
        form.current.reset()
        
        // Update rate limit counters
        const emailCount = parseInt(localStorage.getItem('emailCount') || '0')
        localStorage.setItem('emailCount', (emailCount + 1).toString())
        localStorage.setItem('lastEmailSubmission', Date.now().toString())
      })
      .catch((error) => {
        console.error('FAILED...', error.text)
        setStatus({ 
          message: `Failed to send message: ${error.text}. Please try again.`, 
          success: false 
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <ContactContainer>
      <AnimatedBackground />
      
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect!
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out through any of these platforms. 
          I'm always excited to connect, collaborate, and discuss new opportunities.
        </Subtitle>
        
        <SocialGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              {link.icon}
              <span>{link.name}</span>
            </SocialLink>
          ))}
        </SocialGrid>
        
        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FormGroup>
            <Label>Name</Label>
            <Input 
              type="text" 
              name="user_name" 
              required 
              placeholder="Your name"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Email</Label>
            <Input 
              type="email" 
              name="user_email" 
              required 
              placeholder="Your email"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Message</Label>
            <TextArea 
              name="message" 
              required 
              placeholder="Your message"
            />
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {status.message && (
            <StatusMessage
              success={status.success}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </ContentWrapper>
    </ContactContainer>
  )
}

export default Contact 