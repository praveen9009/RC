import React from "react";
import '../NewProducts/NewProducts.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function PCard({ imagealt, productimage, productlink }) {
    return (
        <div className="New-Products-Card">
            <Link to={productlink} className="target-link New-product-action">
                <div className="NewPImg">
                    <img src={productimage} alt={imagealt} className="img-fluid" />
                </div>
            </Link>
        </div>
    );
}

export default PCard;