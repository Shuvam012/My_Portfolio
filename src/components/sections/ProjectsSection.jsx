
// import { Github, Calendar } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ImageWithFallback } from "@/components/ImageWithFallback";

// export default function ProjectsSection() {
//     const projects = [
//         {
//             id: 1,
//             title: "Muzuly – Real-Time Music Platform",
//             description:
//                 "A real-time music streaming platform where users can listen to music together, interact live, and manage personalized playlists.",
//             category: "Full Stack",
//             date: "Jun 2025",
//             technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
//             image:
//                 "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1080&q=80",
//             highlights: [
//                 "Real-time interaction using Socket.io",
//                 "Admin control for music & album uploads",
//                 "Playlist and library management",
//                 "Responsive and optimized UI",
//             ],
//         },
//         {
//             id: 2,
//             title: "NoteNest – Note-Taking Web App",
//             description:
//                 "A feature-rich note-taking web application that allows users to create, edit, share, and manage notes efficiently.",
//             category: "Frontend",
//             date: "Apr 2025",
//             technologies: ["React", "Redux", "Tailwind CSS"],
//             image:
//                 "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1080&q=80",
//             highlights: [
//                 "CRUD operations for notes",
//                 "Redux-based global state management",
//                 "Duplicate note title validation",
//                 "Performance optimized UI",
//             ],
//         },
//         {
//             id: 3,
//             title: "Quiz App",
//             description:
//                 "An interactive quiz application with role-based authentication and secure REST API integration.",
//             category: "Full Stack",
//             date: "Mar 2024",
//             technologies: ["React", "Spring Boot", "REST APIs"],
//             image:
//                 "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=1080&q=80",
//             highlights: [
//                 "Role-based authentication",
//                 "Server-side validation",
//                 "RESTful API architecture",
//                 "Optimized backend performance",
//             ],
//         },
//         {
//             id: 4,
//             title: "PetNest – Pet E-Commerce Platform",
//             description:
//                 "A full-stack e-commerce platform for pet products, currently under development, focusing on backend architecture and scalability.",
//             category: "Full Stack (In Progress)",
//             date: "Present",
//             technologies: ["Node.js", "Express", "MongoDB", "React"],
//             image:
//                 "https://unsplash.com/photos/a-dog-and-a-cat-laying-in-the-grass-ouo1hbizWwo",
//             highlights: [
//                 "Backend APIs for products & users",
//                 "MongoDB schema design",
//                 "Cart & order flow planning",
//                 "Scalable project structure",
//             ],
//         },
//     ];

//     return (
//         <section className="w-full py-20 px-6 bg-white">
//             <div className="max-w-6xl mx-auto">
//                 <div className="grid md:grid-cols-2 gap-8">
//                     {projects.map((project) => (
//                         <Card
//                             key={project.id}
//                             className="group overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300"
//                         >
//                             <div className="relative h-48 overflow-hidden bg-slate-100">
//                                 <ImageWithFallback
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>

//                             <CardContent className="p-6">
//                                 <div className="flex items-center justify-between mb-3">
//                                     <Badge variant="secondary" className="bg-blue-100 text-blue-700">
//                                         {project.category}
//                                     </Badge>
//                                     <span className="flex items-center text-sm text-slate-500 gap-1">
//                                         <Calendar className="w-3 h-3" />
//                                         {project.date}
//                                     </span>
//                                 </div>

//                                 <h3 className="text-2xl mb-3">{project.title}</h3>

//                                 <p className="text-slate-600 mb-4">{project.description}</p>

//                                 <div className="mb-4">
//                                     <h4 className="text-sm text-slate-500 mb-2">Key Features:</h4>
//                                     <ul className="space-y-1">
//                                         {project.highlights.map((highlight, index) => (
//                                             <li
//                                                 key={index}
//                                                 className="text-sm text-slate-600 flex items-start gap-2"
//                                             >
//                                                 <span className="text-blue-600 mt-1">•</span>
//                                                 {highlight}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2">
//                                     {project.technologies.map((tech) => (
//                                         <span
//                                             key={tech}
//                                             className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
//                                         >
//                                             {tech}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>

//                 <div className="text-center mt-12">
//                     <Button
//                         variant="outline"
//                         size="lg"
//                         className="gap-2"
//                         onClick={() => window.open("https://github.com/Shuvam012", "_blank")}
//                     >
//                         <Github className="w-5 h-5" />
//                         View More on GitHub
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// }





