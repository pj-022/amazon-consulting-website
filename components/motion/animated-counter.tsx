"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function parseMetricValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;

  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
    decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
  };
}

export function AnimatedCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const parsed = parseMetricValue(value);
  const [display, setDisplay] = useState(parsed?.number ?? 0);

  useEffect(() => {
    if (!parsed || !inView || reduceMotion) {
      if (parsed) setDisplay(parsed.number);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    const from = 0;
    const to = parsed.number;

    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed, reduceMotion]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  const formatted =
    parsed.decimals > 0
      ? display.toFixed(parsed.decimals)
      : Math.round(display).toString();

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </motion.span>
  );
}
