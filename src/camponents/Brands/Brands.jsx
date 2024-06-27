import React from 'react';
import '../Brands/Brands.css';
import { Container } from 'react-bootstrap';
import Brand1 from '../../assets/images/B1.png';
import Brand2 from '../../assets/images/B2.png';
import Brand3 from '../../assets/images/B3.png';
import Brand4 from '../../assets/images/B4.png';
import Brand5 from '../../assets/images/B5.png';
import Brand6 from '../../assets/images/B6.png';


function Brand() {
    return (
        <>
            <div className="Brand">
                <Container>
                    <div className="row">
                        <div className='col-md-2'>
                            <img src={Brand1} alt='Gucci-logo-png-400px-x-400px' className='img-fluid brand-img' />
                        </div>
                        <div className='col-md-2'>
                            <img src={Brand2} alt='Gucci-logo-png-400px-x-400px' className='img-fluid brand-img' />
                        </div>
                        <div className='col-md-2'>
                            <img src={Brand3} alt='Gucci-logo-png-400px-x-400px' className='img-fluid brand-img' />
                        </div>
                        <div className='col-md-2'>
                            <img src={Brand4} alt='Gucci-logo-png-400px-x-400px' className='img-fluid brand-img' />
                        </div>
                        <div className='col-md-2'>
                            <img src={Brand5} alt='Gucci-logo-png-400px-x-400px' className='img-fluid brand-img' />
                        </div>
                        <div className='col-md-2'>
                            <img src={Brand6} alt='Gucci-logo-png-400px-x-400px' className='img-fluid brand-img' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Brand;
