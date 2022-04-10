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
import Contador from "./pages/Contador";
import Pagina1 from './pages/Pagina1';
import Menu from "./components/menu/Menu";
import Filmes from "./pages/filmes/Filmes";
import FilmesD from "./pages/filmes/FilmesD"
import Cartaz from './pages/filmes/Cartaz'
import Lancamento from "./pages/filmes/Lancamento";
function App() {
 
    return ( 
  <BrowserRouter>
        <Menu/> 
        <Routes>
            <Route path="" element={<Pagina1/>}/>
                
                <Route path="/carros" element={<Carros />}/>
                <Route path="/contador" element={<Contador />} />
                <Route path="/array" element={<Array />} />
                <Route path="/filmes/populares" element={<Filmes />} />
                <Route path="/filmes/cartaz" element={<Cartaz />} />
                <Route path="/filmes/lancamento" element={<Lancamento />} />
                <Route path="/filmes/detalhe/:id" element={<FilmesD />} />
            
        
        </Routes>
  </BrowserRouter>
    );
}

export default App;