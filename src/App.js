import { useEffect, useState } from 'react';
import './App.css';
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
              <li><a href="default.asp">Home</a></li>
              <li><a href="news.asp">News</a></li>
              <li><a href="contact.asp">Contact</a></li>
              <li><a href="about.asp">About</a></li>
            </ul>
          </nav>
        </header>
        
        <body>
          
          <section className="black"> 
            <div style={{/*transform: `translateY(${Math.min(y*5000,2000)}px)`*/ position: 'fixed', zIndex: 0}}>
              <div className="heading-wrapper"><h1 className="ticker">{'>'}</h1><h1 className="heading">Grey Kienzle</h1></div>
              <p>Front-end web developer, aspiring software engineer, mathematician at heart</p>
            </div>
              
          </section>
          <div className="spacer black-dark-blue" style={{zIndex: 5}}/>
          <section className="dark-blue">
            <div  style={{transform: `translateX(${Math.min(y*10000-3000,0)}px)`, zIndex: 0, opacity: `${Math.min(y*3,1)}`}}>
              <h1>Title</h1>
              <p>Quia totam suscipit velit magni nulla delectus mollitia exercitationem, perspiciatis, alias odio qui, tempore adipisci natus consequuntur. Corrupti similique animi atque reiciendis, quia aut ducimus error aliquam quo necessitatibus nulla.</p>
            
            </div>
           <div className="cubey"><Cube/></div>
          </section>
          <div className="spacer dark-blue-white"/>
          <section className="white">
            <h1>Title</h1>
            <p>Optio nam voluptate asperiores eaque quasi rerum alias earum accusantium cumque est temporibus sint id non deleniti laborum ea blanditiis, reprehenderit atque assumenda corrupti aspernatur eligendi! Eius qui obcaecati maiores?</p>
          </section>
          <div className="spacer yellow-blue"/>
          <section className="blue">
            <h1>Title</h1>
            <p>Laborum tenetur voluptas blanditiis incidunt! Vitae repellat perferendis numquam sed praesentium ipsam temporibus vero. Ea in quaerat provident quas, ipsa, aut voluptatem ducimus culpa recusandae, et cum possimus excepturi ullam!</p>
          </section>
        
          
        </body>

        
        
    </div>
  );
}


export default App;
