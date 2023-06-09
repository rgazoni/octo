import React from 'react';
import { Col, Tab, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

// Images
import home from './assets/home.svg';
import disciplinas from './assets/disciplinas.svg';
import faq from './assets/faq.svg';

export default function NavOptions() {
  return (
    <>
    <Tab.Container defaultActiveKey={'first'}>
        <Nav variant="pills" className="flex-column">
            <Nav.Item className='mt-2'>
                <Nav.Link eventKey="first" className='d-flex justify-content-start align-items-center'>
                    <img src={home} alt='Home' width={'15em'} className='me-2'></img>
                    <span className="ml-2 text-white">Home</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='mt-2'>
                <Nav.Link eventKey="second" className='d-flex justify-content-start align-items-center'>
                    <img src={disciplinas} alt='Disciplinas' width={'15em'} className='me-2'></img>
                    <span className="ml-2 text-white">Disciplinas</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='mt-2'>
                <Nav.Link eventKey="third" className='d-flex justify-content-start align-items-center'>
                    <img src={faq} alt='Home' width={'15em'} className='me-2'></img>
                    <span className="ml-2 text-white">FAQ</span>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <Tab.Content>
            <Tab.Pane eventKey="first">
                This is for the first nav tab
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                This is for the second nav tab
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                I guess this is for the third nav tab
            </Tab.Pane>
        </Tab.Content>
    </Tab.Container>
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