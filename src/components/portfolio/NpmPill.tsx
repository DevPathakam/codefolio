interface NpmPillProps {
  label: string;
  value: string;
  labelClasses?: string;
  valueClasses?: string;
}

export const NpmPill = ({
  label,
  value,
  labelClasses,
  valueClasses,
}: NpmPillProps) => (
  <small className="text-shadow-sm font-medium font-mono">
    <span className={`bg-[#5D5D5D] py-0.5 px-1 rounded-l-sm ${labelClasses}`}>
      {label}
    </span>
    <span className={`py-0.5 px-1 rounded-r-sm ${valueClasses}`}>{value}</span>
  </small>
);
