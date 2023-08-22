import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import arr from "./data"

function Card1({x}) {
console.log(x);
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>{x.name}</Card.Title>
      <Card.Text>
        
      </Card.Text>
      <h2>{}</h2>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Card1