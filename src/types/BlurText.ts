import type { FC } from "react";

type BlurTextInput = {
  text?: string;
  delay?: number;
  retard?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

type BlurTextProps = FC<BlurTextInput>;

type Keyframes = Record<string, Array<string | number>>;

type BuildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>,
) => Keyframes;

export type { BlurTextProps, BuildKeyframes, Keyframes };
