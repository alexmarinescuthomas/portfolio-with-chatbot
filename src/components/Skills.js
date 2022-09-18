import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import HTML from '../assets/img/html.png';
import ReactImg from '../assets/img/react.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import Mongo from '../assets/img/mongo.png';
import NodeJS from '../assets/img/node.png';
import CSharp from '../assets/img/csharp.png';
import Python from '../assets/img/python.png';
import Redux from '../assets/img/redux.png';
import Linux from '../assets/img/linux.png';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>These are some of the frameworks and technologies that I've worked with.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ReactImg} alt="" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={Redux} alt="" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={CSharp} alt="" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={HTML} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={JavaScript} alt="" />
                                    <h5>Vanilla JS</h5>
                                </div>
                                <div className="item">
                                    <img src={Mongo} alt="" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={NodeJS} alt="" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={Python} alt="" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={Linux} alt="" />
                                    <h5>Linux</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""></img>
        </section>
    )
}

export default Skills