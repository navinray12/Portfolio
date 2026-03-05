const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "TailwindCSS", icon: "💨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "ExpressJS", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🗄️" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔥" },
  { name: "Firebase", icon: "⚡" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "C++", icon: "💻" },
  { name: "C", icon: "📘" }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-lg">{skill.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;