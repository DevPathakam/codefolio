import { DummyEditor } from '@/components/client/portfolio/DummyEditor';
import { Skill } from '@/components/portfolio/Skill';
import { TotalExperienceYears } from '@/constants/common';
import { Skills } from '@/data/skills/skills';
import {
  Skill as SkillType,
  SkillCategory,
  SkillMetadata,
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
  const skillsByCategory = Skills.filter((skill) =>
    skill.category?.includes(category as SkillCategory),
  );

  const getSkillMetadata = (
    categorizedSkills: SkillType[],
  ): SkillMetadata[] => {
    const total = categorizedSkills.length;
    const highExperienced = categorizedSkills
      .filter((skill) => {
        if (skill.usingSince) {
          const skillDuration = getDuration(skill.usingSince);
          console.log(
            `Skill ${skill.name} experience: ${JSON.stringify(skillDuration)}`,
          );
          if (skillDuration.years >= TotalExperienceYears.years) {
            return skill;
          }
        }
      })
      .map((filteredSkill) => filteredSkill.name);
    const midExperienced = ['nodejs', 'express', 'python'];
    const initialExperienced = ['nextjs', 'zustand', 'motion'];
    const aa = [
      {
        counts: {
          total: total,
        },
        experience: {
          high: highExperienced,
          mid: midExperienced,
          initial: initialExperienced,
        },
      },
    ];

    console.log('AAAAAAA ==> ', aa);
    return aa;
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
                />
              </div>
            ),
        )}
      </div>

      <div className="md:mx-20">
        <DummyEditor<SkillMetadata> data={getSkillMetadata(skillsByCategory)} />
      </div>
    </section>
  );
}
