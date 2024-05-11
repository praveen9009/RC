
import React from "react";
import '../ProductCard/ProductzCard.css';
import Producti from '../../assets/images/P1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Product() {
    return (
        <>
            <div className="product">
                <Link to={'/Product'} className="target-link prdt-link">
                    <div className="prdt-image">
                        <img src={Producti} alt="product" className="img-fluid" />
                    </div>
                    <div className="prdt-title">
                        <h3>New Classic Rajasthani Gowun with Premium Red Shine</h3>
                    </div>
                    <div className="prdt-price">
                        <h3>Price - </h3>
                        <div className="prdt-crunt-price">
                            <h2 className="crnt-price">899</h2>
                            <h2 className="prvs-price">2999</h2>
                        </div>
                    </div>
                    <div className="prdt-lable">
                        <div className="prdt-lable-new">
                            <h3>
                                New
                            </h3>
                        </div>
                    </div>
                </Link>
                <div className="prdt-action-icon">
                    <div className="wish-action">
                        <button type="button" className="prdt-wish-btn">
                            <FontAwesomeIcon icon={far.faHeart} />
                        </button>
                    </div>
                    <div className="cart-action">
                        <button type="button" className="prdt-cart-btn">
                            <FontAwesomeIcon icon={fab.faOpencart} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;