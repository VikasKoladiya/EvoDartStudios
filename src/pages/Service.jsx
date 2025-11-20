import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Code2,
  Layers,
  Rocket,
  Palette,
  Database,
  Layout,
  ShoppingCart,
  FileCode,
  Boxes,
  Server,
  Braces,
  Workflow,
  LineChart,
  Cloud,
  MessageSquare,
  Wrench,
  Gamepad2,
  Film,
} from "lucide-react";
import { createPageUrl } from "../utils";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".fade-in-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      desc: "Custom web applications built with modern frameworks and best practices for performance and scalability",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native iOS and Android apps, plus cross-platform solutions for maximum reach and engagement",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "End-to-end development covering frontend, backend, and database architecture",
    },
    {
      icon: Layers,
      title: "SaaS Product Development",
      desc: "Complete SaaS platforms with subscription management, authentication, and multi-tenancy",
    },
    {
      icon: Rocket,
      title: "MVP Development for Startups",
      desc: "Rapid prototyping and MVP development to validate your business idea quickly",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      desc: "User-centered design that creates intuitive and beautiful digital experiences",
    },
    {
      icon: Workflow,
      title: "API Development & Integrations",
      desc: "RESTful APIs and third-party integrations to connect your systems seamlessly",
    },
    {
      icon: Layout,
      title: "Custom Dashboards & Admin Panels",
      desc: "Powerful admin interfaces for data management and business operations",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      desc: "Full-featured online stores with payment processing and inventory management",
    },
    {
      icon: FileCode,
      title: "Landing Page & Portfolio Websites",
      desc: "High-converting landing pages and stunning portfolio sites that showcase your brand",
    },
    {
      icon: Boxes,
      title: "Cross-Platform App Development",
      desc: "Write once, deploy everywhere - efficient development for multiple platforms",
    },
    {
      icon: Server,
      title: "Backend Architecture & Systems Design",
      desc: "Robust, scalable backend systems designed for high performance and reliability",
    },
    {
      icon: Braces,
      title: "Node.js Development",
      desc: "Server-side JavaScript development for fast, scalable network applications",
    },
    {
      icon: Code2,
      title: "React & Next.js Development",
      desc: "Modern React applications with Next.js for optimal performance and SEO",
    },
    {
      icon: Workflow,
      title: "Automation Tools & Scripting",
      desc: "Custom automation solutions to streamline your business processes",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      desc: "Efficient database architecture and query optimization for peak performance",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment & Hosting",
      desc: "Deployment on AWS, Google Cloud, or Azure with CI/CD pipelines",
    },
    {
      icon: MessageSquare,
      title: "Product Strategy & Technical Consulting",
      desc: "Expert guidance on technology stack, architecture, and product roadmap",
    },
    {
      icon: LineChart,
      title: "Performance Optimization",
      desc: "Speed and efficiency improvements for existing applications",
    },
    {
      icon: Wrench,
      title: "Maintenance & Long-Term Support",
      desc: "Ongoing support, updates, and monitoring to keep your systems running smoothly",
    },
    {
      icon: Gamepad2,
      title: "Game Development & Designing",
      desc: "Interactive games and gaming experiences with engaging gameplay mechanics",
    },
    {
      icon: Film,
      title: "Animation & 3D Modeling",
      desc: "Professional 3D modeling, animation, and visual effects for your projects",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E94560] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 mb-6">
            <span className="text-sm text-[#E94560] font-medium">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete <span className="gradient-text">Technology Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we offer comprehensive services to bring
            your digital vision to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 border border-white/10 hover:border-[#E94560]/30 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#E94560] to-[#8B1538] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#E94560] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Don't see exactly what you're looking for? We specialize in custom
              solutions tailored to your unique needs.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-8 py-4 rounded-lg btn-primary text-white font-medium"
            >
              Let's Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
