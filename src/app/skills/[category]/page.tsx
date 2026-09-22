import { CodeBox } from '@/components/client/CodeBox';
import { MetaData } from '@/components/client/MetaData';
import { Skill } from '@/components/portfolio/Skill';
import { TotalExperience } from '@/constants/common';
import { Skills } from '@/data/skills/skills';
import {
  Skill as SkillType,
  SkillCategory,
  SkillMetadata,
  SkillByProficiency,
} from '@/types/portfolio';
import { getDuration } from '@/utils/datTimeHelper';

interface SkillByCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function SkillByCategoryPage({
  params,
}: SkillByCategoryPageProps) {
  const { category } = await params;
  const skillsByCategory = Skills.filter(
    (skill) =>
      skill.visible && skill.category?.includes(category as SkillCategory),
  );

  const segregateSkillsByProficiency = (skills: SkillType[]) => {
    const segregatedSkills: SkillByProficiency = {
      high: [],
      mid: [],
      initial: [],
    };

    skills.forEach((skill) => {
      if (skill.usingSince) {
        const skillDuration = getDuration(skill.usingSince);

        const totalExpMonths =
          (TotalExperience.years || 0) * 12 + (TotalExperience.months || 0);
        const skillMonths =
          (skillDuration.years || 0) * 12 + (skillDuration.months || 0);

        const highThresholdMonths = Math.max(0, totalExpMonths - 48);
        const initialThresholdMonths = 12;

        if (skillMonths <= initialThresholdMonths) {
          segregatedSkills.initial.push(skill.name);
        } else if (skillMonths >= highThresholdMonths) {
          segregatedSkills.high.push(skill.name);
        } else {
          segregatedSkills.mid.push(skill.name);
        }
      }
    });

    return segregatedSkills;
  };

  const getSkillMetadata = (
    categorizedSkills: SkillType[],
  ): SkillMetadata[] => {
    const total = categorizedSkills.length;
    const segregatedSkills = segregateSkillsByProficiency(categorizedSkills);

    const metadata: SkillMetadata[] = [
      {
        proficiency: segregatedSkills,
        counts: {
          total: total,
          highProficiency: segregatedSkills.high.length,
          midProficiency: segregatedSkills.mid.length,
          initialProficiency: segregatedSkills.initial.length,
        },
      },
    ];

    return metadata;
  };

  return (
    <section about="skill_by_category">
      <div className="flex flex-wrap gap-2 m-5 p-0 ">
        {skillsByCategory.map(
          (skill, idx) =>
            skill.visible && (
              <div
                key={`skill-card-${idx}`}
                className="my-5 p-3 border-2 border-brand-border rounded-xl bg-brand-primary-deep-dark shadow-2xl w-full md:w-120 flex "
              >
                <Skill
                  name={skill.name}
                  icon={skill.icon}
                  key={`skill-${idx}`}
                  tags={skill.tags}
                  usingSince={skill.usingSince}
                  lastUsed={skill.lastUsed}
                  category={skill.category}
                />
              </div>
            ),
        )}
      </div>

      <div className="md:mx-10 lg:grid lg:grid-cols-2 gap-8 flex flex-col">
        <CodeBox
          category={category as SkillCategory}
          data={skillsByCategory.map((skill) => ({
            name: skill.name,
            category: skill.category,
            tags: skill.tags,
            usingSince: skill.usingSince,
            lastUsed: skill.lastUsed,
          }))}
        />
        <MetaData metadata={getSkillMetadata(skillsByCategory)[0]} />
      </div>
    </section>
  );
}
