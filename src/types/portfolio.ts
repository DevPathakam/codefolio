import { SkillProps } from '@/components/portfolio/Skill';
import { SocialLinkProps } from '@/components/portfolio/SocialLink';
import { CategoryValues } from '@/data/skills/skillCategories';
import { ReadableDuration } from './app.types';

export type SocialLink = SocialLinkProps & { name: string; visible: boolean };

export type SkillCategory = (typeof CategoryValues)[number];
export type Skill = SkillProps & {
  alias: string;
  visible: boolean;
  isFeatured?: boolean;
};

export type SkillMetadata = {
    counts: {
        total: number,
        [key: string]: number
    },
    experience: {
        high:  string[],
        mid: string[],
        initial: string[]
    }
}

export type FakeFile = {
  href: string;
  fileName: string;
  type: FakeFileType;
  isActive: boolean;
  belongsTo: FakeFileBelongsTo;
};

export type Company = {
  name: string;
  alias: string;
  workFrom: ReadableDuration;
  workTo?: ReadableDuration;
  isCurrent?: boolean;
  location: string;
  roles: string[];
  jobType: 'Full-Time' | 'Part-Time' | 'Contractual';
  workMode: 'In-Office' | 'Hybrid' | 'Remote';
};
export type Project = {
  name: string;
  alias: string;
  highlight?: string;
  points: string[];
  isPersonal?: boolean;
  company?: Company;
  techStack: Skill[];
  duration: string;
  liveUrl?: string;
  isVisible: boolean;
  isOngoing?: boolean;
  startedOn?: ReadableDuration;
  endOn?: ReadableDuration;
};
export type Achievement = {
  name: string;
  type: 'award' | 'certification';
  year: number;
  achievedFrom?: string;
  achievedAt?: Company;
};

export type FakeFileBelongsTo = 'skills' | 'projects' | 'root';
export type FakeFileType = 'Markdown' | 'JSON' | 'PDF' | 'TSX' | 'HTML';
