import React, { useState } from 'react';
import './Footer.css';
import logo from '../Images/logocolour.png';
import languageIcon from '../Images/dropdownb.svg'; // Add the path to your icon image

const Footer = () => {
    const [language, setLanguage] = useState('EN');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const openLanguageSelector = () => {
        document.getElementById('language-select').focus();
    };

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-item language-switch" onClick={openLanguageSelector}>
                    <div className="language-icon">
                        <img src={languageIcon} alt="Language Icon" className="icon-image" />
                    </div>
                    <select id="language-select" className="language-select" value={language} onChange={handleLanguageChange}>
                        <option value="EN">EN</option>
                        <option value="NE">NP</option>
                    </select>
                </div>
                <div className="footer-item copyright">
                    Copyright @Aquiden News Pvt. Ltd
                </div>
                <div className="footer-divider"></div>
                <div className="footer-item social-media">
                    <div className="social-media-content">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                    <div className="social-media-title">Social Media</div>
                </div>
                <div className="footer-item company-info">
                    <div className="company-info-content">
                        <a href="/contact">Contact Us</a>
                        <a href="/terms">Terms Of Services</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/careers">Careers</a>
                        <a href="/about">About Us</a>
                    </div>
                    <div className="company-info-title">Company</div>
                </div>
                <div className="footer-item categories">
                    <div className="categories-content">
                        <a href="/national">National</a>
                        <a href="/international">International</a>
                        <a href="/economy">Economy</a>
                        <a href="/politics">Politics</a>
                        <a href="/science">Science</a>
                        <a href="/climate">Climate</a>
                        <a href="/lifestyle">Lifestyle</a>
                        <a href="/sports">Sports</a>
                    </div>
                    <div className="categories-title">Categories</div>
                </div>
                <div className="footer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </div>
            </div>
            <img className="footer-logo" src={logo} alt="Logo" />
        </div>
    );
}

export default Footer;