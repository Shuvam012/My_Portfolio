import BioSection from '@/components/sections/BioSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Footer from '@/components/Footer';
import { Code, Zap, Users, Target } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Expertise in React, Node.js, and modern web technologies'
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Passionate about solving complex challenges with clean code'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to development and communication'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Dedicated to continuous learning and growth'
    },
  ];

  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me
          </p>
        </div>
      </section>

      <BioSection />

      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose Me?</h2>
            <p className="text-xl text-slate-600">Core strengths that define my work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SkillsSection />
      <Footer />
    </div>
  );
}
