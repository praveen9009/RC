import React from 'react';
import './assets/css/style.css';
import { Link } from 'react-router-dom';
import Header from './camponents/Header/Header.js';

function Home() {
  return (
    <div className="Home">
      
      <Header />
      <Link to={'/contact'}>
        <div>
          Contact
        </div>
      </Link>
      <Link to={'/'}>
                <div>
                    Home
                </div>
            </Link>
    </div>
  );
}

export default Home;
