import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carai from './pages/footer.svg';

import { Button, Alert, Container } from "react-bootstrap";
import Menu from './components/menu/Menu';
import Ca from './components/card/Ca';

function App() {
    return ( 
        <div className='app'> 
        <header>
         <Menu/>
        </header>
        

      <footer className="App-header"  fluid >
        <img src={logo} className="App-logo" alt="logo" />
        <img src={carai} className="eeeee" alt="carai" />
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
       <Ca imagem="holder.js/100px180" texto="bla bla bla 123" titulo="bla" nomebotao="ola mundo" />
       <Ca imagem="holder.js/100px180" texto="bla bla bla 123" titulo="bla" nomebotao="bemvindo a nada" />
      </footer>
    </div>
    );
}

export default App;