import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carai from './footer.svg';


import Ca from '../components/card/Ca';

const Pagina1 = () => {
  return (
    <div className='app'> 
        
        

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
  )
}

export default Pagina1