import React, { useRef } from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/homepage';
import NewsSettler from './components/Newsletter';

function App() {
    const newsletterRef = useRef(null);

    const handleSubscribe = () => {
        newsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Navbar onSubscribe={handleSubscribe} />
            <Home />
            <div ref={newsletterRef}>
                <NewsSettler />
            </div>
            <Footer />
        </div>
    );
}

export default App;