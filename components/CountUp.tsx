"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * 滚动进入视口时，把字符串里的首个数字段从 0 滚到目标值。
 * 智能解析：「10w+」→ 滚动 10，保留「w+」后缀；「百万+」无数字 → 静态显示。
 * 非数字前后缀原样保留，小数位数与原值一致。
 */
export function CountUp({ value, duration = 1.3, className }: CountUpProps) {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const target = match ? parseFloat(match[1]) : null;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setN(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  // 无数字（纯中文如「品牌合作」「百万+」）→ 静态
  if (target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const rendered = value.replace(match![1], n.toFixed(decimals));
  return (
    <span ref={ref} className={className}>
      {rendered}
    </span>
  );
}
