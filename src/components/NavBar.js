import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import {FaGithub} from 'react-icons/fa'; 
import {HiOutlineMail} from 'react-icons/hi';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        {/* <a href="/"><FaLinkedin size={35} style={{ color: 'rgba(143, 0, 255, 1)' }} /></a> */}
                        <a href="https://github.com/alexmarinescuthomas" target="_blank" rel="noreferrer"><FaGithub size={35} style={{ color: 'rgba(143, 0, 255, 1)' }}/></a>
                        <a href="mailto:alex161804@gmail.com"><HiOutlineMail size={35} style={{ color: 'rgba(143, 0, 255, 1)' }}/></a>
                    </div>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar