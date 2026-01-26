

import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Shuvam Biswal
                            </span>
                        </h3>
                        <p className="text-slate-400 mb-4">
                            Fullstack Developer passionate about building modern web applications
                            and solving real-world problems through code.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Shuvam012"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shuvam-biswal-43ab99215/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:shuvambiswal123@gmail.com"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-white font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 text-white font-semibold">Resources</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="https://drive.google.com/file/d/1Ww-Lfo8x-0UeGk05cjpzauEjM-KpC7v9/view" className="hover:text-white transition-colors">Resume</a></li>
                            <li><a href="https://github.com/Shuvam012" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                            {/* <li><a href="#" className="hover:text-white transition-colors">LeetCode</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certificates</a></li> */}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                    {/* <p className="flex items-center justify-center gap-2">
                        Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
                    </p> */}
                    <p className="mt-2 text-sm">
                        © 2026 Shuvam Biswal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
