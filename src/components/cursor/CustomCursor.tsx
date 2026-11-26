"use client";

import { useEffect, useRef } from "react";
import "./custom-cursor.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;

    document.body.classList.add("custom-cursor-enabled");

    const move = (event: MouseEvent) => {
      cursor.style.transform =
        `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    };

    const hover = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      cursor.classList.toggle(
        "custom-cursor--interactive",
        Boolean(
          target.closest("a, button, input, textarea, select, [role='button']")
        )
      );
    };

    const click = () => {
      cursor.classList.remove("custom-cursor--click");
      void cursor.offsetWidth;
      cursor.classList.add("custom-cursor--click");
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", hover);
    document.addEventListener("mousedown", click);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
      document.removeEventListener("mousedown", click);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
