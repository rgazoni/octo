import React from 'react';
import { Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

// Images
import home from './assets/home.svg';
import disciplinas from './assets/disciplinas.svg';
import faq from './assets/faq.svg';
import { renderTabContent } from '../../App';

export default function NavOptions(props) {


    return (
        <>
            <Tab.Container defaultActiveKey={'disciplinas'}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item className='mt-2'>
                        <Nav.Link eventKey="home" className='d-flex justify-content-start align-items-center'>
                            <img src={home} alt='Home' width={'15em'} className='me-2'></img>
                            <span className="ml-2 text-white">Home</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mt-2'>
                        <Nav.Link eventKey='disciplinas' onClick={props.tab('home')} className='d-flex justify-content-start align-items-center'>
                            <img src={disciplinas} alt='Disciplinas' width={'15em'} className='me-2'></img>
                            <span className="ml-2 text-white">Disciplinas</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mt-2'>
                        <Nav.Link eventKey="faq" className='d-flex justify-content-start align-items-center'>
                            <img src={faq} alt='Home' width={'15em'} className='me-2'></img>
                            <span className="ml-2 text-white">FAQ</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="home">
                    </Tab.Pane>
                    <Tab.Pane eventKey="disciplinas">
                        {props.tab('disciplinas')}
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </>
    );
}
