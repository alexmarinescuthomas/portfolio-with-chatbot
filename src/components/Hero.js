import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import iss from '../assets/img/iss.svg';
// import { isVisible } from '@testing-library/user-event/dist/utils';

const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Developer", "Designer", "Dreamer" ];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? 
            (fullText.substring(0, text.length - 1)) : 
            (fullText.substring(0, text.length + 1));
        
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === "D") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} xl={7}>
                                
                                <h1>{`Hi,`}</h1>
                                <h1>{`I'm Alex,`}</h1>
                                <h1>
                                    <span className="wrap">
                                        {text}
                                    </span>
                                </h1>
                                <p>Full-stack software developer with 4+ years of experience focused on building
                                eye-catching, easy-to-use user interfaces enabled by AI or dynamically tailored to
                                suit each user's experience using machine learning.</p>
                                            
                            </Col>
                            <Col xs={12} md={6} xl={5}>
                                <img src={iss} alt="Header Img"></img>
                            </Col>
                        </Row>
                    </div>}
                </TrackVisibility>
            </Container>
        </section>
    )
}

export default Hero;