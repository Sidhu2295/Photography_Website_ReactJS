import React from 'react';
import Navbar from '../navbar.js';
import Footer from '../Footer.js';
import './gallery-bw.css';

function CGallery(){
    return(
        <div class='gallery'>
            <Navbar />
            <div class='gallery-b-w-intro'>
                <figure>
                    <img src='/gallery/c-landscape.jpg' alt='gallery-intro'/>
                </figure>
                <h3>
                    "Photography, as we all know, is not real at all. It is an illusion of reality with which we create out own private world."
                </h3>
            </div>
            <div class='gallery-container reveal'>
                <div class='column'>
                    <figure>
                        <img src='/gallery/img-15.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-21.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-17.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-18.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-19.jpg' alt='gallery-photo'/>
                    </figure>
                </div>
                <div class='column'>
                    <figure>
                        <img src='/gallery/img-28.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-16.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-22.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-23.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-26.jpg' alt='gallery-photo'/>
                    </figure>
                </div>
                <div class='column'>
                    <figure>
                        <img src='/gallery/img-20.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-30.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-27.jpg' alt='gallery-photo'/>
                    </figure>
                    <figure>
                        <img src='/gallery/img-25.jpg' alt='gallery-photo'/>
                    </figure>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CGallery;