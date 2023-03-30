import './App.css';
import Aboutme from './Components/Aboutme';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { ScrollerMotion } from 'scroller-motion';
// import SmoothScroll from './Components/SmoothScroll';

function App() {
  return (
    <>
    <ScrollerMotion 
    scale={1.5}
    spring={{
      damping: 50,
      mass: 10,
      stiffness: 100
    }}>
      <Navbar/>
      <Herosection heading1="Hello" heading2="I am Farhan Khan"
      para1="A passionate and motivated web" para2="developer . I am dedicated to creating"
      para3="user friendly , visually appealing and" para4="responsive website."/>
      <Projects/>
      <Skills/>
      <Aboutme/>
    </ScrollerMotion>
    </>
  );
}

export default App;
