import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Componente FloatingCTA: Um botão de "Call to Action" que flutua no canto da tela.
 * Ele aparece após o usuário rolar uma certa quantidade da página.
 */
export const FloatingCTA = () => {
  // Estado para controlar a visibilidade do botão.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Função que verifica a posição do scroll.
    const toggleVisibility = () => {
      // Mostra o botão se o scroll for maior que 300px.
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Adiciona e remove o listener de scroll.
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link
      // A classe 'visible' controla a animação de entrada do botão.
      to="/contact"
      className={`floating-cta ${visible ? "visible" : ""}`}
      aria-label="Iniciar um novo projeto"
    >
      Iniciar Projeto
      <ArrowRight size={20} />
    </Link>
  );
};