import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {
  Shield,
  Hexagon,
  Zap,
  ArrowRight,
  Menu,
  X,
  Code,
  Smartphone,
  Database,
} from "lucide-react";

// ==========================================
// COMPONENTE: BARRA DE NAVEGAÇÃO (NAVBAR)
// ==========================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="navbar"
      style={{ background: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.7)" }}
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
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <a // Mantido como âncora para rolar na mesma página (Home)
            href="#concept"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Conceito
          </a>
          <a // Mantido como âncora para rolar na mesma página (Home)
            href="#services"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </a>
          <Link
            to="/contact"
            className="cta-button"
            onClick={() => setIsOpen(false)}
          >
            Projeto Premium <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

// ==========================================
// COMPONENTE: SEÇÃO PRINCIPAL (HERO)
// ==========================================
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hex-bg" />
      <div className="container hero-content">
        <div>
          <span className="hero-badge animate-fade-up" style={{ animationDelay: '100ms' }}>
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
            className="hero-desc animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Código seguro, estética sofisticada. Transformamos sua visão em
            software à prova de falhas com elegância atemporal.
          </p>
          <Link
            to="/contact"
            className="cta-button animate-fade-up"
            style={{ animationDelay: '550ms' }}
          >
            Iniciar Projeto <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENTE: SEÇÃO CONCEITO (CONCEPT)
// ==========================================
const Concept = () => {
  const sectionRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const neonFrameY = useTransform(scrollYProgress, [0, 1], ["-15%", "25%"]);

  // Combina as duas refs
  const setRefs = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  return (
    <section id="concept" className="concept" ref={setRefs}>
      <div className="container concept-container">
        <figure
          className={`concept-image-wrapper ${
            inView ? "animate-slide-in-left" : "is-hidden"
          }`}
        >
          <motion.div className="neon-frame" style={{ y: neonFrameY }} />
          <motion.img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&grayscale=true"
            alt="Conceito tecnológico abstrato"
            className="concept-image"
            style={{ y: imageY, opacity: 0.85 }}
          />
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

// ==========================================
// COMPONENTE: SEÇÃO DE SERVIÇOS (SERVICES)
// ==========================================
const Services = () => {
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
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                {service.title}
              </h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.95rem" }}>
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


// ==========================================
// COMPONENTE: PÁGINA INICIAL (HOMEPAGE)
// ==========================================
const HomePage = () => (
  <>
    <Hero />
    <Concept />
    <Services />
  </>
);
// ==========================================
// COMPONENTE: SEÇÃO DE CONTATO (CONTACT)
// ==========================================
const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Enviando...");
    console.log("Dados do formulário:", formData);

    // Simulação de envio para um backend
    setTimeout(() => {
      setFormStatus(`Obrigado, ${formData.name}! Sua mensagem foi recebida.`);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 5000); // Limpa a mensagem após 5s
    }, 1500);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <header
          className={`services-header ${inView ? "animate-fade-up" : "is-hidden"}`}
        >
          <h2 className="hero-title" style={{ fontSize: "2.5rem" }}>
            Vamos Construir Algo <span className="text-highlight">Incrível</span>
          </h2>
          <p style={{ color: "#888" }}>
            Tem uma ideia? Preencha o formulário e vamos transformá-la em
            realidade.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className={`contact-form ${inView ? "animate-fade-up" : "is-hidden"}`}
          style={{ animationDelay: "200ms" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="form-input"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            className="form-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Sua mensagem..."
            className="form-textarea"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="cta-button submit-button">
            Enviar Mensagem <ArrowRight size={18} />
          </button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </section>
  );
};

// ==========================================
// COMPONENTE: RODAPÉ (FOOTER)
// ==========================================
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="footer" ref={ref}>
      <div className="container footer-grid">
        <div
          className={`footer-brand ${inView ? "animate-fade-up" : "is-hidden"}`}
          style={{ animationDelay: "100ms" }}
        >
          <div className="logo" style={{ marginBottom: "1.5rem" }}>
            <Hexagon size={24} className="text-highlight" />
            ONIX
          </div>
          <p style={{ color: "#666", fontSize: "0.9rem", maxWidth: "300px" }}>
            Transformando códigos em legados. Solidez e inteligência para o futuro
            digital.
          </p>
        </div>

        <nav
          className={`footer-nav ${inView ? "animate-fade-up" : "is-hidden"}`}
          style={{ animationDelay: "250ms" }}
        >
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Carreira</a>
            </li>
            <li>
              <a href="#">Manifesto</a>
            </li>
          </ul>
        </nav>

        <nav
          className={`footer-nav ${inView ? "animate-fade-up" : "is-hidden"}`}
          style={{ animationDelay: "400ms" }}
        >
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
          &copy; 2024 OnixDigital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (APP)
// ==========================================
export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
