import React from "react";
import { Hexagon } from "lucide-react";

/**
 * Componente SplashScreen: A tela de carregamento inicial com o logo animado.
 */
export const SplashScreen = () => (
  <div className="splash-screen">
    <div className="logo splash-logo-wrapper">
      <div className="logo splash-logo">
        <Hexagon
          size={48}
          className="text-highlight logo-icon"
          strokeWidth={2.5}
        />
        <span>ONIX</span><span className="text-highlight">DIGITAL</span>
      </div>
    </div>
  </div>
);