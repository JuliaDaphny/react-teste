import React,{useEffect,useState} from 'react'
import Ca from '../../components/card/Ca'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col,Card} from 'react-bootstrap'

const FilmesD = () => {
    const params = useParams()
    let [filme,setFilmes] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/movie/'+params.id+'?language=pt-BR');
      const data= pega.data
      setFilmes(data)
    }
    data();
  },[])
  return (
    <div>
            
    <h1>{filme.title}</h1>

    <Row>
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
            </Card>
        </Col>
        <Col md={8}>
            <p><strong>Título Original: </strong>{filme.original_title}</p>
            <p><strong>Popularidade: </strong>{filme.popularity}</p>
            <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
            <p><strong>Orçamento: </strong>{filme.budget}</p>
            <p><strong>Sinopse: </strong>{filme.overview}</p>
        </Col>
    </Row>

</div>
  )}

export default FilmesD