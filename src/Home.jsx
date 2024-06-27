import React from 'react';
import './assets/css/style.css';
import Header from './camponents/Header/Header.jsx';
import Hero from './camponents/Hero/Hero.jsx';
import Brands from './camponents/Brands/Brands.jsx';
import Category from './camponents/Category/Category.jsx';
import NewProducts from './camponents/NewProducts/NewProducts.jsx';
import SpacialProduct from './camponents/SpacialProduct/SpacialProduct.jsx';
import BestProduct from './camponents/BestProducts/BestProducts.jsx';
import InstaSec from './camponents/Instasec/Instasec.jsx'
import Footer from './camponents/Footer/Footer.jsx';


function Home() {
    return (
        <>
            <div className="Home">
                <Header />
                <Hero />
                <Category />
                <NewProducts />
                <SpacialProduct />
                <BestProduct />
                <InstaSec />
                <Brands />
                <Footer />
            </div>
        </>
    );
}

export default Home;
