import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";

export const Contact = () => {
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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus("");
    console.log("Dados do formulário:", formData);

    setTimeout(() => {
      setFormStatus(`Obrigado, ${formData.name}! Sua mensagem foi recebida.`);
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 5000);
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      className="contact is-page"
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
            placeholder="Seu Email"
            className="form-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Como deseja seu projeto?"
            className="form-textarea"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="cta-button submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner" />
            ) : (
              <>Enviar Mensagem <ArrowRight size={18} /></>
            )}
          </button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}

        <div
          className={`suggestion-box ${inView ? "animate-fade-up" : "is-hidden"}`}
          style={{ animationDelay: "400ms", position: "relative", zIndex: 2 }}>
          <p>Sem uma ideia clara? Deixe-nos inspirar você.</p>
          <Link to="/ideias" className="suggestion-link">
            Explore algumas de nossas ideias <Lightbulb size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};