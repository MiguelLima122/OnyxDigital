import React from "react";
import { motion } from "framer-motion";
import { Hero } from "./Hero";
import { Concept } from "./Concept";
import { Services } from "./Services";
import { Impact } from "./Impact";
import { SectionSeparator } from "./SectionSeparator";

/**
 * Componente HomePage: Agrupa todas as seções da página inicial.
 * É um componente simples que organiza o layout principal.
 */
export const HomePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    <Hero />
    <Concept />
    <SectionSeparator />
    <Services />
    <SectionSeparator />
    <Impact />
  </motion.div>
);