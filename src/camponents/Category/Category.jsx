
import React from "react";
import '../Category/Category.css';
import CategoryCard from '../CategoryCard/CategoryCard.jsx';
import Cate1 from '../../assets/images/Cate1.png';
import Cate2 from '../../assets/images/Cate2.png';
import Cate3 from '../../assets/images/Cate3.png';
import Cate4 from '../../assets/images/Cate4.png';


function Category() {
    return (
        <>
            <div className="container-fluid">
                <div className="Categories">
                    <div className="row">
                        <div className="col-md-3">
                            <CategoryCard Cateimage={Cate1} Category={'Womens Fashion'} Categoryalt={'Category image alt'} CategoryLink={'/Womens-Category'} />
                        </div>
                        <div className="col-md-3">
                            <CategoryCard Cateimage={Cate2} Category={'Mens Fashion'} Categoryalt={'Category image alt'} CategoryLink={'/Mens-Category'} />
                        </div>
                        <div className="col-md-3">
                            <CategoryCard Cateimage={Cate3} Category={'Kids Fashion'} Categoryalt={'Category image alt'} CategoryLink={'/Kids-Category'} />
                        </div>
                        <div className="col-md-3">
                            <CategoryCard Cateimage={Cate4} Category={'Home Docor'} Categoryalt={'Category image alt'} CategoryLink={'/Home-Decor-Category'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;