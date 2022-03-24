import React from 'react'
import { Card, Button } from 'react-bootstrap';
const Ca = (x) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="{x.imagem}" />
  <Card.Body>
    <Card.Title>{x.titulo}</Card.Title>
    <Card.Text>
      {x.texto}
    </Card.Text>
    <Button variant="primary">{x.nomebotao}</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Ca
