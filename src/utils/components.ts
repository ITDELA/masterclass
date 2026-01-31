import type { BuildKeyframes, Keyframes } from "../types";

const buildKeyframes: BuildKeyframes = (from, steps) => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

export { buildKeyframes };
