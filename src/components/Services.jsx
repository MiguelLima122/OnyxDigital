import React from "react";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Database } from "lucide-react";

export const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const servicesData = [
    {
      icon: <Code size={24} />,
      title: "Desenvolvimento Web",
      desc: "Aplicações robustas com foco em SEO e performance. Código limpo que escala com seu negócio.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Premium",
      desc: "Apps nativos e híbridos com UX fluida, garantindo retenção e engajamento do usuário.",
    },
    {
      icon: <Database size={24} />,
      title: "Backend Blindado",
      desc: "Infraestrutura cloud segura e APIs resilientes. Seus dados protegidos como em um cofre.",
    },
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <header className="services-header">
          <h2 className="hero-title" style={{ fontSize: "2.5rem" }}>
            Nossas <span className="text-highlight">Soluções</span>
          </h2>
          <p style={{ color: "#888" }}>
            Engenharia de nível elite para demandas complexas.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <article
              key={index}
              className={`glass-card ${inView ? "animate-fade-up" : "is-hidden"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-icon-wrapper">{service.icon}</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{service.title}</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.95rem" }}>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};