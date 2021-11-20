import './App.css';
import Cube from './Cube';

function App() {


  return (
    <div className="App">
      
        
          
        
        
          <nav className="navbar">
            <ul>
              <li><a href="default.asp">Home</a></li>
              <li><a href="news.asp">News</a></li>
              <li><a href="contact.asp">Contact</a></li>
              <li><a href="about.asp">About</a></li>
            </ul>
          </nav>
        <body>
          
          <section className="black"> 
            <h1>Grey Kienzle</h1>
            <p>Front-end web developer, Python lover, Haskell enthusiast</p>
          </section>
          <div className="spacer black-dark-blue"/>
          <section className="dark-blue">
            <h1>Title</h1>
            <p>Quia totam suscipit velit magni nulla delectus mollitia exercitationem, perspiciatis, alias odio qui, tempore adipisci natus consequuntur. Corrupti similique animi atque reiciendis, quia aut ducimus error aliquam quo necessitatibus nulla.</p>
            <div className="cubey"><Cube/></div>
          </section>
          <div className="spacer dark-blue-yellow"/>
          <section className="yellow">
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
