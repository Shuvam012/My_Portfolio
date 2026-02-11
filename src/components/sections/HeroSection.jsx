
// import { Code2, Github, Linkedin, Mail, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";

// export default function HeroSection() {
//     const navigate = useNavigate();

//     return (
//         <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 flex items-center">
//             <div className="max-w-6xl mx-auto w-full">
//                 <div className="grid md:grid-cols-2 gap-12 items-center">

//                     {/* LEFT */}
//                     <div>
//                         <div className="flex items-center gap-2 mb-6">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <span className="text-green-400 text-sm">Open to opportunities</span>
//                         </div>

//                         <h1 className="text-5xl md:text-6xl mb-6">
//                             Hi, I'm{" "}
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//                                 Shuvam Biswal
//                             </span>
//                         </h1>

//                         <div className="text-2xl md:text-3xl text-slate-300 mb-6">
//                             <span className="text-blue-400">&lt;</span>
//                             MERN Stack Developer
//                             <span className="text-blue-400"> /&gt;</span>
//                         </div>

//                         <p className="text-lg text-slate-400 mb-8 leading-relaxed">
//                             MCA Graduate  passionate about building scalable and
//                             user-friendly web applications. I enjoy turning ideas into
//                             real-world products using React, Node.js, and MongoDB.
//                         </p>

//                         <div className="flex flex-wrap gap-4 mb-8">
//                             <Button
//                                 size="lg"
//                                 className="gap-2 bg-blue-600 hover:bg-blue-700"
//                                 onClick={() => navigate("/projects")}
//                             >
//                                 <Code2 className="w-4 h-4" />
//                                 View Projects
//                             </Button>

//                             <Button
//                                 variant="outline"
//                                 size="lg"
//                                 className="gap-2 text-white border-slate-600 hover:bg-slate-800"
//                                 onClick={() =>
//                                     window.open(
//                                         "https://drive.google.com/file/d/1Ww-Lfo8x-0UeGk05cjpzauEjM-KpC7v9/view",
//                                         "_blank"
//                                     )
//                                 }
//                             >
//                                 <Download className="w-4 h-4" />
//                                 Download Resume
//                             </Button>
//                         </div>

//                         <div className="flex gap-4">
//                             <a
//                                 href="https://github.com/Shuvam012"
//                                 target="_blank"
//                                 className="text-slate-400 hover:text-white transition-colors"
//                             >
//                                 <Github className="w-6 h-6" />
//                             </a>
//                             <a
//                                 href="https://www.linkedin.com/in/shuvam-biswal-43ab99215/"
//                                 target="_blank"
//                                 className="text-slate-400 hover:text-white transition-colors"
//                             >
//                                 <Linkedin className="w-6 h-6" />
//                             </a>
//                             <a
//                                 href="mailto:shuvambiswal123@gmail.com"
//                                 className="text-slate-400 hover:text-white transition-colors"
//                             >
//                                 <Mail className="w-6 h-6" />
//                             </a>
//                         </div>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="relative hidden md:block">
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>

//                         <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
//                             <div className="flex items-center gap-2 mb-4">
//                                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                             </div>

//                             <pre className="text-sm text-slate-300 overflow-hidden">
//                                 <code>{`const developer = {
//         name: "Shuvam Biswal",
//         education: "MCA",
//         role: "MERN Stack Developer",
//         skills: [
//             "React", "JavaScript",
//             "Node.js", "Express",
//             "MongoDB", "Tailwind CSS"
//         ],
//         strengths: [
//             "Clean Code",
//             "Problem Solving",
//             "Quick Learner"
//         ],
//         openToWork: true
//         };`}</code>
//                             </pre>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }






import { Code2, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-screen bg-[#020617] flex items-center justify-center overflow-hidden px-6 py-20">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="max-w-6xl mx-auto w-full z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Available for new projects</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                                Hi, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                                    Shuvam Biswal
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-slate-400 font-mono">
                                &lt;MERN Stack Developer /&gt;
                            </p>
                        </div>

                        <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            MCA Graduate specializing in building scalable full-stack applications. 
                            I bridge the gap between complex backend logic and intuitive frontend experiences.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Button 
                                size="lg" 
                                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
                                onClick={() => navigate("/projects")}
                            >
                                <Code2 className="mr-2 w-5 h-5" /> View Work
                            </Button>
                            
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="h-12 px-8 border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:text-white transition-all"
                                onClick={() => window.open("https://drive.google.com/file/d/1QIxbjP_hqZjrQcCJWCzzdQUAydS7GcdL/view?usp=sharing", "_blank")}
                            >
                                <Download className="mr-2 w-5 h-5" /> Resume
                            </Button>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-6 pt-4">
                            {[
                                { icon: <Github />, href: "https://github.com/Shuvam012" },
                                { icon: <Linkedin />, href: "https://www.linkedin.com/in/shuvam-biswal-43ab99215/" },
                                { icon: <Mail />, href: "mailto:shuvambiswal123@gmail.com" }
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT CONTENT - CODE TERMINAL */}
                    <div className="relative group perspective-1000 hidden lg:block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        
                        <div className="relative bg-[#0f172a]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden transform group-hover:rotate-1 transition-transform duration-500">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <span className="text-xs text-slate-500 font-mono">developer.js</span>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 font-mono text-sm leading-relaxed">
                                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                                <p className="pl-4"><span className="text-slate-300">name:</span> <span className="text-green-400">"Shuvam Biswal"</span>,</p>
                                <p className="pl-4"><span className="text-slate-300">role:</span> <span className="text-green-400">"MERN Developer"</span>,</p>
                                <p className="pl-4"><span className="text-slate-300">skills:</span> [</p>
                                <p className="pl-8 text-amber-300">"React", "Node.js", "MongoDB",</p>
                                <p className="pl-8 text-amber-300">"Express", "JavaScript"</p>
                                <p className="pl-4">],</p>
                                <p className="pl-4 text-slate-300"><span className="text-purple-400">isAvailable</span>: <span className="text-orange-400">true</span>,</p>
                                <p className="pl-4 text-slate-300"><span className="text-purple-400">motive</span>: <span className="text-green-400">"Building OdiaKhata"</span></p>
                                <p>&#125;;</p>
                                
                                <div className="mt-4 border-t border-white/5 pt-4">
                                    <p className="text-slate-500">// Currently exploring scalable system design</p>
                                    <p className="text-blue-400">console<span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span>developer<span className="text-white">.</span>motive<span className="text-white">);</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}