import * as React from 'react';
import { Link } from 'react-router-dom';




const About = () => {
    return (
        <div>
           

            <h1>This is About US page.</h1>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/landing">Home</Link>
            
        </div>
    );
};

export default About;