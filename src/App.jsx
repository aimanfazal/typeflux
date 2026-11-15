import { Route, Routes } from 'react-router'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import { AudioProvider } from './context/AudioContext'

const App = () => {
  return (
    <AudioProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </AudioProvider>
  )
}

export default App