import { ReactElement } from 'react';

interface BadgeProps {
  children: ReactElement;
  additionalClasses?: string;
}

export const Badge = ({ children, additionalClasses }: BadgeProps) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-md text-xs font-medium h-6 ${additionalClasses}`}
  >
    {children}
  </span>
);
