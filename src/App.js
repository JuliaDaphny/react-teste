import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import './App.css';
import Carros from './pages/Carros';
import Array from './pages/Array';

import Pagina1 from './pages/Pagina1';
import Menu from "./components/menu/Menu";

function App() {
 
    return ( 
  <BrowserRouter>
        <Menu/> 
        <Routes>
            <Route path="" element={<Pagina1/>}/>
                
                <Route path="/carros" element={<Carros />}/>
               
                <Route path="/array" element={<Array />} />
            
        
        </Routes>
  </BrowserRouter>
    );
}

export default App;