"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domAnimation);

export function MotionProvider({ children }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
