import React,{useEffect,useState} from 'react'
import Ca from '../../components/card/Ca'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'

const FilmesD = () => {
    const params = useParams()
    let [filmes,setFilmes] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/movie/'+params.id+'?language=pt-BR');
      const data= pega.data.results
      setFilmes(data)
    }
    data();
  },[])
  return (
    <div >
       <div >
           <h1>bla bla bla{params.id}</h1>
       </div> 
    </div>
  )
}

export default FilmesD