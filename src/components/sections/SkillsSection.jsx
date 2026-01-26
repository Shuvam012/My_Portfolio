export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        // { name: "TypeScript", level: 70 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        // { name: "PostgreSQL", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "Authentication (JWT)", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        // { name: "Docker (basics)", level: 60 },
        // { name: "AWS (basics)", level: 55 },
        { name: "Figma", level: 65 },
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}></div>
                <h3 className="text-2xl">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
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
