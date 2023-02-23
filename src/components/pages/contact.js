import React from 'react';
import Navbar from '../navbar.js';
import Footer from '../Footer.js';
import './contact.css';
import { useState } from 'react';

function Contact(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

    return(
    <div>
        <Navbar />
        <div className='contact-container'>
            <div class='form-container'>
                <h1>Contact.</h1>
                <form onSubmit={handleSubmit}>
                    <label for='fName'>First Name</label>
                    <input
                        type='text'
                        id="fName"
                    />
                    <label for='lName'>Last Name</label>
                    <input
                        type='text'
                        id="lName"
                    />
                    <label for='lName'>Email Address</label>
                    <input
                        type='text'
                        id="email"
                    />
                    <label for='lName'>Message</label>
                    <input
                        type='text'
                        id="msg"
                    />
                    <input type='submit' />
                </form>
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default Contact;