import logo from './logo.svg';
import './App.css';
import Cube from './Cube';
import Pyramid from './Pyramid';

function App() {
  return (
    <div className="App">
      
     
        <div className="test">
          
          <Cube/>
          <Pyramid/>
        </div>
        
    </div>
  );
}


/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

export default App;
