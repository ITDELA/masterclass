interface Brand {
  title: string;
  text: string;
}

interface Includes {
  id: string;
  title: string;
  subtitle: string;
  btn: string;
  img: ImageMetadata;
  alt: string;
  includes: string[];
  ingredients: Brand[];
}

interface Content {
  title: string;
  description: string;
}

interface Dictionary {
  lang: "es" | "en";
  title: string;
  welcome: {
    title: string;
    subtitle: string;
    text: string;
    subtext: string;
    btn: string;
  };
  hero: {
    href: string;
    alt: string;
    title: string;
  };
  timeless: Includes;
  renewed: Includes;
  perfect: Includes;
  brand: {
    title: string;
    brands: Brand[];
  };
  content: {
    title: string;
    subtitle: string;
    contents: Content[];
  };
  finish: {
    title: string;
    finishs: string[];
  };
  footer: {
    copyrightText: string;
  };
}

export type { Dictionary, Content, Brand };
