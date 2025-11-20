import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Code,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { createPageUrl } from "../utils";

export default function Home() {
  useEffect(() => {
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

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E94560] rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B1538] rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-white/10">
              <Sparkles className="w-4 h-4 text-[#E94560] mr-2" />
              <span className="text-sm text-gray-300">Founded 2025</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Turning Ideas Into <br />
            <span className="gradient-text">Technology That Performs</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            A high-speed, high-quality tech studio building modern, scalable
            digital products
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to={createPageUrl("Contact")}
              className="px-8 py-4 rounded-lg btn-primary text-white font-medium flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={createPageUrl("Portfolio")}
              className="px-8 py-4 rounded-lg glass-card border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Team Members", value: "2-10" },
              { label: "Years Experience", value: "5+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 mb-6">
                <span className="text-sm text-[#E94560] font-medium">
                  About EvoDart Studios
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built for Speed, <br />
                Quality & <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                EvoDart Studios is a multi-disciplinary tech studio specializing
                in designing and developing high-performance digital products —
                including mobile apps, web apps, SaaS platforms, admin
                dashboards, and end-to-end digital solutions.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We partner with founders, small businesses, and enterprises to
                build products that are not only functional — but truly
                future-ready.
              </p>
              <Link
                to={createPageUrl("About")}
                className="inline-flex items-center text-[#E94560] hover:text-[#8B1538] font-medium transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning-Fast Development",
                  desc: "Production-ready quality at high speed",
                },
                {
                  icon: Shield,
                  title: "Modern Architecture",
                  desc: "Scalable solutions for growing businesses",
                },
                {
                  icon: Code,
                  title: "Clean UI/UX",
                  desc: "Interfaces that enhance user experience",
                },
                {
                  icon: Rocket,
                  title: "Transparent Communication",
                  desc: "Smooth project management & on-time delivery",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 border border-white/10 hover:border-[#E94560]/30 transition-all duration-300"
                >
                  <item.icon className="w-10 h-10 text-[#E94560] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 mb-6">
              <span className="text-sm text-[#E94560] font-medium">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="gradient-text">Tech Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we deliver comprehensive technology
              services that drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Web Development",
                desc: "Modern, responsive web applications built with cutting-edge technologies",
                services: [
                  "React & Next.js",
                  "Full-Stack Solutions",
                  "SaaS Platforms",
                ],
              },
              {
                title: "Mobile Development",
                desc: "Native and cross-platform mobile apps for iOS and Android",
                services: [
                  "Cross-Platform Apps",
                  "Native Development",
                  "App Store Deployment",
                ],
              },
              {
                title: "Custom Solutions",
                desc: "Tailored software solutions designed for your unique needs",
                services: [
                  "Admin Dashboards",
                  "API Development",
                  "Database Design",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 border border-white/10 hover:border-[#E94560]/30 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#E94560] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.services.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E94560] mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={createPageUrl("Services")}
              className="inline-flex items-center px-8 py-4 rounded-lg glass-card border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-12 md:p-16 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E94560]/10 to-[#8B1538]/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Something{" "}
                <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's turn your vision into a high-performance digital product
                that stands out
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center px-8 py-4 rounded-lg btn-primary text-white font-medium text-lg"
              >
                Start Your Project Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
