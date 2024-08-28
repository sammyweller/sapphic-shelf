import React from 'react';
import { Link } from 'react-router-dom';
import './about-us.css'; 

function AboutUs() {
    return (
        <div className="about-us-section">
            <h1>
                heyyyyyy
            </h1>
            <p>
                Hi there! I'm Sammy and I'm the person behind the keyboard.
            </p>
            <p>
                 I'm a web developer and I started this project to get more coding practice, but quickly saw the value in Sapphic Shelf. I spend most of my spare time reading, and I have a deep love for sapphic sci-fi and fantasy books. With this in mind, I always wanted an easy-to-use database that housed sapphic books exclusively! 
            </p>
            <p>
                <strong>This project is still in its early stages.</strong> I enter each book myself, and it will take some time to get it more jam-packed with our favorite sapphic characters and stories. In the meantime, if you have a book you love that isn't on this site, or if you notice something that needs correcting, please <Link to="/contact-form">let me know</Link> and I'll happily get it added!
            </p>
            <p>
                Thanks for your support!
            </p>
            <p>
                - Sammy (she/her)
            </p>
        </div>
    )
}

export default AboutUs