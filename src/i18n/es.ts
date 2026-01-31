import type { Dictionary } from "../types";

import youth from "../assets/youth.png";
import look from "../assets/look.png";
import brightness from "../assets/brightness.png";

const es: Dictionary = {
  lang: "es",
  title: "El amor empieza contigo.",
  hero: {
    alt: "GenetikPlux Logo",
    title: "This Valentine’s Day, the most important love starts with you",
  },
  timeless: {
    includes: [
      "Reducción visible de líneas de expresión",
      "Piel más firme y elástica",
      "Hidratación profunda con ácido hialurónico",
      "Regeneración celular activa",
      "Textura suave como la seda",
      "Luminosidad natural restaurada",
    ],
    title: "Juventud Atemporal",
    btn: "Cero Arrugas",
    img: youth,
    alt: "Cero arrugas",
  },
  renewed: {
    includes: [
      "Reduce ojeras y bolsas visiblemente",
      "Hidratación intensiva 24 horas",
      "Regeneración celular del contorno",
      "Mirada más despierta y radiante",
      "Textura suave y líneas difuminadas",
    ],
    title: "Mirada Renovada",
    btn: "Cero Ojos Cansados",
    img: look,
    alt: "Cero Ojos Cansados",
  },
  perfect: {
    includes: [
      "Reducción visible de manchas y hiperpigmentación",
      "Tono de piel unificado y luminoso",
      "Acción despigmentante profesional",
      "Prevención de nuevas manchas",
      "Hidratación balanceada",
      "Piel radiante desde la primera semana",
    ],
    title: "Luminosidad Perfecta",
    btn: "Cero Manchas",
    img: brightness,
    alt: "Cero Manchas",
  },
};

export { es };
