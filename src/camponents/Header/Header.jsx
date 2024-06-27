import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';
import Rajclassy from '../../assets/images/Rajclassy logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

const Header = () => {
    // This function activates the active class on the current page
    const location = useLocation();
    const { pathname } = location;

    const splitLocation = pathname.split("/");
    // This function activates the active class on the current page
    const
        [scroll, setScroll] = React.useState(false);
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])


    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };





    return (
        <>
                <Navbar collapseOnSelect expand="lg" fixed="top" className={scroll ? "header-dec bg-active" : "header-dec"}>
                    <Container className='header-items'>
                        <Link to={'/'} className='w-25'>
                            <Navbar.Brand>
                                <img className='Brand-logo img-fluid' alt='Rajclassy-logo-png' src={Rajclassy} />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to={'/'} className={splitLocation[1] === "" ? "target-link header-links active" : "target-link header-links"}>
                                    <Nav.Link href='Home' className='New-nav-link'>HOME</Nav.Link>
                                </Link>
                                <Link to={'/Men'} className={splitLocation[1] === "Men" ? "target-link header-links active" : "target-link header-links"}>
                                    <Nav.Link href='Men' className='New-nav-link'>MEN</Nav.Link>
                                </Link>
                                <Link to={'/Women'} className={splitLocation[1] === "Women" ? "target-link header-links active" : "target-link header-links"}>
                                    <Nav.Link href='Women' className='New-nav-link'>WOMEN</Nav.Link>
                                </Link>
                                <Link to={'/About'} className={splitLocation[1] === "About" ? "target-link header-links active" : "target-link header-links"}>
                                    <Nav.Link href='About' className='New-nav-link'>ABOUT</Nav.Link>
                                </Link>
                                <Link to={'/Contact'} className={splitLocation[1] === "Contact" ? "target-link header-links active" : "target-link header-links"}>
                                    <Nav.Link href='Contact' className='New-nav-link'>CONTACT</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav className="align-items-center left-header-width ms-auto">
                            {/* nav-link toggle class on click change active */}
                            <Nav.Link href='#search' className="header-search" >
                                <input type="text" placeholder="Search" className={isActive ? "Search-active search-input" : "search-input"} />
                                <FontAwesomeIcon icon={fas.faMagnifyingGlass} onClick={toggleClass} />
                            </Nav.Link>
                        </Nav>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="align-items-center left-header-width ms-auto">
                                <Link to={'/Wishlist'} className="target-link header-btns">
                                    <Nav.Link href='Wishlist' className='New-nav-link'>
                                        <FontAwesomeIcon icon={fas.faHeart} />
                                        <span className="header-btn-text"> Wishlist </span>
                                    </Nav.Link>
                                </Link>
                                <Link to={'/Cart'} className="target-link header-btns">
                                    <Nav.Link href='Cart' className='New-nav-link'>
                                        <FontAwesomeIcon icon={fas.faCartShopping} />
                                        <span className="header-btn-text"> Cart </span>
                                    </Nav.Link>
                                </Link>
                                <Link to={'/Login'} className="target-link header-btns">
                                    <Nav.Link href='Login' className='New-nav-link'>
                                        <FontAwesomeIcon icon={fas.faUser} />
                                        <span className="header-btn-text"> Login </span>
                                    </Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    );
}

export default Header;