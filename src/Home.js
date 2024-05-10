import React from 'react';
import './assets/css/style.css';
import Header from './camponents/Header/Header.js';
import Hero from './camponents/Hero/Hero.js';
import Brands from './camponents/Brands/Brands.js';
import NewProducts from './camponents/NewProducts/NewProducts.js';
import SpacialProduct from './camponents/SpacialProduct/SpacialProduct.js';


function Home() {
    return (
        <>
            <div className="Home">
                <Header />
                <Hero />
                <Brands />
                <NewProducts />
                <SpacialProduct />
            </div>
        </>
    );
}

export default Home;
