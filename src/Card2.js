import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import arr from "./data"
function Card2() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>{arr[1].name}</Card.Title>
      <Card.Text>
        {arr[1].descrption}
      </Card.Text>
      <h2>{arr[1].price}</h2>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Card2