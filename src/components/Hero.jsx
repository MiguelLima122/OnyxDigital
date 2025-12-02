import React, { useState, useEffect } from "react";
import { Zap } from "lucide-react";

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [typedText, setTypedText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const fullText =
    "Código seguro, estética sofisticada. Transformamos sua visão em software à prova de falhas com elegância atemporal.";

  useEffect(() => {
    const startTypingDelay = 600;

    const typingTimeout = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        if (i > fullText.length) {
          clearInterval(intervalId);
        }
      }, 35);

      return () => clearInterval(intervalId);
    }, startTypingDelay);

    return () => clearTimeout(typingTimeout);
  }, []);

  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <div
        className="hero-glow"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      <div className="geometric-shapes">
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
      </div>
      <div className="container hero-content">
        <div>
          <span
            className="hero-badge animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <Zap size={14} />
            Tecnologia de Alta Performance
          </span>
          <h1
            className="hero-title animate-fade-up"
            style={{ animationDelay: '250ms' }}
          >
            SOLIDEZ E <br />
            <span className="text-highlight">INTELIGÊNCIA</span>
          </h1>
          <p
            className="hero-desc"
            style={{ minHeight: "90px" }}
          >
            {typedText}<span className="typing-cursor" />
          </p>
        </div>
      </div>
      <div
        className={`scroll-down-container ${scrolled ? 'hidden' : ''}`}
        onClick={(e) => handleScrollTo(e, "#concept")}
      >
        <a
          href="#concept"
          className="scroll-down-indicator"
          aria-label="Rolar para baixo"
          onClick={(e) => e.preventDefault()}
        />
        <span className="scroll-down-text">Role para baixo</span>
      </div>
    </section>
  );
};