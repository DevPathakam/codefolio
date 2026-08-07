"use client";

import { MindMapEdge, Tag } from "@/types/about";
import RoughEdge from "./RoughEdge";
import RoughNode from "./RoughNode";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MindMapNode } from "@/classes/about/MindMapNode";

interface RoughMindMapProps {
  data: Tag[];
}

const CHILD_RADIUS = 250;

export default function RoughMindMap({ data }: RoughMindMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState({ width: 1000, height: 720 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      setViewportSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const rootCenter = useMemo(
    () => ({
      x: viewportSize.width / 2,
      y: viewportSize.height / 2,
    }),
    [viewportSize],
  );

  const nodes: MindMapNode[] = useMemo(() => {
    const convertedNodes: MindMapNode[] = [
      new MindMapNode({
        id: 0,
        title: "Who am I?",
        subTitle: "(I wish I knew. Explore yourself and find out)",
        xPos: rootCenter.x,
        yPos: rootCenter.y,
        isRoot: true,
      }),
    ];

    data.forEach((d, idx) => {
      const angle =
        -Math.PI / 2 + (idx * (Math.PI * 2)) / Math.max(data.length, 1);
      const radius = CHILD_RADIUS + (idx % 2) * 50;
      const xPos = rootCenter.x + Math.cos(angle) * radius;
      const yPos = rootCenter.y + Math.sin(angle) * radius;

      convertedNodes.push(
        new MindMapNode({
          id: d.id,
          title: d.title,
          description: d.description,
          subTitle: d.description,
          xPos,
          yPos,
          isRoot: false,
        }),
      );
    });

    return convertedNodes;
  }, [data, rootCenter]);

  const edges: MindMapEdge[] = useMemo(() => {
    return nodes
      .filter((node) => !node.isRoot)
      .map((node) => ({ source: 0, target: node.id }));
  }, [nodes]);

  const findNode = useCallback(
    (id: number) => nodes.find((n) => String(n.id) === String(id)),
    [nodes],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[720px] min-w-[1000px] rounded-xl overflow-auto p-8"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <marker
            id="mindmap-arrow"
            markerWidth="14"
            markerHeight="14"
            refX="11"
            refY="6"
            orient="auto"
          >
            <path
              d="M 0 0 L 12 6 L 0 12"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {edges.map((edge, idx) => {
          const source = findNode(edge.source);
          const target = findNode(edge.target);
          if (!source || !target) return null;

          return (
            <RoughEdge
              key={idx}
              startX={source.xPos}
              startY={source.yPos}
              endX={target.xPos}
              endY={target.yPos}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 z-10">
        {nodes.map((node) => (
          <RoughNode
            key={node.id}
            content={
              <>
                <span
                  className={`text-slate-800 ${node.isRoot ? "text-4xl font-bold" : "text-2xl"}`}
                >
                  {node.title}
                </span>
                {node.subTitle && (
                  <span className="mt-1 text-lg text-slate-600">
                    {node.subTitle}
                  </span>
                )}
              </>
            }
            x={node.xPos}
            y={node.yPos}
            isRoot={node.isRoot}
            onNodeSelect={() => console.log("Selected Node ==>>> ", node)}
          />
        ))}
      </div>
    </div>
  );
}
