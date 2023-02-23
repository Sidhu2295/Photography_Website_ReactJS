import React from 'react';
import Navbar from '../navbar.js';
import Footer from '../Footer.js';
import './gallery-bw.css';

function BWGallery(){
    return(
        <div class='gallery'>
            <Navbar />
            <div class='gallery-b-w-intro'>
                <figure>
                    <img src='/gallery/b-w-landscape.jpg' alt='gallery-intro'/>
                </figure>
                <h3>
                    “I work in color sometimes, but I guess the images I most connect to, historically speaking, are in black and white. I see more in black and white – I like the abstraction of it.”
                </h3>
            </div>
            <div class='gallery-container reveal'>
                <div class='column'>
                <figure>
                    <img src='/gallery/img-1.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-2.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-3.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-4.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-5.jpg' alt='gallery-photo'/>
                </figure>
                </div>
                <div class='column'>
                <figure>
                    <img src='/gallery/img-6.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-7.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-8.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-9.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-10.jpg' alt='gallery-photo'/>
                </figure>
                </div>
                <div class='column'>
                <figure>
                    <img src='/gallery/img-11.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-12.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-13.jpg' alt='gallery-photo'/>
                </figure>
                <figure>
                    <img src='/gallery/img-14.jpg' alt='gallery-photo'/>
                </figure>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BWGallery;