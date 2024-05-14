import React from 'react';
import '../Instasec/Instasec.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Insta1 from '../../assets/images/i1.jpg';
import Insta2 from '../../assets/images/i2.jpg';
import Insta3 from '../../assets/images/i3.jpg';
import Insta4 from '../../assets/images/i4.jpg';


function Insta() {
    return (
        <>
            <div className="instasec">
                <Container>
                    <div className='instasec-heading'>
                        <h2 className='Heading'>
                            Follow Our Products On <span className='Heading-bold'>Instagram</span>
                        </h2>
                    </div>
                    <div className='instasec-gap'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta1} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta2} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta3} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta4} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta1} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta2} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta3} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 insta-col'>
                                <Link href='https://www.instagram.com/RajClassy/' target='_blank' rel='noopener noreferrer'>
                                    <img src={Insta4} className='img-fluid' alt='insta post' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Insta;
