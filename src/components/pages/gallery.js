import React from 'react';
import Navbar from '../navbar.js';
import Footer from '../Footer.js';
import {Link} from 'react-router-dom';

function Gallery(){
    return(
    <div>
        <Navbar />
       <div class='gallery'>
                <div class='gallery-title'>
                    <h2>Galleries</h2>
                </div>
                <div class='gallery-photos'>
                    <Link to='/gallery/black-white'>
                        <div class='b-w-photo'>
                            <figure>
                                <img src='/images/img-1.jpg'/>
                            </figure>
                            <div class='b-w-text'>
                                Black-and-White Photography
                            </div>
                        </div>
                    </Link>
                    <Link to='/gallery/coloured'>
                        <div class='colored-photo'>
                            <figure>
                                <img src='/images/img-15.jpg'/>
                            </figure>
                            <div class='colored-text'>
                                Colored Photography
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        <Footer />
    </div>
    );
}

export default Gallery;