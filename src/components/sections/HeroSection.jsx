
import { Code2, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-sm">Open to opportunities</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl mb-6">
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Shuvam Biswal
                            </span>
                        </h1>

                        <div className="text-2xl md:text-3xl text-slate-300 mb-6">
                            <span className="text-blue-400">&lt;</span>
                            MERN Stack Developer
                            <span className="text-blue-400"> /&gt;</span>
                        </div>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            MCA Graduate  passionate about building scalable and
                            user-friendly web applications. I enjoy turning ideas into
                            real-world products using React, Node.js, and MongoDB.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button
                                size="lg"
                                className="gap-2 bg-blue-600 hover:bg-blue-700"
                                onClick={() => navigate("/projects")}
                            >
                                <Code2 className="w-4 h-4" />
                                View Projects
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 text-white border-slate-600 hover:bg-slate-800"
                                onClick={() =>
                                    window.open(
                                        "https://drive.google.com/file/d/1Ww-Lfo8x-0UeGk05cjpzauEjM-KpC7v9/view",
                                        "_blank"
                                    )
                                }
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Shuvam012"
                                target="_blank"
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shuvam-biswal-43ab99215/"
                                target="_blank"
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:shuvambiswal123@gmail.com"
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>

                        <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            <pre className="text-sm text-slate-300 overflow-hidden">
                                <code>{`const developer = {
        name: "Shuvam Biswal",
        education: "MCA",
        role: "MERN Stack Developer",
        skills: [
            "React", "JavaScript",
            "Node.js", "Express",
            "MongoDB", "Tailwind CSS"
        ],
        strengths: [
            "Clean Code",
            "Problem Solving",
            "Quick Learner"
        ],
        openToWork: true
        };`}</code>
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
