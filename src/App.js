import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div style={{ marginTop: '50px' }}> {/* Maintain some gap */}
                <Newsletter />
            </div>
            <Footer />
        </div>
    );
}

export default App;
