import React from 'react';
import '../BestProducts/BestProducts.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Product from '../ProductCard/ProductzCard';


function BestProduct() {
    return (
        <>
            <div className="Best-Products">
                <div className="container">
                    <div className='d-flex justify-content-between align-items-center nphead'>
                        <div className="Best-Products-Title">
                            <h2 className='Heading'>
                                Best <span className='Heading-bold'>Products</span>
                            </h2>
                        </div>
                        <div className="Best-Products-Button">
                            <Link to={'/Best-Products'} className="target-link View-btn">
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Product />
                        </div>
                        <div className='col-md-3'>
                            <Product />
                        </div>
                        <div className='col-md-3'>
                            <Product />
                        </div>
                        <div className='col-md-3'>
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BestProduct;
