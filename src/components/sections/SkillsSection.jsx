// export default function SkillsSection() {
//   const skillCategories = [
//     {
//       category: "Frontend",
//       color: "from-blue-500 to-cyan-500",
//       skills: [
//         { name: "React.js", level: 85 },
//         { name: "JavaScript (ES6+)", level: 80 },
//         // { name: "TypeScript", level: 70 },
//         { name: "HTML5 & CSS3", level: 90 },
//         { name: "Tailwind CSS", level: 85 },
//         { name: "Redux", level: 75 },
//       ],
//     },
//     {
//       category: "Backend",
//       color: "from-green-500 to-emerald-500",
//       skills: [
//         { name: "Node.js", level: 80 },
//         { name: "Express.js", level: 85 },
//         { name: "MongoDB", level: 75 },
//         // { name: "PostgreSQL", level: 70 },
//         { name: "REST APIs", level: 85 },
//         { name: "Authentication (JWT)", level: 80 },
//       ],
//     },
//     {
//       category: "Tools & Others",
//       color: "from-purple-500 to-pink-500",
//       skills: [
//         { name: "Git & GitHub", level: 85 },
//         { name: "VS Code", level: 90 },
//         { name: "Postman", level: 80 },
//         // { name: "Docker (basics)", level: 60 },
//         // { name: "AWS (basics)", level: 55 },
//         { name: "Figma", level: 65 },
//       ],
//     },
//   ];

//   return (
//     <section className="w-full py-20 px-6 bg-slate-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl mb-4">Technical Skills</h2>
//           <p className="text-xl text-slate-600">
//             Technologies and tools I work with
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {skillCategories.map((category) => (
//             <div
//               key={category.category}
//               className="bg-white rounded-xl p-6 shadow-lg"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}></div>
//                 <h3 className="text-2xl">{category.category}</h3>
//               </div>
//               <div className="space-y-4">
//                 {category.skills.map((skill) => (
//                   <div key={skill.name}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-slate-700">{skill.name}</span>
//                       <span className="text-slate-500 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
//                       <div
//                         className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { Terminal, Database, Wrench, Code } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      category: "Backend",
      icon: <Terminal className="w-5 h-5 text-green-400" />,
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "Authentication (JWT)", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 65 },
      ],
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my tech stack and proficiency in modern web development technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl`}></div>

              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{skill.level}%</span>
                    </div>
                    
                    <div className="relative w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      {/* Animated Progress Bar */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-in-out`}
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-[-20deg]"></div>
                      </div>
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

// Note: Add this to your tailwind.config.js for the shimmer effect
// keyframes: { shimmer: { '100%': { transform: 'translateX(200%)' } } }