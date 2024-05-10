import React from "react";
import '../SpacialProduct/SpacialProduct.css';
import { Container } from "react-bootstrap";
import Product from '../../assets/images/P4.jpg';
import Brand from '../../assets/images/Zara.png';
import { Link } from "react-router-dom";


function SP() {
    return (
        <>
            <div className="Special-Product">
                <div className="SP-bg">
                    <Container>
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="SP-image">
                                    <img src={Product} alt="Special-product" className="img-fluid SP-img" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="SP-content">
                                    <div className="procuct-brand-png" >
                                        <img src={Brand} alt="Special-product-brand" className="img-fluid sp-brand-img" />
                                    </div>
                                    <div className="SP-title">
                                        <h3>Lustrous yet understated. The new evening
                                            wear collection exclusively offered at the
                                            reopened Giorgio Armani boutique in Los
                                            Angeles.</h3>
                                    </div>
                                    <div className="sproduct-view">
                                        <Link to={'/SProduct'} className="SP-View-link">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default SP;