"use client";

import { ReactNode, useEffect, useRef } from "react";
import rough from "roughjs";

interface RoughNodeProps {
  content: ReactNode;
  x: number; // Absolute X position on grid
  y: number; // Absolute Y position on grid
  isRoot?: boolean;
  onNodeSelect?: () => void;
}

export default function RoughNode({
  content,
  x,
  y,
  isRoot,
  onNodeSelect,
}: RoughNodeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    svgRef.current.innerHTML = "";

    const minWidth = isRoot ? 380 : 180;
    const minHeight = isRoot ? 140 : 90;
    const width = Math.max(containerRef.current.offsetWidth, minWidth);
    const height = Math.max(containerRef.current.offsetHeight, minHeight);
    const rc = rough.svg(svgRef.current);

    if (isRoot) {
      const ellipseSketchBox = rc.ellipse(
        width / 2,
        height / 2,
        width + 24,
        height + 18,
        {
          roughness: 1.2,
          bowing: 1.5,
          stroke: "#1e293b",
          strokeWidth: 2,
          fill: "#f9a8d4",
          fillStyle: "solid",
          fillWeight: 1,
          hachureGap: 1,
        },
      );

      svgRef.current.appendChild(ellipseSketchBox);
      return;
    }

    const rectSketchBox = rc.rectangle(2, 2, width - 6, height - 6, {
      roughness: 1.5,
      bowing: 2,
      stroke: "#1e293b",
      strokeWidth: 2,
      fill: "#fef08a",
      fillStyle: "hachure",
      fillWeight: 1,
      hachureGap: 1,
    });

    svgRef.current.appendChild(rectSketchBox);
  }, [isRoot, content]);

  return (
    <div
      ref={containerRef}
      className={`absolute overflow-visible px-5 py-3 font-handwritten text-center ${!isRoot ? "cursor-pointer hover:scale-125 shadow-2xl" : ""}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -50%)",
        minWidth: isRoot ? 380 : 180,
        minHeight: isRoot ? 140 : 90,
      }}
      onClick={() => !isRoot && onNodeSelect?.()}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      />
      <div className="relative z-10 flex flex-col items-center justify-center mt-4">
        {content}
      </div>
    </div>
  );
}
