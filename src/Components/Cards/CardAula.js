import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';

export default function CardAula() {
  return (
    <>
    <div className="d-flex justify-content-around">
     <Card className="w-50 p-3 shadow p-3 mb-5 bg-body-tertiary">
        <Card.Header className="d-flex justify-content-between">
        <span class="align-middle"><h2>Nome da aula</h2></span>
        <Button variant="dark">Adicionar Arquivo</Button>
        </Card.Header>
        
        <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item as="li">Assunto 1</ListGroup.Item>
                  <ListGroup.Item as="li">Assunto 2</ListGroup.Item>
                  <ListGroup.Item as="li">Assunto 3</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        
        </Card.Body>
    </Card>
    </div>
   </> 
  )
}
