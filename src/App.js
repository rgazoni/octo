import Sidebar from "./Components/Sidebar/Sidebar";
import { Col, Container, Row } from 'react-bootstrap'


function App() {
  return (
    <>
    <Container fluid>
        <Row>
            <Col xs={2} id="sidebar-wrapper" className="bg-dark">
              <Sidebar />
            </Col>
            <Col  xs={10} id="page-content-wrapper"></Col>
        </Row>
    </Container>
    </>
  );
}

export default App;
