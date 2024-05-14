import React from 'react';
import './assets/css/style.css';
import Header from './camponents/Header/Header.js';
import Hero from './camponents/Hero/Hero.js';
import Brands from './camponents/Brands/Brands.js';
import Category from './camponents/Category/Category.js';
import NewProducts from './camponents/NewProducts/NewProducts.js';
import SpacialProduct from './camponents/SpacialProduct/SpacialProduct.js';
import BestProduct from './camponents/BestProducts/BestProducts.js';
import InstaSec from './camponents/Instasec/Instasec.js'
import Footer from './camponents/Footer/Footer.js';


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
