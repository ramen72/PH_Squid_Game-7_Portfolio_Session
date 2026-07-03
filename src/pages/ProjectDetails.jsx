import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link
          to="/projects"
          className="bg-cyan-600 text-white px-4 py-2 rounded-md"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-slate-800/40 border border-slate-800 rounded-xl p-6 md:p-8 space-y-8">
        <Link
          to="/projects"
          className="text-cyan-400 hover:underline text-sm inline-block"
        >
          &larr; Back to Projects
        </Link>

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-slate-800 text-cyan-400 text-xs px-3 py-1 rounded-full border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-slate-200">
            Description
          </h3>
          <p className="text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-amber-400 mb-2">Challenges Faced</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>
          <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-emerald-400 mb-2">
              Future Scope / Improvements
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.improvements}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-2 rounded-md transition"
          >
            GitHub Repo (Client)
          </a>
        </div>
      </div>
    </section>
  );
}
