import { Route, Routes, useLocation } from 'react-router'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Journey from './pages/Journey'
import { AudioProvider } from './context/AudioContext'

const App = () => {
  const location = useLocation()

  return (
    <AudioProvider>
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/journey' element={<Journey />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </AudioProvider>
  )
}

export default App