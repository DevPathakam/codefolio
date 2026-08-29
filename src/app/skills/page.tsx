import { DummyEditor } from "@/components/client/portfolio/DummyEditor";
import { Skills, SkillSchema } from "@/data/skills/skills";
import { Skill } from "@/types/portfolio";

export default async function SkillsPage() {
  return (
    <section about="skills">
      <DummyEditor<Skill>
        data={Skills}
        schema={SkillSchema as unknown as unknown[]}
      />
    </section>
  );
}
