import { Skill } from '@/components/portfolio/Skill';
import { Skills } from '@/data/skills/skills';

export default async function SkillsPage() {
  return (
    <section about="skills">
      <div className="p-5 flex gap-2 flex-wrap">
        {Skills.map(
          (skill, idx) =>
            skill.visible && (
              <div
                key={`skill-card-${idx}`}
                className="my-5 p-3 border-2 border-brand-border rounded-xl bg-brand-primary-deep-dark shadow-2xl w-full md:w-120 flex "
              >
                <Skill
                  category={skill.category}
                  name={skill.name}
                  icon={skill.icon}
                  key={`skill-${idx}`}
                  tags={skill.tags}
                  usingSince={skill.usingSince}
                  lastUsed={skill.lastUsed}
                />
              </div>
            ),
        )}
      </div>
    </section>
  );
}
