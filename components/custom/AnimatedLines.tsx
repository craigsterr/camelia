"use client";
import { motion } from "framer-motion";

type Props = {
  text: string;
  delayOffset?: number;
  className?: string;
};

export default function AnimatedLines({
  text,
  delayOffset = 0,
  className = "",
}: Props) {
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delayOffset + i * 0.3,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-2"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
