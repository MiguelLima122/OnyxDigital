import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hexagon, Menu, X } from "lucide-react";

export const Navbar = ({ isSplashing }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const isSimpleNav = location.pathname === "/blog" || location.pathname === "/ideias";

  return (
    <header
      className={`navbar ${isSplashing ? "" : "animate-slide-down"}`}
      style={{
        padding: '0.5rem 0',
        background: scrolled ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Hexagon
            size={28}
            className="text-highlight logo-icon"
            strokeWidth={2.5}
          />
          ONIX<span className="text-highlight">DIGITAL</span>
        </Link>

        {!isSimpleNav && (
          <>
            <button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Alternar menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
              <a href="/#concept" className="nav-link" onClick={(e) => handleScrollTo(e, "#concept")}>
                Conceito
              </a>
              <a href="/#services" className="nav-link" onClick={(e) => handleScrollTo(e, "#services")}>
                Serviços
              </a>
              <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/ideias" className="nav-link" onClick={() => setIsOpen(false)}>
                Nossas Ideias
              </Link>
              
              <Link to="/" className="cta-button" onClick={() => setIsOpen(false)}>Miguel e Rafael</Link>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};