import React from "react";

const dots = Array.from({ length: 64 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${-20 - ((index * 19) % 90)}px`,
  size: 2 + ((index * 7) % 5),
  duration: `${18 + ((index * 11) % 18)}s`,
  delay: `${-((index * 13) % 28)}s`,
  drift: `${((index * 17) % 80) - 40}px`,
}));

export default function WhiteDotBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {dots.map((dot, index) => (
        <span
          key={index}
          className="white-dot"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDuration: dot.duration,
            animationDelay: dot.delay,
            "--dot-drift": dot.drift,
          }}
        />
      ))}
    </div>
  );
}
