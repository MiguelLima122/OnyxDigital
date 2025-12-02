import React from "react";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Star, Zap } from "lucide-react";

export const Impact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impactData = [
    {
      icon: <TrendingUp size={32} />,
      label: "Projetos Concluídos",
      value: "150+",
      desc: "Desde startups a grandes corporações, entregamos sucesso e valor contínuo."
    },
    {
      icon: <Star size={32} />,
      label: "Satisfação dos Usuários",
      value: "98%",
      desc: "Avaliações que refletem nosso compromisso com a excelência e suporte dedicado."
    },
    {
      icon: <Zap size={32} />,
      label: "Ganho Médio de Velocidade",
      value: "+40%",
      desc: "Nossas otimizações resultam em maior performance e eficiência para os clientes."
    }
  ];

  return (
    <section id="impact" className="services" ref={ref}>
      <div className="container">
        <header className={`services-header ${inView ? "animate-fade-up" : "is-hidden"}`}>
          <h2 className="hero-title" style={{ fontSize: "2.5rem" }}>
            Nosso <span className="text-highlight">Impacto</span>
          </h2>
          <p style={{ color: "#888" }}>
            Resultados que falam por si. Unimos talento e tecnologia para criar legados digitais.
          </p>
        </header>
        <div className="services-grid">
          {impactData.map((item, index) => (
            <article key={index} className={`glass-card ${inView ? "animate-fade-up" : "is-hidden"}`} style={{ animationDelay: `${index * 150}ms`, textAlign: 'center' }}>
              <div className="card-icon-wrapper">{item.icon}</div>
              <h3 style={{ fontSize: "2.5rem", color: "var(--highlight-color)", margin: "1rem 0 0.5rem" }}>{item.value}</h3>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{item.label}</h4>
              <p style={{ color: "#a3a3a3", fontSize: "0.95rem" }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};