import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/MyWebsite/home" replace />} />
        <Route path="/MyWebsite/home" element={<Home />} />
        <Route path="/MyWebsite/about" element={<About />} />
        <Route path="/MyWebsite/projects" element={<Projects />} />
        <Route path="/MyWebsite/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App