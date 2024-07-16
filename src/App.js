import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/homepage';
import NewsSettler from './components/Newsletter';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <NewsSettler/>
            <Footer />
        </div>
    );
}

export default App;
