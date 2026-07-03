import { Link } from "react-router-dom";
import coverImage from "../assets/images/coverImage.jpeg"; // Adjust the path as necessary

export default function Home() {
  return (
    <section className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* Left Intro Column */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h4 className="text-cyan-400 tracking-wider text-sm font-semibold uppercase">
            Welcome to my space
          </h4>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
            Hi, I am a{" "}
            <span className="text-cyan-400">Full Stack Web Developer</span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto md:mx-0">
            Specializing in creating modern web architectures using the MERN
            stack, robust backend structures, and high-performance network
            tracking tools.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => alert("Resume download feature linked here.")}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-md transition shadow-md"
            >
              Download Resume
            </button>
            <Link
              to="/contact"
              className="border border-slate-600 hover:border-slate-400 text-white px-6 py-3 rounded-md transition"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 pt-4 text-2xl text-slate-400">
            <a
              href="https://github.com/ramen72"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ramen-biswas-329280316"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/RamenBi68387575"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Twitter
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Facebook
            </a> */}
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 flex justify-center">
          {/* <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-2xl"> */}
          <div className="w-64 h-96 md:w-80 md:h-112.5 rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-2xl">
            <img
              // src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
              src={coverImage}
              alt="Professional Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
