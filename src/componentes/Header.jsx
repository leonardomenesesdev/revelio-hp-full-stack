import { Navbar, Nav, Container} from "react-bootstrap"
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header(){
    return(
        <Navbar expand="lg" className="navbar" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">HPedia</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/personagens"}>Personagens</Nav.Link>
                        <Nav.Link as={Link} to={"/feiticos"}>Feitiços</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}