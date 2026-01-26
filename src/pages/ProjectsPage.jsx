import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </div>
      </section>
      <ProjectsSection />
      <Footer />
    </div>
  );
}
