import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link
      to="/contact"
      className={`floating-cta ${visible ? "visible" : ""}`}
      aria-label="Iniciar um novo projeto"
    >
      Iniciar Projeto
      <ArrowRight size={20} />
    </Link>
  );
};