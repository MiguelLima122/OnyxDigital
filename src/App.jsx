import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Ideas } from "./components/Ideas";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";

const AppContent = () => {
  
  const [isSplashing, setIsSplashing] = useState(true);
  
  const [isSplashMounted, setIsSplashMounted] = useState(true);

  const location = useLocation();

  useEffect(() => {
    
    const animationTimer = setTimeout(() => {
      setIsSplashing(false);
    }, 1000);

    
    const unmountTimer = setTimeout(() => {
      setIsSplashMounted(false);
    }, 1500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <>
      
      <div className={`app ${isSplashing ? 'is-loading' : ''}`}>
        
        {isSplashMounted && <SplashScreen />}
        <Navbar isSplashing={isSplashing} />
        <main>
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ideias" element={<Ideas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
  
        {location.pathname !== "/contact" && <FloatingCTA />}
        <Footer />
      </div>
    </>
  );
};

export default function App() {
  return (
    <AppContent />
  );
}
