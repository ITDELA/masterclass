import type { Dictionary } from "../types";

import youth from "../assets/youth.png";
import look from "../assets/look.png";
import brightness from "../assets/brightness.png";

const en: Dictionary = {
  lang: "en",
  title: "Love starts with you",
  hero: {
    href: "/es",
    alt: "GenetikPlux Logo",
    title: "This Valentine’s Day, the most important love starts with you",
  },
  welcome: {
    title: "Become an Exosome Expert with GenetikPlux:",
    subtitle_first: "Premium training with the latest",
    subtitle_second: "technology in advanced aesthetics.",
    text: "Immediate Professional Certification",
    btn: "GIVING IS ALSO LOVE",
  },
  timeless: {
    img: youth,
    title: "Timeless Youth",
    btn: "Zero Wrinkles",
    alt: "Zero Wrinkles",
    includes: [
      "Visible reduction of fine lines",
      "Firmer, more elastic skin",
      "Deep hydration with hyaluronic acid",
      "Active cell regeneration",
      "Silky-smooth texture",
      "Restored natural radiance",
    ],
  },
  renewed: {
    img: look,
    title: "A Renewed Perspective",
    btn: "Zero Tired Eyes",
    alt: "Zero Tired Eyes",
    includes: [
      "Visibly reduces dark circles and puffiness",
      "24-hour intensive hydration",
      "Cellular regeneration of the eye contour",
      "A more awake and radiant look",
      "Smooth texture and blurred lines",
    ],
  },
  perfect: {
    img: brightness,
    btn: "Zero Stains",
    alt: "Zero Stains",
    title: "Perfect Luminosity",
    includes: [
      "Visible reduction of dark spots and hyperpigmentation",
      "Even and radiant skin tone",
      "Professional depigmenting action",
      "Prevention of new dark spots",
      "Balanced hydration",
      "Radiant skin from the first week",
    ],
  },
  brand: {
    title: "WHY CHOOSE GENETIK PLUX",
    brands: [
      {
        title: "Taking care of yourself isn't vanity, it's a necessity.",
        text: "Your skin is the largest organ in your body. It deserves professional attention.",
      },
      { 
        title: "Professional quality at your fingertips.",
        text: "Clinical-grade products used by aesthetic physicians throughout Florida.",
      },
      {
        title: "Real results, not empty promises.", 
        text: "MCCM technology backed by aesthetic medicine professionals.",
      },
      {
        title: "Commitment to your transformation.",
        text: "We don't just sell products; we accompany you on your journey to becoming your best self.",
      }
    ],
  },
  content: {
    title: "Available only until February 14th",
    subtitle: "Nationwide shipping or visit us at",
    contents: [
      {
        title: "Miami",
        description:
          "Vesicles, cargo (Mirna/proteins) PI3K/Akt, MAPK/ERK pathways.",
      },
      {
        title: "Boston",
        description:
          "Exosomes + PDRN + (complementary pathways: vesicular, nuclear, and mitochondrial).",
      },
      {
        title: "New York",
        description: "Selection of pH, layers, and application times.",
      },
    ],
  },
  finish: {
    title: "I also deserve to feel beautiful in my own skin.",
    finishs: [
      "Your partner who deserves to be pampered.",
      "Your best friend who needs some extra TLC.",
      "That special person you deeply value.",
      "Your mom who always takes care of everyone but herself.",
      "Because the best gift is the one that nurtures, transforms, and lasts."
    ],
  },
  footer: {
    copyrightText: "Copyright 2025. All rights reserved",
  },
};

export { en };
