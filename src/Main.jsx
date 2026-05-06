import "./styles/styles.css";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import Footer from "./components/Footer";


import React from 'react'

const Main = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroBanner />
                <br/>
                <br/>
                <Features />
               
               
                
            </main>
            <Footer />
        </>
    );
}

export default Main
