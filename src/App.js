import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginRegisterPage from './components/LoginRegisterPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/homepage';
import Newsboard from './components/dashboard/Dashboard';
import NewsSettler from './components/Newsletter';
import Article from './components/article';

function AppContent() {
    const newsletterRef = useRef(null);
    const location = useLocation(); // Get current location path

    // Function to scroll to the newsletter section
    const handleSubscribe = () => {
        newsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Define the pages where Navbar and Footer should be hidden
    const hideLayout = ['/login', '/newsboard'].includes(location.pathname);

    return (
        <div className="App">
            {/* Conditionally render Navbar and Footer */}
            {!hideLayout && <Navbar onSubscribe={handleSubscribe} />}
            
            {/* Define routes for the application */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<Article />} />
                <Route path="/login" element={<LoginRegisterPage />} />
                <Route path="/newsboard" element={<Newsboard />} />
                {/* Add more routes as necessary */}
            </Routes>

            {/* Conditionally render the newsletter and footer for all pages except login and newsboard */}
            {!hideLayout && (
                <>
                    <div ref={newsletterRef}>
                        <NewsSettler />
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
