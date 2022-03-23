import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carai from './pages/footer.svg';
import Menu from './components/menu/menu';
import {Button, Alert} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={carai} className="A" alt="carai" />
        <p>
          girando infinito no passinho do
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world
        </a>
        <Button variant='outline-secondary'>bla bla bla</Button>
        <Alert>bla bla bla</Alert>
      </header>
      
     
      
    </div>
  );
}

export default App;
