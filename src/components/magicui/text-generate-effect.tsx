"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
  highlightWords = [],
  highlightClassName = "text-brand",
}: TextGenerateEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [started, setStarted] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) setStarted(true);
  }, [isInView]);

  return (
    <span ref={ref} className={cn("inline", className)}>
      {wordsArray.map((word, idx) => {
        const isHighlight = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase()),
        );
        return (
          <motion.span
            key={`${word}-${idx}`}
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            animate={
              started
                ? { opacity: 1, filter: "blur(0px)", y: 0 }
                : undefined
            }
            transition={{
              duration,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "inline-block",
              isHighlight && highlightClassName,
            )}
          >
            {word}
            {idx < wordsArray.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
