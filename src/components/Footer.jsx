import React from "react";
import { Hexagon } from "lucide-react";

export const Footer = () => {
  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: "1.5rem" }}>
            <Hexagon size={24} className="text-highlight" />
            ONIX
          </div>
          <p style={{ color: "#666", fontSize: "0.9rem", maxWidth: "300px" }}>
            Transformando códigos em legados. Solidez e inteligência para o
            futuro digital.
          </p>
        </div>

        <nav className="footer-nav">
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#impact" onClick={(e) => handleScrollTo(e, "#impact")}>Carreira</a>
            </li>
            <li>
              <a href="#">Manifesto</a>
            </li>
          </ul>
        </nav>

        <nav className="footer-nav">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacidade</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="container"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "1.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#444", fontSize: "0.8rem" }}>
          &copy; 2024 OnixDigital. Miguel Lima & Rafael Lima
        </p>
      </div>
    </footer>
  );
};