import React, { forwardRef } from 'react';
import './Newsletter.css';
import background from '../Images/Background.png';

const NewsSettler = forwardRef((props, ref) => {
    return (
        <div className="newsletter-container" style={{ backgroundImage: `url(${background})` }} ref={ref}>
            <div className="newsletter-content">
                <div className="newsletter-title">
                    Sign Up for Our<br />Newsletters
                </div>
                <div className="newsletter-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </div>
                <div className="newsletter-subscribe">
                    <input 
                        type="email" 
                        className="newsletter-input" 
                        placeholder="Enter your email address here"
                    />
                    <button className="subscribenews-button">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
});

export default NewsSettler;
