import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hexagon, Menu, X } from "lucide-react";

/**
 * Componente Navbar: A barra de navegação superior.
 * É fixa, muda de cor ao rolar a página e possui um menu responsivo para dispositivos móveis.
 * @param {object} props - Propriedades do componente.
 * @param {boolean} props.isSplashing - Indica se a tela de splash ainda está ativa para controlar a animação de entrada.
 */
export const Navbar = ({ isSplashing }) => {
  // Estado para controlar a abertura do menu mobile.
  const [isOpen, setIsOpen] = useState(false);
  // Estado para detectar se a página foi rolada.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Função para verificar a posição do scroll e atualizar o estado 'scrolled'.
    const handleScroll = () => setScrolled(window.scrollY > 20);
    // Adiciona o listener de evento de scroll.
    window.addEventListener("scroll", handleScroll);
    // Limpa o listener quando o componente é desmontado para evitar vazamento de memória.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar suavemente para uma seção da página.
  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // Fecha o menu mobile após o clique
    setIsOpen(false);
  };

  // A classe 'animate-slide-down' é aplicada quando o splash screen termina.
  return (
    <header
      className={`navbar ${isSplashing ? "" : "animate-slide-down"}`}
      style={{
        padding: '0.5rem 0', // Reduz o preenchimento vertical para tornar a barra mais fina
        background: scrolled ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(16px)", // Aumenta a intensidade do desfoque
        WebkitBackdropFilter: "blur(16px)", // Suporte para Safari
        transition: "background 0.3s ease-in-out", // Adiciona transição suave
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

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link" onClick={(e) => handleScrollTo(e, "#home")}>
            Home
          </a>
          <a href="#concept" className="nav-link" onClick={(e) => handleScrollTo(e, "#concept")}>
            Conceito
          </a>
          <a href="#services" className="nav-link" onClick={(e) => handleScrollTo(e, "#services")}>
            Serviços
          </a>
          <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          
          <Link to="/contact" className="cta-button"> Miguel E Rafael </Link>
        </nav>
      </div>
    </header>
  );
};