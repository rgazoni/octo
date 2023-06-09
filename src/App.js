import Sidebar from "./Components/Sidebar/Sidebar";
import { Col, Container, Row } from 'react-bootstrap'
import CardAula from "./Components/Cards/CardAula";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="sidebar-wrapper" className="bg-dark col-sm-2">
            <Sidebar />
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
