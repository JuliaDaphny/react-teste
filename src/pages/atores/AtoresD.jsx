import React,{useEffect,useState} from 'react'
import Ca from '../../components/card/Ca'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col,Card} from 'react-bootstrap'

const AtoresD = () => {
    const params = useParams()
    let [ator,setAtor] = useState({})
    let [filmes,setFilmes] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/person/'+params.id+'?language=pt-BR');
      const data= pega.data
      setAtor(data)
    }
    async function data1() {
      const pega = await tmdb.get('/person/'+params.id+'/movie_credits?language=pt-BR');
      const data= pega.data.cast
   
      setFilmes(data)
    }
    data()
    data1()
  },[])
  return (
    <div>
            
    <h1>{ator.name}</h1>

    <Row>
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
            </Card>
        </Col>
        <Col md={8}>
            <p><strong>nome: </strong>{ator.name}</p>
            <p><strong>Popularidade: </strong>{ator.popularity}</p>
            <p><strong>Data de aniversario: </strong>{ator.birthday}</p>
            <p><strong>Sinopse: </strong>{ator.biography}</p>
        </Col>
    </Row>
    <Row>
      <h1 className='mb-3'>Filmes:</h1>
    </Row>
    <Row xs={1} md={4} >
      
      {filmes.map(item=>(
         <Col className='mb-3'>   
        <Ca id={item.id} marca={item.title} modelo={item.original_title} imagem={item.poster_path} cor={item.original_language} ano={item.release_date} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
</div>
  )}

export default AtoresD