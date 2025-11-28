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

/**
 * Componente App: O componente raiz da aplicação.
 * Gerencia o estado do splash screen e define as rotas da aplicação usando React Router.
 */
const AppContent = () => {
  // Estado para controlar a animação de saída do splash screen.
  const [isSplashing, setIsSplashing] = useState(true);
  // Estado para controlar se o splash screen ainda está montado no DOM.
  const [isSplashMounted, setIsSplashMounted] = useState(true);
  // Hook para obter a localização atual e decidir se o CTA flutuante deve ser renderizado.
  const location = useLocation();

  useEffect(() => {
    // Timer para iniciar a animação de saída do splash.
    const animationTimer = setTimeout(() => {
      setIsSplashing(false);
    }, 1000);

    // Timer para remover o splash screen do DOM após a animação terminar.
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
      {/* A classe 'is-loading' controla as animações de entrada/saída. */}
      <div className={`app ${isSplashing ? 'is-loading' : ''}`}>
        {/* Renderiza o splash screen apenas enquanto ele estiver montado. */}
        {isSplashMounted && <SplashScreen />}
        <Navbar isSplashing={isSplashing} />
        <main>
          {/* Define as rotas da aplicação. */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ideias" element={<Ideas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        {/* O botão flutuante só é renderizado fora da página de contato. */}
        {location.pathname !== "/contact" && <FloatingCTA />}
        <Footer />
      </div>
    </>
  );
};

/**
 * Componente App: O componente raiz da aplicação.
 * Gerencia o estado do splash screen e define as rotas da aplicação usando React Router.
 */
export default function App() {
  return (
    <AppContent />
  );
}
