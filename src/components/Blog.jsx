import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: "Desvendando a Arquitetura Hexagonal",
      excerpt: "Uma análise profunda sobre como a arquitetura hexagonal pode tornar seu software mais robusto, testável e independente de frameworks.",
      author: "Rafael Lima",
      date: "24 de Nov, 2025",
      tags: ["Arquitetura", "Backend", "Boas Práticas"],
    },
    {
      title: "React Server Components: O Futuro do Desenvolvimento Web?",
      excerpt: "Explore o novo paradigma dos Server Components no React e entenda como eles prometem revolucionar a performance e a experiência do usuário.",
      author: "Miguel Lima",
      date: "15 de Nov, 2025",
      tags: ["React", "Frontend", "Performance"],
    },
    {
      title: "Segurança em APIs: Além do Básico com JWT e OAuth2",
      excerpt: "Proteja suas APIs contra ameaças modernas. Cobrimos desde a implementação segura de JWT até estratégias avançadas com OAuth2.",
      author: "Rafael Lima",
      date: "02 de Nov, 2025",
      tags: ["Segurança", "API", "Backend"],
    },
  ];

  return (
    <motion.section
      id="blog"
      className="blog contact is-page"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="container">
        <header className={`services-header ${inView ? "animate-fade-up" : "is-hidden"}`}>
          <h2 className="hero-title" style={{ fontSize: "2.5rem" }}>
            Nosso <span className="text-highlight">Blog</span>
          </h2>
          <p style={{ color: "#888" }}>
            Insights, tutoriais e tendências do universo da tecnologia e desenvolvimento.
          </p>
        </header>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <article key={index} className={`blog-post-card ${inView ? "animate-fade-up" : "is-hidden"}`} style={{ animationDelay: `${index * 150}ms` }}>
              <h3>{post.title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <div className="blog-post-meta"><span>{post.author} &bull; {post.date}</span></div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};