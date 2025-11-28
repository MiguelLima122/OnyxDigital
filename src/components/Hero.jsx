import React, { useState, useEffect } from "react";
import { Zap } from "lucide-react";

/**
 * Componente Hero: A primeira seção visível da página inicial.
 * Apresenta o título principal e uma descrição com efeito de digitação.
 */
export const Hero = () => {
  // Estado para controlar a visibilidade do indicador de scroll.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Função para verificar se a página foi rolada.
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Estado para armazenar o texto que está sendo "digitado".
  const [typedText, setTypedText] = useState("");
  // O texto completo que será exibido.
  // Estado para a posição do mouse, para o efeito de brilho.
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const fullText =
    "Código seguro, estética sofisticada. Transformamos sua visão em software à prova de falhas com elegância atemporal.";

  useEffect(() => {
    // Define um atraso para o início da digitação, sincronizando com outras animações.
    const startTypingDelay = 600;

    // Inicia o processo de digitação após o atraso.
    const typingTimeout = setTimeout(() => {
      let i = 0;
      // Define um intervalo para adicionar um caractere de cada vez.
      const intervalId = setInterval(() => {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        // Para o intervalo quando o texto estiver completo.
        if (i > fullText.length) {
          clearInterval(intervalId);
        }
      }, 35); // Velocidade da digitação (em ms)

      // Função de limpeza para o intervalo.
      return () => clearInterval(intervalId);
    }, startTypingDelay);

    return () => clearTimeout(typingTimeout);
  }, []);

  // Função para rolar suavemente para uma seção da página.
  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Manipulador para o movimento do mouse, atualiza a posição para o efeito de brilho.
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      {/* Elemento que cria o brilho que segue o cursor */}
      <div
        className="hero-glow"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      {/* Container para as formas geométricas animadas no fundo */}
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
            style={{ minHeight: "90px" }} // Garante espaço para o texto
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
          onClick={(e) => e.preventDefault()} // O clique é gerenciado pelo container
        />
        <span className="scroll-down-text">Role para baixo</span>
      </div>
    </section>
  );
};