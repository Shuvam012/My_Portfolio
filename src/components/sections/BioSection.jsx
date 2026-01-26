import { GraduationCap, Code, Lightbulb, Trophy } from "lucide-react";

export default function BioSection() {
    const highlights = [
        {
            icon: GraduationCap,
            label: "Education",
            value: "MCA",
            description: "2022 – 2024"
        },
        {
            icon: Code,
            label: "Projects",
            value: "10+",
            description: "Personal & Academic"
        },
        {
            icon: Lightbulb,
            label: "Tech Stack",
            value: "MERN",
            description: "MongoDB • Express • React • Node"
        },
        {
            icon: Trophy,
            label: "Learning",
            value: "Ongoing",
            description: "Backend & DSA"
        },
    ];

    return (
        <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-12 items-start">

                    {/* About Content */}
                    <div className="md:col-span-3">
                        <h2 className="text-4xl mb-6">About Me</h2>

                        <div className="space-y-4 text-slate-600 text-lg">
                            <p>
                                👋 Hello! I’m an <strong>MCA graduate </strong> with a strong interest in
                                building modern, responsive, and user-friendly web applications.
                            </p>

                            {/* <p>
                💻 I specialize in the <strong>MERN stack</strong> and enjoy working on both frontend
                and backend development. My primary focus is on <strong>React.js</strong>,
                creating clean UI and well-structured components.
              </p> */}
                            <p>
                                💻 I specialize in the <strong>MERN stack</strong>, building full-stack web
                                applications using MongoDB, Express.js, React, and Node.js with a strong
                                focus on clean code and scalable architecture.
                            </p>


                            <p>
                                🛠️ I have built multiple personal and academic projects that helped me understand
                                real-world application flow, API integration, state management, and database usage.
                                I prefer writing clean, maintainable code and following best practices.
                            </p>

                            <p>
                                🚀 Currently, I am strengthening my <strong>backend skills and DSA</strong> and actively
                                looking for an entry-level developer role where I can learn, grow, and contribute to
                                meaningful projects.
                            </p>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg mb-3">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-2xl mb-1">{item.value}</div>
                                    <div className="text-sm text-slate-600 mb-1">{item.label}</div>
                                    <div className="text-xs text-slate-500">{item.description}</div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
