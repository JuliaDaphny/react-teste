import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col} from "react-bootstrap"
import Ca from "../../components/card/Ca"
const Lancamento = () => {
  // declaração de state 
  
  let [filme,setFilmes] = useState([])
  useEffect(()=>{
    async function data() {
      
      const pega = await tmdb.get('/movie/latest?language=pt-BR');
      const data= pega.data
        setFilmes(data)
      
      
    }
    data()
  },[])
  return (
    <div>
        <Row xs={1} md={4} >
      
      
         <Col className='mb-3'>   
        <Ca id={filme.id} marca={filme.title} modelo={filme.original_title} imagem={filme.poster_path} cor={filme.original_language} ano={filme.release_date} nomebotao='Mais detalhes' />
        </Col>
      
      
      </Row>
        
    </div>
  )
}

export default Lancamento