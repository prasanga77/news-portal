import React from 'react';
import './Newsletter.css';
import background from '../Images/Background.png'; 

const Newsletter = () => {
    return (
        <div className="newsletter-container" style={{ backgroundImage: `url(${background})` }}>
            <div className="newsletter-content">
                <div className="newsletter-title">
                    Sign Up for Our<br/>Newsletters
                </div>
                <div className="newsletter-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </div>
                <div className="newsletter-subscribe">
                    <div className="newsletter-input">
                        Input your email address here
                    </div>
                    <button className="subscribenews-button">
                        Subscribe 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
