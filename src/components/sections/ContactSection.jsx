
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "shuvambiswal123@gmail.com",
            link: "mailto:shuvambiswal123@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8112181269",
            link: "tel:+918112181269", 
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Bhubaneswar, India",
            link: null,
        },
    ];

// Initialize EmailJS (replace with your public key from EmailJS dashboard)
    const initializeEmailJS = () => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Get this from https://dashboard.emailjs.com/
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        // Initialize EmailJS on first submit
        initializeEmailJS();

        const templateParams = {
            to_email: import.meta.env.VITE_CONTACT_RECEIVER_EMAIL,
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID
                  , // Replace with your EmailJS service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
                templateParams
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSubmitMessage(
                        "Message sent successfully! I'll get back to you soon."
                    );
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    setTimeout(() => setSubmitMessage(""), 5000);
                },
                (error) => {
                    console.log("FAILED...", error);
                    setSubmitMessage(
                        "Failed to send message. Please try again or contact directly."
                    );
                    setTimeout(() => setSubmitMessage(""), 5000);
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="w-full py-20 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl mb-6">Contact Information</h3>

                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;

                                const content = (
                                    <Card className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                                        <CardContent className="p-6 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-500">{info.label}</div>
                                                <div className="text-lg">{info.value}</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );

                                return info.link ? (
                                    <a
                                        key={info.label}
                                        href={info.link}
                                        aria-label={info.label}
                                        rel="noopener noreferrer"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={info.label}>{content}</div>
                                );
                            })}
                        </div>

                        {/* Why Hire Me */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                            <h4 className="text-xl mb-4">Why hire me?</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-200 mt-1">✓</span>
                                    <span>Quick learner with strong problem-solving skills</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-200 mt-1">✓</span>
                                    <span>Passionate about clean, maintainable code</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-200 mt-1">✓</span>
                                    <span>Good communication & teamwork skills</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-200 mt-1">✓</span>
                                    <span>Eager to learn and grow in a professional environment</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 text-slate-700">
                                    Your Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 text-slate-700">
                                    Your Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm mb-2 text-slate-700">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    placeholder="Job Opportunity"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 text-slate-700">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    rows={6}
                                    placeholder="Tell me about the opportunity..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full gap-2 bg-blue-600 hover:bg-blue-700"
                            >
                                <Send className="w-4 h-4" />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                            {submitMessage && (
                                <p
                                    className={`text-sm text-center ${
                                        submitMessage.includes("successfully")
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {submitMessage}
                                </p>
                            )}

                            <p className="text-sm text-slate-500 text-center">
                                I&apos;ll get back to you within 24 hours
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

