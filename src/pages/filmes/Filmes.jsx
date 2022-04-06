import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col} from "react-bootstrap"
import Ca from "../../components/card/Ca"
const Filmes = () => {
  // declaração de state 
  
  let [filmes,setFilmes] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/list/1');
      const data= pega.data.results
      setFilmes(data)
    }
    data();
  },[])
  return (
    <div>
        <Row xs={1} md={4} >
      
      {filmes.map(item=>(
         <Col>   
        <Ca  marca={item.title} modelo={item.adult} imagem={item.poster_path} cor={item.original_language} ano={item.release_date} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
        
    </div>
  )
}

export default Filmes