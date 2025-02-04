import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Search.css'

export default function Search() {
  return (
    <Navbar className="navbar">
      <Form inline>
        <Row className='formulario'>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="Box-Pesquisa"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='submit'><p>Pesquisar</p></Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

