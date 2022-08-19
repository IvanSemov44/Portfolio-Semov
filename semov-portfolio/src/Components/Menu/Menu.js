import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <p>Hello</p>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Item>
                    <LinkContainer to="/">
                        <Button variant="outline-success">
                            Home
                        </Button>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/projects">
                        <Button variant="outline-success">
                            Projects
                        </Button>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/certificate">
                        <Button variant="outline-success">
                            Certificate
                        </Button>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/Contact">
                        <Button variant="outline-success">
                            Contacts
                        </Button>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </Navbar>

    );
}

export default Menu;