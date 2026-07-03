import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="h-1 w-16 bg-cyan-500 mx-auto mt-2"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
