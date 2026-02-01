interface Includes {
  title: string;
  btn: string;
  img: ImageMetadata;
  alt: string;
  includes: string[];
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
    subtitle_first: string;
    subtitle_second: string;
    text: string;
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
  instructor: {
    title: string;
    instructors: string[];
  };
  content: {
    title: string;
    subtitle: string;
    contents: Content[];
  };
  footer: {
    copyrightText: string;
  };
}

export type { Dictionary, Content };
