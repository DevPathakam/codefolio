interface EdgeProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export default function RoughEdge({ startX, startY, endX, endY }: EdgeProps) {
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  const controlX1 = startX + deltaX * 0.25;
  const controlY1 = startY + deltaY * 0.1;
  const controlX2 = startX + deltaX * 0.7;
  const controlY2 = endY - deltaY * 0.12;

  const pathDefinition = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

  return (
    <g>
      <path
        d={pathDefinition}
        fill="none"
        className="stroke-slate-700"
        strokeWidth={2.5}
        strokeLinecap="round"
        markerEnd="url(#mindmap-arrow)"
      />
      <path
        d={pathDefinition}
        fill="none"
        className="stroke-slate-700/30"
        strokeWidth={1.5}
        transform="translate(1, 0.5)"
        markerEnd="url(#mindmap-arrow)"
      />
    </g>
  );
}
