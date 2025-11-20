import React, { useEffect } from "react";
import { Target, Heart, Zap, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
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

  const values = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "We believe in rapid development without compromising quality. Our agile approach ensures fast delivery and iterative improvements.",
    },
    {
      icon: Target,
      title: "Quality First",
      description:
        "Every line of code is written with precision. We maintain the highest standards in architecture, testing, and deployment.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our success. We work closely with clients to understand their vision and deliver solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "We foster open communication and transparent processes. Our team works as an extension of yours, ensuring seamless collaboration.",
    },
    {
      icon: Award,
      title: "Innovation Driven",
      description:
        "We stay ahead of technology trends and adopt cutting-edge tools to give your product a competitive advantage.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnership",
      description:
        "We don't just build and leave. We provide ongoing support and grow with your business for sustained success.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E94560] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 mb-6">
            <span className="text-sm text-[#E94560] font-medium">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building the <span className="gradient-text">Future of Tech</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate team dedicated to transforming ideas into
            high-performance digital products
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in 2025 in Surat, Gujarat, EvoDart Studios emerged from
                a simple vision: to create technology solutions that truly
                perform. We're a multi-disciplinary tech studio that combines
                engineering excellence with creative innovation.
              </p>
              <p>
                With a strong mix of engineering, communication, and management
                expertise, our team specializes in building high-performance
                digital products — from mobile apps and web applications to SaaS
                platforms and end-to-end digital solutions.
              </p>
              <p>
                What sets us apart is our commitment to speed without
                sacrificing quality. We understand that in today's fast-paced
                digital landscape, time-to-market matters. That's why we've
                perfected our development process to deliver production-ready
                solutions at lightning speed.
              </p>
              <p>
                We partner with founders, small businesses, and enterprises who
                share our passion for innovation and excellence. Together, we
                build products that are not only functional but truly
                future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 border border-white/10 hover:border-[#E94560]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#E94560] to-[#8B1538] flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A talented group of 2-10 professionals bringing diverse expertise
              to every project
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-400">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Our team consists of full-stack developers, UI/UX designers,
                mobile app specialists, and project managers who work together
                seamlessly to deliver exceptional results. We're not just
                developers — we're problem solvers, innovators, and partners in
                your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What We <span className="gradient-text">Excel At</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Lightning-fast development with production-ready quality",
                  "Modern, scalable architecture for growing businesses",
                  "Clean UI/UX that enhances user experience",
                  "Transparent communication and smooth project management",
                  "On-time delivery with reliable post-launch support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E94560] to-[#8B1538] mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#E94560] flex items-center justify-center text-white font-bold text-sm mr-3">
                      1
                    </div>
                    <h4 className="font-semibold text-lg">
                      Discovery & Planning
                    </h4>
                  </div>
                  <p className="text-gray-400 ml-11">
                    Understanding your vision, goals, and technical requirements
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#E94560] flex items-center justify-center text-white font-bold text-sm mr-3">
                      2
                    </div>
                    <h4 className="font-semibold text-lg">
                      Design & Architecture
                    </h4>
                  </div>
                  <p className="text-gray-400 ml-11">
                    Creating wireframes, mockups, and technical architecture
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#E94560] flex items-center justify-center text-white font-bold text-sm mr-3">
                      3
                    </div>
                    <h4 className="font-semibold text-lg">
                      Development & Testing
                    </h4>
                  </div>
                  <p className="text-gray-400 ml-11">
                    Agile development with continuous testing and feedback
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#E94560] flex items-center justify-center text-white font-bold text-sm mr-3">
                      4
                    </div>
                    <h4 className="font-semibold text-lg">Launch & Support</h4>
                  </div>
                  <p className="text-gray-400 ml-11">
                    Deployment, monitoring, and ongoing maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Let's discuss how we can help transform your ideas into powerful
              digital solutions
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg btn-primary text-white font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
