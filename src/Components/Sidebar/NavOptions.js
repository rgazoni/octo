import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function NavOptions() {
  return (
    <>
    <Container>
        <Col>
            <Row className='bg-light'>Home</Row>
            <Row className='bg-light'>Disciplinas</Row>
            <Row className='bg-light'>FAQ</Row>
        </Col>
    </Container>
    </>
  );
}


{/* <div className="sidebar-sticky"></div>
<Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
        Disabled
    </Nav.Link>
</Nav.Item> */}