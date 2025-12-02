import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, BrainCircuit, Rocket, Code, Share2, TrendingUp } from "lucide-react";

export const Ideas = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      id="ideas"
      className="ideas contact is-page"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="container">
        <header
          className={`services-header ${inView ? "animate-fade-up" : "is-hidden"}`}
        >
          <h2 className="hero-title" style={{ fontSize: "2.5rem" }}>
            Nossas <span className="text-highlight">Ideias</span>
          </h2>
          <p style={{ color: "#888" }}>
            Explorando conceitos e inovações para o futuro digital.
          </p>
        </header>

        <div className="services-grid">
          {[
            { icon: <Lightbulb size={24} />, title: "IA Generativa para Conteúdo", desc: "Utilizar modelos de IA (API da OpenAI) para criar conteúdo dinâmico e personalizado, desde descrições de produtos até artigos de blog." },
            { icon: <BrainCircuit size={24} />, title: "Plataforma de Análise Preditiva", desc: "Desenvolver um dashboard que usa machine learning para prever tendências de mercado, utilizando APIs de dados financeiros ou de mercado." },
            { icon: <Rocket size={24} />, title: "Gamificação na Experiência do Cliente", desc: "Integrar elementos de jogos em aplicações para aumentar o engajamento, conectado a APIs de redes sociais para compartilhamento de conquistas." },
            { icon: <Code size={24} />, title: "Dashboard de Criptomoedas", desc: "Criar um painel em tempo real que consome a API da Binance ou CoinGecko para monitorar preços, volumes e tendências do mercado de criptoativos." },
            { icon: <Share2 size={24} />, title: "Plataforma de Integração ERP", desc: "Desenvolver um middleware que conecta sistemas ERP (SAP, Oracle) a outras aplicações corporativas, utilizando as APIs dos sistemas para sincronizar dados." },
            { icon: <TrendingUp size={24} />, title: "Otimização de Supply Chain com IA", desc: "Criar um sistema que prevê disrupções na cadeia de suprimentos, integrando APIs de logística, dados climáticos e análises de mercado em tempo real." }
          ].map((idea, index) => (
            <article
              key={index}
              className={`glass-card ${inView ? "animate-fade-up" : "is-hidden"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-icon-wrapper">{idea.icon}</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{idea.title}</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.95rem" }}>{idea.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};