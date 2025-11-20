import React, { useEffect, useState } from "react";
import { ExternalLink, Code2, Smartphone, Globe } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

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

  const projects = [
    {
      title: "Enterprise SaaS Platform",
      category: "web",
      description:
        "A comprehensive B2B SaaS solution with multi-tenancy, role-based access, and advanced analytics dashboard",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "E-Commerce Mobile App",
      category: "mobile",
      description:
        "Cross-platform shopping app with real-time inventory, payment gateway integration, and order tracking",
      tech: ["React Native", "Firebase", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      title: "Healthcare Management System",
      category: "web",
      description:
        "Complete patient management system with appointment scheduling, medical records, and telemedicine features",
      tech: ["Next.js", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      description:
        "iOS and Android fitness app with workout plans, nutrition tracking, and social features",
      tech: ["Flutter", "Firebase", "REST API"],
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    },
    {
      title: "Real Estate Platform",
      category: "web",
      description:
        "Property listing and management platform with virtual tours, search filters, and agent dashboard",
      tech: ["React", "Node.js", "MongoDB", "Maps API"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    },
    {
      title: "Financial Dashboard",
      category: "web",
      description:
        "Interactive financial analytics dashboard with real-time data visualization and reporting",
      tech: ["Next.js", "D3.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E94560] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 mb-6">
            <span className="text-sm text-[#E94560] font-medium">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Portfolio & <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses
            transform their digital presence
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "All Projects", value: "all", icon: Code2 },
              { label: "Web Apps", value: "web", icon: Globe },
              { label: "Mobile Apps", value: "mobile", icon: Smartphone },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === item.value
                    ? "bg-gradient-to-r from-[#E94560] to-[#8B1538] text-white"
                    : "glass-card border border-white/10 text-gray-300 hover:border-[#E94560]/30"
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-[#E94560]/30 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#E94560] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="flex items-center text-[#E94560] hover:text-[#8B1538] font-medium transition-colors">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
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
              Want to See Your Project Here?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Let's collaborate and create something extraordinary together
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg btn-primary text-white font-medium"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
