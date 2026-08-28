"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  startOnMount = false,
}: {
  value: string;
  className?: string;
  startOnMount?: boolean;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const scrollInView = useInView(containerRef, { once: true, margin: "-40px" });
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const [display, setDisplay] = useState<number | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = startOnMount ? mounted : scrollInView;

  useEffect(() => {
    if (!parsed || !shouldAnimate || hasRun.current) return;

    if (reduceMotion) {
      setDisplay(parsed.number);
      hasRun.current = true;
      return;
    }

    hasRun.current = true;
    const duration = 1600;
    const start = performance.now();
    const to = parsed.number;
    let frame = 0;

    setDisplay(0);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(to * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(to);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldAnimate, value, reduceMotion, parsed]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  const current = display ?? (shouldAnimate ? 0 : parsed.number);
  const formatted =
    parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : Math.round(current).toString();

  return (
    <span ref={containerRef} className={className}>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </span>
  );
}
