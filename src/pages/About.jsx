export default function About() {
  return (
    <section className="bg-slate-900 text-slate-300 min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="h-1 w-16 bg-cyan-500 mx-auto mt-2"></div>
        </div>

        <div className="space-y-6 leading-relaxed">
          <p>
            My programming journey started with a deep curiosity about how
            things work behind the scenes on the internet. What began as
            experimentation with basic HTML/CSS quickly transformed into a
            passion for designing scalable modern architectures using Node.js,
            React, and MongoDB.
          </p>
          <p>
            I thrive in crafting elegant solutions to complicated problems. I
            genuinely enjoy structuring dynamic database operations, configuring
            secure network firewalls, and optimization of state-management
            patterns in UI interfaces.
          </p>
          <p>
            Outside of programming, you will often find me exploring network
            engineering configurations, playing badminton, or diving into tech
            documentation. Balancing my life between active development and
            personal learning keeps me energized.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Educational Qualification
            </h3>
            <div className="border-l-2 border-cyan-500 pl-4 space-y-3">
              <div>
                <h4 className="text-slate-200 font-semibold">
                  B.Sc. in Computer Science & Engineering
                </h4>
                <p className="text-sm text-slate-500">Graduation Year: 2025</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            <div className="border-l-2 border-cyan-500 pl-4 space-y-3">
              <div>
                <h4 className="text-slate-200 font-semibold">
                  Junior Web Developer
                </h4>
                <p className="text-sm text-slate-400">Tech Solutions Ltd.</p>
                <p className="text-xs text-slate-500">2025 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
