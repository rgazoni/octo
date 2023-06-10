import ModalDisciplina from "./Components/Modal/ModalDisciplina";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Col, Container, Row } from 'react-bootstrap'
import CardAula from "./Components/Cards/CardAula";
import { useState } from 'react';

function App() {

  const [activeTab, setActiveTab] = useState('home');

  const renderTabContent = (tab) => {
    console.log(tab)
    switch (tab) {
      case 'home':
        setActiveTab('asdasd');
      case 'disciplinas':
        setActiveTab('disciplinas');
      default:
        setActiveTab('asdasdasda');
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col id="sidebar-wrapper" className="bg-dark col-sm-2">
            <Sidebar tab={renderTabContent}/>
          </Col>
          <Col id="page-content-wrapper" className="bg-white">
            <CardAula />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
