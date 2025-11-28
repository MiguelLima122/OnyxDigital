import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Hexagon, Zap } from "lucide-react";

/**
 * Componente Concept: Seção que explica o conceito e os pilares da empresa.
 * Usa 'framer-motion' para um efeito de parallax na imagem e 'react-intersection-observer'
 * para disparar animações quando a seção entra na tela.
 */
export const Concept = () => {
  // Ref para a seção, usada para o parallax.
  const sectionRef = useRef(null);
  // Hook para detectar quando a seção está visível.
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Hook do Framer Motion para rastrear o progresso do scroll dentro da seção.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transforma o progresso do scroll em movimento vertical (parallax) para a imagem e a moldura.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const neonFrameY = useTransform(scrollYProgress, [0, 1], ["-15%", "25%"]);

  // Função para combinar a ref do parallax com a ref do 'inView'.
  const setRefs = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  return (
    <section id="concept" className="concept" ref={setRefs}>
      <div className="container concept-container">
        <figure
          // Aplica a classe de animação quando a seção está visível.
          className={`concept-image-wrapper ${
            inView ? "animate-slide-in-left" : "is-hidden"
          }`}
        >
          <motion.div className="neon-frame" style={{ y: neonFrameY }} />
          <motion.div className="concept-image svg-concept-wrapper" style={{ y: imageY }}>
            <svg viewBox="0 0 400 225" className="programming-svg">
              <rect width="400" height="225" rx="8" className="svg-bg" />
              <rect x="10" y="10" width="380" height="25" rx="4" className="svg-header" />
              <circle cx="22" cy="22.5" r="4" className="svg-btn-red" />
              <circle cx="38" cy="22.5" r="4" className="svg-btn-yellow" />
              <circle cx="54" cy="22.5" r="4" className="svg-btn-green" />

              <text x="20" y="60" className="svg-text svg-prompt">{"> ONIX.forjarSolucao()"}</text>
              <text x="20" y="85" className="svg-text svg-line1">Inicializando valores essenciais...</text>
              <text x="20" y="105" className="svg-text svg-line2"><tspan className="svg-success">[OK]</tspan> Injetando Segurança Robusta.</text>
              <text x="20" y="125" className="svg-text svg-line3"><tspan className="svg-success">[OK]</tspan> Compilando Arquitetura Escalável.</text>
              <text x="20" y="145" className="svg-text svg-line4"><tspan className="svg-success">[OK]</tspan> Implementando Lógica de Alta Performance.</text>
              <text x="20" y="170" className="svg-text svg-line5">Processo concluído. Seu legado digital está pronto. <tspan className="svg-cursor">_</tspan></text>
            </svg>
          </motion.div>
        </figure>

        <div
          className={`concept-text ${
            inView ? "animate-slide-in-right" : "is-hidden"
          }`}
        >
          <h2
            className="hero-title"
            style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
          >
            A Força do <span className="text-highlight">Ônix</span>
          </h2>
          <p style={{ color: "#a3a3a3", lineHeight: 1.6 }}>
            Inspirados na estabilidade da pedra Ônix, fugimos do comum. Nossa
            arquitetura de software é projetada para perdurar, unindo segurança
            robusta a um design visualmente impactante.
          </p>

          <ul className="concept-list" style={{ marginTop: "2rem" }}>
            <li className="concept-item">
              <Shield className="text-highlight" size={24} />
              <span>Segurança "Rock-Solid"</span>
            </li>
            <li className="concept-item">
              <Hexagon className="text-highlight" size={24} />
              <span>Arquitetura Escalável</span>
            </li>
            <li className="concept-item">
              <Zap className="text-highlight" size={24} />
              <span>Performance Extrema</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};