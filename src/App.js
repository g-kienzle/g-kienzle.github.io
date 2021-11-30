import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Cube from './Cube';

function useScroll() {
  const [scroll, setScroll] = useState ({
    x: null,
    y: null

  })

  useEffect(() => {

    function handle(e){
      setScroll({
        x: window.scrollX / (document.documentElement.scrollWidth-window.innerWidth),
        y: window.scrollY / (document.documentElement.scrollHeight-window.innerHeight)

      })
    }
    window.
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);

  }, [])

  return scroll;
}


function App() {

  const {x, y} = useScroll();

  return (
    <div className="App">
        <header>  
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        
        <div>
          
          <section className="black" id="home"> 
            <div style={{position: 'fixed', zIndex: 0}}>
              <div className="heading-wrapper"><h1 className="ticker">{'>'}</h1><h1 className="heading">Grey Kienzle</h1></div>
              <p>Front-end web developer, aspiring software engineer, mathematician at heart</p>
            </div>
              
          </section>
          <div className="spacer black-white" style={{zIndex: 5}}/>
          <section className="white" id="about">
            <div style={{zIndex: 0, opacity: `${Math.min(y*3,1)}`}}>
              <h1>About Me</h1>
              <ul>
                <li>CS/Math Major at the University of Maryland {"(Class of 2024)"}</li>
                <li>Aspiring Software Engineer</li>
                <li>Experienced in Python, Java, and HTML/CSS</li>
                <li>Learning front-end development with ReactJS</li>
                <li><a href="https://www.gnu.org/philosophy/free-sw.html">Free software</a> is my friend</li>
              </ul>
              
            
            </div>
           <div className="cubey"><Cube/></div>
          </section>
          <div className="spacer white-black"/>
          <section className="black" id="projects">
            <h1>Title</h1>
            <p>Optio nam voluptate asperiores eaque quasi rerum alias earum accusantium cumque est temporibus sint id non deleniti laborum ea blanditiis, reprehenderit atque assumenda corrupti aspernatur eligendi! Eius qui obcaecati maiores?</p>
          </section>
          <div className="spacer black-blue"/>
          <section className="blue" id="contact">
            <h1>Contact</h1>
            <div className="form"><ContactForm/></div>
          </section>
        
          
        </div>

        
        
    </div>
  );
}


export default App;
