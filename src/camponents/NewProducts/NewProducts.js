import React from 'react';
import '../NewProducts/NewProducts.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProductCard from '../NewProducts/ProductCard';
import Product1 from '../../assets/images/P1.jpg';
import Product2 from '../../assets/images/P2.jpg';
import Product3 from '../../assets/images/P3.jpg';
import Product4 from '../../assets/images/P4.jpg';
import Product5 from '../../assets/images/P5.jpg';


function NewProduct() {
    return (
        <>
            <div className="New-Products">
                <div className="container">
                    <div className='d-flex justify-content-between align-items-center nphead'>
                        <div className="New-Products-Title">
                            <h2 className='Heading'>
                                New <span className='Heading-bold'>Products</span>
                            </h2>
                        </div>
                        <div className="New-Products-Button">
                            <Link to={'/New-Products'} className="target-link View-btn">
                                View All
                            </Link>
                        </div> 
                    </div>
                    <div className='row'>
                        <div className='col-md-6 space-adjust'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <ProductCard imagealt={'#img'} productimage={Product5} productlink={'/Product1'} />
                                </div>
                                <div className='col-md-6'>
                                    <ProductCard imagealt={'#img'} productimage={Product2} productlink={'/Product2'} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <ProductCard imagealt={'#img'} productimage={Product3} productlink={'/Product3'} />
                                </div>
                                <div className='col-md-6'>
                                    <ProductCard imagealt={'#img'} productimage={Product4} productlink={'/Product4'} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <ProductCard imagealt={'#img'} productimage={Product1} productlink={'/Product5'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewProduct;
