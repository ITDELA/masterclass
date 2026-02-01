import type { Dictionary } from "../types";

import youth from "../assets/youth.png";
import look from "../assets/look.png";
import brightness from "../assets/brightness.png";

const es: Dictionary = {
  lang: "es",
  title: "El amor empieza contigo",
  hero: {
    href: "/",
    alt: "GenetikPlux Logo",
    title: "Este día de San Valentín, el amor más importante empieza contigo",
  },
  welcome: {
    title: "Conviértete en experto en Exosomas con GenetikPlux:",
    subtitle_first: "Formación premium con la última",
    subtitle_second: "tecnología en estética avanzada.",
    text: "Certificación Profesional inmediata",
    btn: "REGALAR TAMBIÉN ES AMOR",
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
  brand: {
    title: "POR QUÉ ELEGIR GENETIKPLUX",
    brands: [
      {
        title: "Cuidarte no es vanidad, es necesidad.", 
        text: "Tu piel es el órgano más grande de tu cuerpo. Merece atención profesional.",
      },
      {
        title: "Calidad profesional al alcance de tu mano.", 
        text: "Productos de grado clínico usados por médicos estéticos en toda Florida.",
      },
      {
        title: "Resultados reales, no promesas vacías",
        text: "Tecnología MCCM respaldada por profesionales de la medicina estética.",
      },
      {
        title: "Compromiso con tu transformación", 
        text: "No solo vendemos productos, acompañamos tu viaje hacia tu mejor versión.",
      }
    ],
  },
  content: {
    title: "Disponible solo hasta el 14 de febrero",
    subtitle: "Envíos a nivel nacional o visitanos en",
    contents: [
      {
        title: "Miami",
        description:
          "Vesículas, carga (Mirna/proteínas) vías PI3K/Akt, MAPK/ERK.",
      },
      {
        title: "Boston",
        description:
          "Exosomas + PDRN + (rutas complementarias: vesicular, nuclear y mitocondrial).",
      },
      {
        title: "New York",
        description: "Selección de pH, capas y tiempos de aplicación.",
      },
    ],
  },
  finish: {
    title: "Yo también merezco sentirme hermosa en mi propia piel.",
    finishs: [
      "Tu pareja que merece consentirse.",
      "Tu mejor amiga que necesita un mimo especial.",
      "Esa persona especial que valoras profundamente.",
      "Tu mamá que siempre cuida de todos, menos de ella.",
      "Porque el mejor regalo es el que cuida, transforma y perdura."
    ],
  },
  footer: {
    copyrightText: "Copyright 2025. Todos los derechos reservados.",
  },
};

export { es };
