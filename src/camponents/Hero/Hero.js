import React from 'react';
import '../Hero/Hero.css';
import { Container } from 'react-bootstrap';
import Herop from '../../assets/images/01.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Hero() {
    return (
        <>
            <section className="Hero-section">
                <div className="Hero-bg">
                    <Container>
                        <div className='hero-pedding'>
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <div className="Hero-content">
                                        <h1>New Collection Arrived For Woman's Fashion</h1>
                                        <p>you can explore ans shop many differnt collection
                                            from various barands here.</p>
                                        <Link to={'/Product'} className="hero-btn">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="Hero-img">
                                        <img src={Herop} className='img-fluid' alt='Hero-product' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Hero;
