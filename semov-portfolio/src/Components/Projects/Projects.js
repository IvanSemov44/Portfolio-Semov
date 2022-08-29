import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Projects.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

//TODO:add component Card seperet

const Projects = () => {
    return (
        <div className="proj-cards">
            <Card style={{ width: '18rem', height: "350px" }} className="proj-card">
                <Card.Img variant="top" src="images/UltimateClient.png" className="proj-img" />
                <Card.Body>
                    <Card.Title>Ultimate Movie (Client Side)</Card.Title>
                    <Card.Text>
                        Simple Project from React js
                    </Card.Text>
                    <div className="proj-btn">
                        <Button
                            variant="outline-success"
                            href="https://github.com/IvanSemov44/ClientUltimateMovieApp"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span> GitHub</span>
                        </Button>
                        <Button variant="outline-success" disabled>
                            <FontAwesomeIcon icon={faLink} />
                            <span> URL</span>
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: "350px" }} className="proj-card">
                <Card.Img variant="top" src="images/UltimateServer.png" className="proj-img" />
                <Card.Body>
                    <Card.Title>Ultimate Movie (Server Side)</Card.Title>
                    <Card.Text>
                        Simple Project from ASP.NET CORE
                    </Card.Text>
                    <div className="proj-btn">
                        <Button
                            variant="outline-success"
                            href="https://github.com/IvanSemov44/ServerUltimateMovieApp"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span> GitHub</span>
                        </Button>
                        <Button variant="outline-success" disabled>
                            <FontAwesomeIcon icon={faLink} />
                            <span> URL</span>
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: "350px" }} className="proj-card">
                <Card.Img variant="top" src="images/thisProject.png" className="proj-img" />
                <Card.Body>
                    <Card.Title>My Portfolio</Card.Title>
                    <Card.Text>
                        Simple Project from React js
                    </Card.Text>
                    <div className="proj-btn">
                        <Button
                            variant="outline-success"
                            href="https://github.com/IvanSemov44/Portfolio-Semov"
                            target="_blank"
                        > 
                        <FontAwesomeIcon icon={faGithub} />
                            <span> GitHub</span>
                        </Button>
                        <Button variant="outline-success" disabled>
                            <FontAwesomeIcon icon={faLink} />
                            <span> URL</span>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects;