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
  welcome: {
    title: string,
    subtitle_first: string,
    subtitle_second: string,
    text: string,
    btn: string
  }
  hero: {
    href: string,
    alt: string;
    title: string;
  };
  timeless: Includes;
  renewed: Includes;
  perfect: Includes;
  instructor: {
    title: string,
    instructors: string[]
  }
}

export type { Dictionary };
