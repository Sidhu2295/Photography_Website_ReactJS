import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Cards() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal")

        for (var i=0; i< reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    /*---Javascript code for the scroll up button!---*/
    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <button onclick="topFunction()" id='myBtn' title='Go to top'>
                <FontAwesomeIcon icon={solid("arrow-up")} className='button-arrow'/>
                <script>
                    document.getElementById('myBtn').addEventListener("click", topFunction);
                </script>
            </button>
            <div class='quote'>
                <video autoPlay loop muted >
                    <source src='/videos/video-1.mp4'/>
                </video>
            </div>
            <div class='title'>
                <div class='title-text reveal'>
                    <p>"Only photography has been able to divide human life into a series of moments, each of them has the value of a complete existence."</p>
                    <p>- Eadweard Muybridge</p>
                </div>
            </div>
            <div class='gallery'>
                <div class='gallery-title'>
                    <h2>Galleries</h2>
                </div>
                <div class='gallery-photos'>
                    <Link to='/gallery/black-white'>
                        <div class='b-w-photo reveal'>
                            <figure>
                                <img src='/images/img-1.jpg'/>
                            </figure>
                            <div class='b-w-text'>
                                Black-and-White Photography
                            </div>
                        </div>
                    </Link>
                    <Link to='/gallery/coloured'>
                        <div class='colored-photo reveal'>
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
        </div>
    );
}

export default Cards;