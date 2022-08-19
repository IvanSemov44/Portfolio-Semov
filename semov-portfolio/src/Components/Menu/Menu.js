import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import "./Menu.css"

const Menu = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <div className="nav-head">
                <Navbar.Brand href="#Semov"><span className="nav-brand">Semov</span></Navbar.Brand>
                <Nav className="me-auto">
                    <div className="nav-btn">
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
                    </div>
                </Nav>
            </div>
        </Navbar>

    );
}

export default Menu;