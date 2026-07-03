export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "Tailwind CSS v4", level: "95%" },
        { name: "Redux Toolkit", level: "80%" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Express.js", level: "85%" },
        { name: "MongoDB / Mongoose", level: "85%" },
        { name: "MikroTik Routing & Networking", level: "70%" },
      ],
    },
  ];

  return (
    <section className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <div className="h-1 w-16 bg-cyan-500 mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-800"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm text-slate-300 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan-500 h-full rounded-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
