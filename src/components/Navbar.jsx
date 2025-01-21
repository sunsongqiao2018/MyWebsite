import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  justify-content: flex-end;
  max-width: 1200px;
  margin: 0 auto;
`

const NavItem = styled(motion.li)`
  a {
    color: white;
    font-weight: 500;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: white;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    &:hover:after {
      transform: scaleX(1);
    }
  }
`

function Navbar() {
  const location = useLocation()

  return (
    <Nav>
      <NavList>
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <NavItem
            key={item}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={{
                textDecoration: location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                  ? 'underline' 
                  : 'none'
              }}
            >
              {item}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  )
}

export default Navbar 