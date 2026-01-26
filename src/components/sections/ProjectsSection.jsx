
import { Github, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "Muzuly – Real-Time Music Platform",
            description:
                "A real-time music streaming platform where users can listen to music together, interact live, and manage personalized playlists.",
            category: "Full Stack",
            date: "Jun 2025",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
            image:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1080&q=80",
            highlights: [
                "Real-time interaction using Socket.io",
                "Admin control for music & album uploads",
                "Playlist and library management",
                "Responsive and optimized UI",
            ],
        },
        {
            id: 2,
            title: "NoteNest – Note-Taking Web App",
            description:
                "A feature-rich note-taking web application that allows users to create, edit, share, and manage notes efficiently.",
            category: "Frontend",
            date: "Apr 2025",
            technologies: ["React", "Redux", "Tailwind CSS"],
            image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1080&q=80",
            highlights: [
                "CRUD operations for notes",
                "Redux-based global state management",
                "Duplicate note title validation",
                "Performance optimized UI",
            ],
        },
        {
            id: 3,
            title: "Quiz App",
            description:
                "An interactive quiz application with role-based authentication and secure REST API integration.",
            category: "Full Stack",
            date: "Mar 2024",
            technologies: ["React", "Spring Boot", "REST APIs"],
            image:
                "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=1080&q=80",
            highlights: [
                "Role-based authentication",
                "Server-side validation",
                "RESTful API architecture",
                "Optimized backend performance",
            ],
        },
        {
            id: 4,
            title: "PetNest – Pet E-Commerce Platform",
            description:
                "A full-stack e-commerce platform for pet products, currently under development, focusing on backend architecture and scalability.",
            category: "Full Stack (In Progress)",
            date: "Present",
            technologies: ["Node.js", "Express", "MongoDB", "React"],
            image:
                "https://unsplash.com/photos/a-dog-and-a-cat-laying-in-the-grass-ouo1hbizWwo",
            highlights: [
                "Backend APIs for products & users",
                "MongoDB schema design",
                "Cart & order flow planning",
                "Scalable project structure",
            ],
        },
    ];

    return (
        <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                        {project.category}
                                    </Badge>
                                    <span className="flex items-center text-sm text-slate-500 gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {project.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl mb-3">{project.title}</h3>

                                <p className="text-slate-600 mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm text-slate-500 mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.highlights.map((highlight, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-slate-600 flex items-start gap-2"
                                            >
                                                <span className="text-blue-600 mt-1">•</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2"
                        onClick={() => window.open("https://github.com/Shuvam012", "_blank")}
                    >
                        <Github className="w-5 h-5" />
                        View More on GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
}
