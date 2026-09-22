import { SkillCategory } from '@/types/portfolio';
import { Icon } from '@iconify/react';
import { ReadableDuration } from '@/types/app.types';
import { NpmPill } from './NpmPill';
import { calculateExperience } from '@/utils/datTimeHelper';

export interface SkillProps {
  icon?: string;
  name: string;
  category?: SkillCategory[];
  tags?: string[];
  usingSince?: ReadableDuration;
  lastUsed?: ReadableDuration;
}
export const Skill = ({
  icon,
  name,
  category,
  tags,
  usingSince,
  lastUsed,
}: SkillProps) => {  
  return (
    <div className="flex gap-2 p-3" style={{ borderColor: '#ffc600' }}>
      {icon && (
        <span className="pt-1 text-2xl">
          <Icon icon={icon} />
        </span>
      )}
      <div className="flex flex-col bg-">
        <div className="text-2xl">{name}</div>

        <div className="flex flex-wrap gap-2">
          {category && (
            <small>
              <NpmPill
                label="categories"
                value={category.toString()}
                valueClasses="bg-green-800"
              />
            </small>
          )}

          {usingSince && (
            <small>
              <NpmPill
                label="experience"
                value={calculateExperience(usingSince, lastUsed)}
                valueClasses="bg-sky-800"
              />
            </small>
          )}

          {tags?.length && (
            <small>
              <NpmPill
                label="tags"
                value={tags.toString()}
                valueClasses="bg-orange-800"
              />
            </small>
          )}
        </div>
      </div>
    </div>
  );
};
