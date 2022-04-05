import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
const Contador = () => {
    let [numero, setNumero] = useState()
    
  return (
    <div>
     <Button variant='sucess' onClick={setNumero(++numero)}/>
     {numero}
     <Button variant='danger' onClick={setNumero(--numero)}/>
    </div>
  )
}

export default Contador