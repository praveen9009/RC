import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/White LOGO.png';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


function Footer() {
    return (
        <section className='footer-section '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="footer-logo">
                            <Link to="/"><img src={Logo} alt="logo" className="img-fluid" /></ Link>
                        </div>
                        <div className="footer-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas orci gravida pretium, sem pharetra, pretium. Blandit sed aenean habitant senectus tempor.</p>
                        </div>
                        <div className='footer-social-link'>
                            <ul className='footer-social-links'>
                                <li className='footer-social-links-item'>
                                    <Link to="new" className='footer-social-links-item-btn'>
                                        <FontAwesomeIcon icon={fab.faFacebook} />
                                    </ Link>
                                </li>
                                <li className='footer-social-links-item'>
                                    <Link to="new" className='footer-social-links-item-btn'>
                                        <FontAwesomeIcon icon={fab.faTwitter} />
                                    </ Link>
                                </li>
                                <li className='footer-social-links-item'>
                                    <Link to="new" className='footer-social-links-item-btn'>
                                        <FontAwesomeIcon icon={fab.faInstagram} />
                                    </ Link>
                                </li>
                                <li className='footer-social-links-item'>
                                    <Link to="new" className='footer-social-links-item-btn'>
                                        <FontAwesomeIcon icon={fab.faPinterest} />
                                    </ Link>
                                </li>
                                <li className='footer-social-links-item'>
                                    <Link to="new" className='footer-social-links-item-btn'>
                                        <FontAwesomeIcon icon={fab.faLinkedin} />
                                    </ Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="footer-title">
                            <h3>Services</h3>
                        </div>
                        <div className="footer-links">
                            <ul className='footer-links-list'>
                                <li className='footer-links-list-item'><Link to="/Category" className='footer-links-list-item-btn'>Category</ Link></li>
                                <li className='footer-links-list-item'><Link to="/about" className='footer-links-list-item-btn'>Contact Us</ Link></li>
                                <li className='footer-links-list-item'><Link to="/HouseCleaning" className='footer-links-list-item-btn'>Track Your Order</ Link></li>
                                <li className='footer-links-list-item'><Link to="/OurProduct" className='footer-links-list-item-btn'>Product</ Link></li>
                                <li className='footer-links-list-item'><Link to="/Contact" className='footer-links-list-item-btn'>Shipping & Returns</ Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="footer-title">
                            <h3>About</h3>
                        </div>
                        <div className="footer-links">
                            <ul className='footer-links-list'>
                                <li className='footer-links-list-item'><Link to="/about" className='footer-links-list-item-btn'>About Us</ Link></li>
                                <li className='footer-links-list-item'><Link to="/HouseCleaning" className='footer-links-list-item-btn'>Site Map</ Link></li>
                                <li className='footer-links-list-item'><Link to="/OurProduct" className='footer-links-list-item-btn'>FAQ</ Link></li>
                                <li className='footer-links-list-item'><Link to="/Contact" className='footer-links-list-item-btn'>Privacy Policy</ Link></li>
                                <li className='footer-links-list-item'><Link to="/Contacts" className='footer-links-list-item-btn'>Terms & Conditions</ Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="footer-title">
                            <h3>Contact</h3>
                        </div>
                        <div className="footer-contact">
                            <ul className='footer-links-list'>
                                <li className='footer-links-list-item'><Link to="tel:16196506924" className='footer-links-list-item-btn'>1-619-650-6924</ Link></li>
                                <li className='footer-links-list-item'><Link to="mailto:greenfrog@mail.com" className='footer-links-list-item-btn'>greenfrog@mail.com</ Link></li>
                                <li className='footer-links-list-item'><Link to="#" className='footer-links-list-item-btn'>4517 Washington Ave. Manchester, Kentucky</ Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className='custom-line' />
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="footer-copy-right text-center">
                            <p>© 2024 Rajclassy All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
