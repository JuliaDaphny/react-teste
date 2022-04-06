import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Ca = (x) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+x.imagem} />
  <Card.Body>
    <Card.Title>{x.marca} - {x.modelo}</Card.Title>
    <Card.Text>
      <strong>idioma : </strong>{x.cor}
    </Card.Text>
    <Card.Text>
      <strong>Ano : </strong>{x.ano}
    </Card.Text>
    <Button variant={x.core ? x.core : 'danger'}>{x.nomebotao}</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Ca
