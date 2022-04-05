import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
const Contador = () => {
    let [numero, setNumero] = useState()
    
  return (
    <div>
     {numero}
     <Button variant='sucess' onClick={setNumero(++numero)}/>
    </div>
  )
}

export default Contador