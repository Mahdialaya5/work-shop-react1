import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Card3() {
    var name="x"
    var firstname=""
  return (
    <Card style={{ width: '18rem' }}>
   {firstname ? <Card.Img variant="top" src="" />:null}
    <Card.Body>
      <Card.Title>{name?"hello":"hello there"}</Card.Title>
      <Card.Text>
     
      </Card.Text>
      <h2></h2>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Card3