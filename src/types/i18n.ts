interface Includes {
  title: string;
  btn: string;
  img: ImageMetadata;
  alt: string;
  includes: string[];
}

interface Dictionary {
  lang: "es" | "en";
  title: string;
  hero: {
    alt: string;
    title: string;
  };
  timeless: Includes;
  renewed: Includes;
  perfect: Includes;
}

export type { Dictionary };
