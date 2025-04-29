
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import ScrollToTop from "react-scroll-to-top";

function App() {
  

  return (
    <>     
      <Navbar/>
      <Hero/> 
      <About/> 
      <Education />
      <Projects />  
      <ContactMe />   
      <Footer />  
      <ScrollToTop smooth color='white' style={{background: '#155DFC', display: 'flex', alignItems: 'center', justifyContent:'center'}}   />

    </>
  )
}

export default App
