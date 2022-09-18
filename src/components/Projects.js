import React from 'react';
import { Container, Col, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import memefinder from '../assets/img/MemeFinder1.JPG';
import chatbot from '../assets/img/Chatbot.JPG';
import jovianmoons from '../assets/img/jovianmoons.JPG';

const Projects = () => {

    const projects = [
        {
            title: "GIF Meme Search Engine",
            description: "From plain words to smiley faces to memes -- online communication continues to change and this ReactJS search engine helps users find GIF memes and copy their links with one click.",
            imgUrl: memefinder,
            siteUrl: "https://gif-meme-search.vercel.app/",
            codeUrl: "https://github.com/alexmarinescuthomas/gif-meme-search-engine"
        },
        {
            title: "Journey to the Jovian Moons",
            description: "ThreeJS application modeling some of Jupiter's moons. As the user scrolls the camera follows a path around the gas giant revealing its moons.",
            imgUrl: jovianmoons,
            siteUrl: "https://threejs-jupiters-moons.vercel.app/",
            codeUrl: "https://github.com/alexmarinescuthomas/threejs-jupiters-moons"
        },
        {
            title: "Mini-Chatbot",
            description: "Uses the Naive Bayes categorical classification algorithm in ReactJS to statistically pick the best response to a user's question about my experience, coding knowledge, etc.",
            imgUrl: chatbot,
            siteUrl: "",
            codeUrl: "https://github.com/alexmarinescuthomas/portfolio-with-chatbot"
        }
    ];

    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Projects</h2>
                            <p>My projects vary from personal ones to professional, industrial projects.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard  
                                                    key = {index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Container>    
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}

export default Projects;
