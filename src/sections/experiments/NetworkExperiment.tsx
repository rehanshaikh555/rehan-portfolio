"use client";

import { useEffect, useRef } from "react";

type NetworkNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function NetworkExperiment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const ctx = context;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let pointerX = -1000;
    let pointerY = -1000;
    let nodes: NetworkNode[] = [];

    const createNodes = () => {
      const count = Math.max(24, Math.min(65, Math.floor(width / 17)));

      nodes = Array.from({ length: count }, (_, index) => {
        const x = ((index * 73) % 997) / 997;
        const y = ((index * 137) % 991) / 991;

        return {
          x: x * width,
          y: y * height,
          vx: ((index % 3) - 1) * 0.12,
          vy: ((index % 5) - 2) * 0.08,
          radius: index % 7 === 0 ? 2.4 : 1.5,
        };
      });
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createNodes();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        const dx = pointerX - node.x;
        const dy = pointerY - node.y;
        const distanceToPointer = Math.sqrt(dx * dx + dy * dy);

        if (distanceToPointer < 150 && distanceToPointer > 0) {
          const force = (150 - distanceToPointer) / 150;
          node.x -= (dx / distanceToPointer) * force * 0.45;
          node.y -= (dy / distanceToPointer) * force * 0.45;
        }

        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex++) {
          const other = nodes[otherIndex];
          const lineX = node.x - other.x;
          const lineY = node.y - other.y;
          const distance = Math.sqrt(lineX * lineX + lineY * lineY);

          if (distance < 125) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(164, 166, 165, ${0.22 * (1 - distance / 125)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = distanceToPointer < 150
          ? "rgba(232, 229, 222, 0.95)"
          : "rgba(232, 229, 222, 0.65)";
        ctx.fill();
      });
    };

    const animate = () => {
      draw();
      frame += 1;
      animationId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
    };

    const handlePointerLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    resize();

    if (!reducedMotion) {
      animationId = window.requestAnimationFrame(animate);
    }

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="network-experiment">
      <canvas
        ref={canvasRef}
        className="network-experiment__canvas"
        aria-label="Interactive network visualisation with connected nodes. Move the pointer to influence nearby nodes."
        role="img"
      />
      <div className="network-experiment__overlay">
        <span>LIVE INTERACTION</span>
        <span>MOVE YOUR POINTER</span>
      </div>
      <div className="network-experiment__coordinates">
        NODE RELATIONSHIPS / 001
      </div>
    </div>
  );
}
