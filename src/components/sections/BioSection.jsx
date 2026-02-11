// import { GraduationCap, Code, Lightbulb, Trophy } from "lucide-react";

// export default function BioSection() {
//     const highlights = [
//         {
//             icon: GraduationCap,
//             label: "Education",
//             value: "MCA",
//             description: "2022 – 2024"
//         },
//         {
//             icon: Code,
//             label: "Projects",
//             value: "10+",
//             description: "Personal & Academic"
//         },
//         {
//             icon: Lightbulb,
//             label: "Tech Stack",
//             value: "MERN",
//             description: "MongoDB • Express • React • Node"
//         },
//         {
//             icon: Trophy,
//             label: "Learning",
//             value: "Ongoing",
//             description: "Backend & DSA"
//         },
//     ];

//     return (
//         <section className="w-full py-20 px-6 bg-white">
//             <div className="max-w-6xl mx-auto">
//                 <div className="grid md:grid-cols-5 gap-12 items-start">

//                     {/* About Content */}
//                     <div className="md:col-span-3">
//                         <h2 className="text-4xl mb-6">About Me</h2>

//                         <div className="space-y-4 text-slate-600 text-lg">
//                             <p>
//                                 👋 Hello! I’m an <strong>MCA graduate </strong> with a strong interest in
//                                 building modern, responsive, and user-friendly web applications.
//                             </p>

//                             {/* <p>
//                 💻 I specialize in the <strong>MERN stack</strong> and enjoy working on both frontend
//                 and backend development. My primary focus is on <strong>React.js</strong>,
//                 creating clean UI and well-structured components.
//               </p> */}
//                             <p>
//                                 💻 I specialize in the <strong>MERN stack</strong>, building full-stack web
//                                 applications using MongoDB, Express.js, React, and Node.js with a strong
//                                 focus on clean code and scalable architecture.
//                             </p>


//                             <p>
//                                 🛠️ I have built multiple personal and academic projects that helped me understand
//                                 real-world application flow, API integration, state management, and database usage.
//                                 I prefer writing clean, maintainable code and following best practices.
//                             </p>

//                             <p>
//                                 🚀 Currently, I am strengthening my <strong>backend skills and DSA</strong> and actively
//                                 looking for an entry-level developer role where I can learn, grow, and contribute to
//                                 meaningful projects.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Highlights */}
//                     <div className="md:col-span-2 grid grid-cols-2 gap-4">
//                         {highlights.map((item) => {
//                             const Icon = item.icon;
//                             return (
//                                 <div
//                                     key={item.label}
//                                     className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100"
//                                 >
//                                     <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg mb-3">
//                                         <Icon className="w-6 h-6" />
//                                     </div>
//                                     <div className="text-2xl mb-1">{item.value}</div>
//                                     <div className="text-sm text-slate-600 mb-1">{item.label}</div>
//                                     <div className="text-xs text-slate-500">{item.description}</div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }





import { GraduationCap, Code, Lightbulb, Trophy, ArrowRight } from "lucide-react";

export default function BioSection() {
    const highlights = [
        {
            icon: GraduationCap,
            label: "Education",
            value: "MCA",
            description: "2020 - 2024",
            accent: "blue"
        },
        {
            icon: Code,
            label: "Projects",
            value: "10+",
            description: "Full-stack Builds",
            accent: "purple"
        },
        {
            icon: Lightbulb,
            label: "Tech Stack",
            value: "MERN",
            description: "Modern Web Stack",
            accent: "indigo"
        },
        {
            icon: Trophy,
            label: "Focus",
            value: "Ongoing",
            description: "Backend & DSA",
            accent: "emerald"
        },
    ];

    return (
        <section className="relative w-full py-24 px-6 bg-white overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-6 translate-x-20"></div>

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-16 items-center">

                    {/* Left: About Content */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm uppercase tracking-[0.2em] text-blue-600 font-bold">Introduction</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">purpose and precision.</span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
                            <p>
                                👋 Hello! I’m <span className="text-slate-900 font-semibold">Shuvam Biswal</span>, an MCA graduate driven by the challenge of building scalable, user-centric web applications.
                            </p>

                            <p>
                                My journey into development is fueled by a passion for the <strong>MERN stack</strong>. I specialize in bridging the gap between elegant frontend interfaces and robust backend architectures, ensuring every line of code adds value to the end-user.
                            </p>

                            <p>
                                Beyond just building apps, I am committed to <strong>clean code</strong> and continuous learning. Whether it's mastering complex Data Structures or optimizing API performance, I thrive on solving technical puzzles.
                            </p>
                        </div>

                        {/* <div className="flex items-center gap-2 text-blue-600 font-semibold group cursor-pointer hover:gap-4 transition-all w-fit">
                            <span>More about my journey</span>
                            <ArrowRight className="w-5 h-5" />
                        </div> */}
                    </div>

                    {/* Right: Modern Highlight Cards */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="group relative p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                                >
                                    <div className="flex flex-col h-full justify-between">
                                        <div className="mb-4">
                                            <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 rounded-xl transition-colors">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900 leading-none mb-1">
                                                {item.value}
                                            </div>
                                            <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                                {item.label}
                                            </div>
                                            <div className="text-xs text-slate-500 leading-snug">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom decorative bar */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-blue-600 rounded-b-2xl transition-all duration-300"></div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}