
import React from "react";
import '../CategoryCard/CategoryCard.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Category({ Category, Cateimage, Categoryalt , CategoryLink }) {
    return (
        <>
            <div className="cate-card">
                <div className="Cate-back">
                    <Link to={CategoryLink}>
                        <div className="cate-image">
                            <img src={Cateimage} alt={Categoryalt} className="cate-img" />
                        </div>
                    </Link>
                </div>
                <div className="cate-name">
                    <h3>{Category}</h3>
                </div>
            </div>
        </>
    );
}

export default Category;