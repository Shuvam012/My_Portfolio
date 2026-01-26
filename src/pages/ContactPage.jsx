import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div className="w-full">
            <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl mb-4">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        I'm always open to new opportunities and collaborations
                    </p>
                </div>
            </section>
            <ContactSection />
            <Footer />
        </div>
    );
}