import { Github, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";

import petNest from "../../../public/Assest/petNest.png";
import codeZen from "../../../public/Assest/codeZen.png";
import intervIQa from "../../../public/Assest/intervIQa.png";

export default function ProjectsSection() {
    // const projects = [

    //     {
    //         id: 1,
    //         title: "PetNest – E-Commerce",
    //         description: "Scalable pet-care marketplace focusing on optimized database schemas and heavy traffic handling.",
    //         category: "Full Stack",
    //         date: "Present",
    //         technologies: ["React", "Tailwind CSS","Node.js", "Express", "MongoDB", ],
    //         // image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1080&q=80",
    //         image: petNest,
    //         highlights: ["Microservices architecture", "Advanced Search/Filter", "Stripe Integration"],
    //         link: "https://pet-nest-rosy.vercel.app/",
    //         github: "https://github.com/Shuvam012"
    //     },
    //       {
    //         id: 2,
    //         title: "CodeZen - Online Quiz Platform for Developers",
    //         description: "Role-based educational platform with secure REST API integration and automated grading.",
    //         category: "Full Stack",
    //         date: "Mar 2024",
    //         technologies: ["React", "telwind css", "node.js", "express", "mongoDB", "JWT"],
    //         // image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=1080&q=80",
    //         image: codeZen,
    //         highlights: ["JWT Authentication", "Server-side validation", "Interactive analytics"],
    //         link: "#",
    //         github: "https://github.com/Shuvam012"
    //     },



    //     {
    //         id: 3,
    //         title: "NoteNest – Task Manager",
    //         description: "High-performance note-taking app with Redux state persistence and real-time validation.",
    //         category: "Frontend",
    //         date: "Apr 2025",
    //         technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    //         image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1080&q=80",
    //         highlights: ["Global state management", "Duplicate prevention", "Framer Motion animations"],
    //         link: "#",
    //         github: "https://github.com/Shuvam012"
    //     },
      

    //     {
    //         id: 4,
    //         title: "Muzuly – Real-Time Music",
    //         description: "A collaborative streaming platform where users listen together and interact live using WebSockets.",
    //         category: "Full Stack",
    //         date: "Jun 2025",
    //         technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    //         image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1080&q=80",
    //         highlights: ["Real-time synchronization", "Admin dashboard", "Custom playlist engine"],
    //         link: "#",
    //         github: "https://github.com/Shuvam012"
    //     }       



    // ];



    const projects = [
        {
  id: 1,
  title: "IntervIQa – AI-Powered  Interview Platform",
  description:
    "An AI-driven mock interview platform that simulates real technical interviews using LLMs, providing role-based questions, answer evaluation, and detailed performance insights.",
  category: "Full Stack / AI",
  date: "Feb 2026",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "LLMs (Groq, Gemini)",
    "JWT",
    "Google OAuth"
  ],
  image: intervIQa,
  highlights: [
    "Role & experience-based AI-generated interview questions",
    "Timed live interview flow with automated answer evaluation",
    "RAG-based weakness tracking and interview performance reports",
    "Admin dashboard for managing skills, difficulty, and AI prompts"
  ],
  link: "https://interviqa-ai.vercel.app/",
  github: "https://github.com/Shuvam012"
},
  {
    id: 2,
    title: "PetNest – E-Commerce Platform",
    description:
      "A full-stack pet-care e-commerce platform focused on performance, clean backend architecture, and scalable data handling.",
    category: "Full Stack",
    date: "Jan 2026",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    image: petNest,
    highlights: [
       "Role-based authentication (User/Admin)",
  "Advanced product search, filter & sorting",
  "Secure REST API with protected routes"
    ],
    link: "https://pet-nest-rosy.vercel.app/",
    github: "https://github.com/Shuvam012"
  },

  {
    id: 3,
    title: "CodeZen – Online Quiz Platform for Developers",
    description:
      "A developer-focused quiz platform with secure authentication, role-based access, and dynamic quiz management.",
    category: "Full Stack",
    date: "Mar 2024",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    image: codeZen,
    highlights: [
      "JWT-based authentication",
      "Admin dashboard for quiz management",
      "Automated quiz evaluation"
    ],
    link: "#",
    github: "https://github.com/Shuvam012"
  },

  {
    id: 4,
    title: "NoteNest – Note Management App",
    description:
      "A responsive note-taking application with efficient state management and duplicate prevention logic.",
    category: "Frontend",
    date: "Apr 2025",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS"
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1080&q=80",
    highlights: [
      "Global state management using Redux",
      "Duplicate note prevention",
      "Smooth UI animations with Framer Motion"
    ],
    link: "#",
    github: "https://github.com/Shuvam012"
  },

//   {
//     id: 4,
//     title: "Muzuly – Real-Time Music Streaming App",
//     description:
//       "A real-time collaborative music streaming application enabling users to listen together and interact live.",
//     category: "Full Stack",
//     date: "Jun 2025",
//     technologies: [
//       "React",
//       "Node.js",
//       "Socket.io",
//       "MongoDB"
//     ],
//     image:
//       "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1080&q=80",
//     highlights: [
//       "Real-time song synchronization",
//       "Live user interaction using WebSockets",
//       "Custom playlist management"
//     ],
//     link: "#",
//     github: "https://github.com/Shuvam012"
//   }

];


    return (
        <section className="w-full py-24 px-6 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        A selection of my recent work, ranging from real-time applications to scalable e-commerce backends.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group flex flex-col overflow-hidden border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button variant="secondary" size="sm" className="gap-2" onClick={() => window.open(project.github)}>
                                        <Github className="w-4 h-4" /> Code
                                    </Button>
                                    <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700" onClick={() => window.open(project.link)}>
                                        <ExternalLink className="w-4 h-4" /> Demo
                                    </Button>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-white/90 backdrop-blur text-slate-900 hover:bg-white shadow-sm border-none">
                                        {project.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardContent className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{project.title}</h3>
                                    <span className="flex items-center text-xs font-medium text-slate-400 gap-1 bg-slate-100 px-2 py-1 rounded">
                                        <Calendar className="w-3 h-3" /> {project.date}
                                    </span>
                                </div>

                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-3 mb-8 flex-1">
                                    {project.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        variant="ghost"
                        className="text-slate-600 hover:text-blue-600 gap-2 font-semibold"
                        onClick={() => window.open("https://github.com/Shuvam012", "_blank")}
                    >
                        See more archives on GitHub <ExternalLink className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}