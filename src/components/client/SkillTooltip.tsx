'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Skill } from '@/components/portfolio/Skill';
import { Skill as SkillData } from '@/types/portfolio';

interface SkillTooltipProps {
  skill: SkillData;
}

export const SkillTooltip = ({
  skill,
}: SkillTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={`Show details for ${skill.name}`}
        aria-expanded={isOpen}
        className="peer block cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon icon={skill.icon ?? ''} className="text-3xl" />
      </button>

      <div
        className={`${isOpen ? 'block' : 'hidden'} absolute left-full z-50 mb-2 bg-gray-800 text-white text-sm border border-brand-secondary rounded-3xl py-1 px-2 whitespace-nowrap shadow-lg md:peer-hover:block`}
      >
        <Skill
          name={skill.name}
          icon={skill.icon}
          category={skill.category}
          tags={skill.tags}
          usingSince={skill.usingSince}
          lastUsed={skill.lastUsed}
          isFeatured={skill.isFeatured}
        />
      </div>
    </div>
  );
};