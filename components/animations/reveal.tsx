"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  width = "100%",
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  const getDirection = (): { hidden: Variant; visible: Variant } => {
    switch (direction) {
      case "down":
        return {
          hidden: { y: -75, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case "left":
        return {
          hidden: { x: 75, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case "right":
        return {
          hidden: { x: -75, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case "up":
      default:
        return {
          hidden: { y: 75, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getDirection()}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Improved easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
