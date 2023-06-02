import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


import 'bootstrap/dist/css/bootstrap.css';



export default function CardAula() {
  return (
    <>
     <Card className="w-50">
        <Card.Header>
            <h2 >Cálcuclo</h2>
            <Button className="position-absolute top-0 end-0 " variant="primary">Adicionar Arquivo</Button>
        </Card.Header>
        
        <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item as="li">Limite</ListGroup.Item>
                  <ListGroup.Item as="li">Derivada</ListGroup.Item>
                  <ListGroup.Item as="li">Integral</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        
        </Card.Body>
    </Card>


    </>
    
    
  )
}
