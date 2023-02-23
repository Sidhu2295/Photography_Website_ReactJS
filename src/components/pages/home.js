import React from 'react';
import Navbar from '../navbar.js';
import Cards from '../cards.js';
import Footer from '../Footer.js';
import Carousel from '../carousel.js';

function Home(){
    return(
    <div>
        <Navbar />
        <Cards />
        <Carousel />
        <Footer />
    </div>
    );
}

export default Home;