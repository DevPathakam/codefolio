import { NpmPill } from '@/components/portfolio/NpmPill';
import { Projects } from '@/data/projects/projects';
import { Icon } from '@iconify/react';
interface ProjectPageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project } = await params;
  const selectedProject = Projects.find((p) => p.alias === project);

  if (!selectedProject) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center h-screen text-red-600 ">
        <p>
          <Icon
            icon="streamline-freehand:server-error-404-not-found"
            className="text-9xl"
          />
        </p>
        <p className="text-6xl">project not found!</p>
      </div>
    );
  }

  return (
    <section about={`project-${project}`}>
      <article className="p-4 text-amber-50 font-jetbrains-mono">
        {/* Heading */}
        <div className="text-3xl font-bold border-b border-brand-border pb-2 flex justify-between font-sans">
          <p className="py-1">{selectedProject.name}</p>
          {selectedProject.isPersonal && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-primary-deep-dark border border-brand-border text-white text-xs font-medium h-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5a60]" />
              Personal
            </span>
          )}
        </div>

        {/* Duration and Company */}
        <div className="flex flex-col md:flex-row gap-3 my-5">
          {selectedProject.company && (
            <NpmPill
              label="for"
              value={selectedProject.company.name}
              valueClasses="bg-cyan-700"
            />
          )}
          <NpmPill
            label="duration"
            value={selectedProject.duration}
            valueClasses="bg-green-700 "
          />
        </div>

        <div className="text-sm">
          {/* Highlight */}
          {selectedProject.highlight && (
            <div className="my-5 p-4 border border-brand-border border-t-2 border-t-brand-secondary shadow-2xl rounded text-brand-secondary">
              <p>{selectedProject.highlight}</p>
            </div>
          )}

          {/* Tech stack */}
          <div className="border border-brand-border rounded-xl flex flex-wrap gap-4 md:gap-9 my-5 p-3 text-3xl w-fit shadow-2xl bg-brand-primary-deep-dark">
            {selectedProject.techStack.length > 0 &&
              selectedProject.techStack.map((tech, idx) => (
                <p
                  key={`project-tech-${idx}`}
                  className="flex flex-col items-center"
                >
                  {tech.icon && (
                    <span>
                      <Icon icon={tech.icon} />
                    </span>
                  )}
                </p>
              ))}
          </div>

          {/* Project Points */}
          <div className="px-5 my-5 font-jetbrains-mono">
            <ul className="list-disc">
              {selectedProject.points.length > 0 &&
                selectedProject.points.map((point, idx) => (
                  <li key={`selected-project-point-${idx}`} className="my-2">
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
