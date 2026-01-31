import type { FC, CSSProperties } from "react";

export interface SplitTextInput {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

type SplitTextProps = FC<SplitTextInput>;

export type { SplitTextProps };
