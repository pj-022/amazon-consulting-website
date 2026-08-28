"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeLeft, transition } from "@/lib/motion";

const bars = [38, 52, 45, 61, 58, 72, 68, 79, 74, 88, 84, 92];

const metrics = [
  { label: "ROAS", value: "3.8", delta: "+52%" },
  { label: "Ad sales", value: "$1.2M", delta: "+18%" },
  { label: "Waste reduced", value: "$25K", delta: "Monthly" },
];

export function DashboardPreview() {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setReady(true);
  }, []);

  const animate = ready || reduceMotion;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: 40 }}
      animate={animate ? { opacity: 1, x: 0 } : {}}
      transition={{ ...transition, delay: 0.15 }}
    >
      <div className="surface-card dashboard-float overflow-hidden border border-border/80 bg-card p-6 shadow-lg ring-1 ring-[#2563EB]/10">
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Vendor Central Program
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Advertising performance overview
            </p>
          </div>
          <div className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
            Last 90 days
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="rounded-lg border border-border/80 bg-[#EFF6FF]/80 p-3"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ ...transition, delay: 0.3 + index * 0.08 }}
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-[#1D4ED8]">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-accent">{metric.delta}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-border/80 bg-muted/30 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">ROAS trend</p>
            <p className="text-xs font-semibold text-foreground">Target: 3.5+</p>
          </div>
          <div className="flex h-28 items-end gap-1.5">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                className={`w-full flex-1 rounded-sm ${
                  index >= bars.length - 3 ? "bg-accent" : "bg-primary/45"
                }`}
                initial={reduceMotion ? { height: `${height}%` } : { height: 0 }}
                animate={animate ? { height: `${height}%` } : { height: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.4 + index * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-4 grid grid-cols-2 gap-3 text-xs"
          variants={fadeLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={{ ...transition, delay: 0.8 }}
        >
          <div className="rounded-lg border border-border/80 bg-[#FFF7ED]/60 p-3">
            <p className="text-muted-foreground">Top campaign type</p>
            <p className="mt-1 font-medium text-foreground">Sponsored Products</p>
          </div>
          <div className="rounded-lg border border-border/80 bg-[#F5F3FF]/60 p-3">
            <p className="text-muted-foreground">Next action</p>
            <p className="mt-1 font-medium text-foreground">Reallocate Q4 budget</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
