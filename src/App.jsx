import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'
import Skill from './component/Skills'
function App() {

  return (
    <>
    <Navbar/>
    {/* <Navbar/> */}
    <Home/>
    <About/>
    <Project/>
    <Skill/>
    
    {/* <Contact/> */}
    </>
  )
}

export default App
