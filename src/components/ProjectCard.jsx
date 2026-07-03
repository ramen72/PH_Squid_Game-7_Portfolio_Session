import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 flex flex-col justify-between">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
      </div>
      <div className="p-5 pt-0">
        <Link
          to={`/projects/${project.id}`}
          className="inline-block w-full text-center bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded-md transition"
        >
          View More / Details
        </Link>
      </div>
    </div>
  );
}
