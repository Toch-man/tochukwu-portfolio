"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

// Types
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  bio: string;
}

interface Project {
  title: string;
  description: string;
  role: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  videoUrl?: string;
  featured: boolean;
}

interface Skills {
  [category: string]: string[];
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo: PersonalInfo = {
    name: "Tochukwu Okeakpu",
    title: "React & Next.js Developer",
    email: "okeakputochukwu9@gmail.com",
    github: "Toch-man",
    bio: "Passionate React developer specializing in building scalable web applications with modern technologies. I transform complex problems into elegant, user-friendly solutions. Experienced in React, Next.js, TypeScript, and decentralised application development with a focus on clean code and exceptional user experiences.",
  };

  const projects: Project[] = [
    {
      title: "Borderless UNN Admin Activity Site",
      description:
        "Administrative dashboard for managing university community activities with real-time data visualization and user management. Built with modern React patterns and scalable architecture.",
      role: "Frontend Developer — developed the administrative dashboard UI, integrated backend APIs for real-time data visualization and user management, and applied modern React patterns for scalability and maintainability.",
      tech: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "Python",
        "Django",
        "JWT",
      ],
      liveLink: "https://admin-frontend-liart-nine.vercel.app/",
      githubLink:
        "https://github.com/B-rder-ess-Dev-Hub-UNN/admin-frontend.git",
      videoUrl: "https://www.youtube.com/embed/FIUUvlfIG7I",
      featured: true,
    },
    {
      title: "kizito_codes",
      description:
        "A tutorial site with tutorial videos on web development courses",
      role: "Built the frontend of this project using Next.js, TypeScript and Tailwind CSS",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveLink: "https://kizito-code-frontend.vercel.app/",
      githubLink: "https://github.com/Toch-man/kizito_code_frontend.git",
      videoUrl: "https://www.youtube.com/embed/IIuTm3_VpSg",
      featured: true,
    },
    {
      title: "Blockchain based Farm-store tracking system with qr code support",
      description:
        "Full-stack Web3-based platform for managing a decentralized farm store system. The application enables transparent tracking of farm products and store operations through blockchain-backed data, ensuring trust, immutability, and real-time state updates without relying on traditional backend APIs. ** need to connect a decentralised wallet first to use i.e metamask etc. **",
      role: "Full-Stack Web3 Developer built the smart contract and frontend, integrating on-chain functionality using WAGMI.",
      tech: ["React", "TypeScript", "Wagmi", "Tailwind CSS", "Solidity"],
      liveLink: "https://agric-tech-v85t.vercel.app/",
      githubLink: "https://github.com/Toch-man/Agric_Tech.git",
      videoUrl: "https://www.youtube.com/embed/xgAP-yAO6CE",
      featured: true,
    },
    {
      title: "Scroll Academy",
      description:
        "An educative site that educates newbies about blockchain and introduces them into the scroll layer 2 network ** must connect add scroll network to the connected wallet to use**",
      role: "Full-Stack Developer",
      tech: ["React", "TypeScript", "Tailwind CSS", "Scaffold-eth", "Solidity"],
      liveLink: "https://scroll-academy-nextjs.vercel.app/",
      githubLink: "https://github.com/Toch-man/scroll_academy.git",
      videoUrl: "https://www.youtube.com/embed/n5p4TyHMlMQ",
      featured: false,
    },
    {
      title: "E-voting site",
      description:
        "Modern e-voting solution with secure authentication and real-time vote tracking. Implemented local storage for data persistence and responsive design for all devices.",
      role: "Frontend Developer - Built the frontend of a voting site using local storage to store data from the application",
      tech: ["React", "CSS"],
      liveLink: "https://e-voting-site.vercel.app/",
      githubLink: "https://github.com/Toch-man/E-voting-site.git",
      videoUrl: "https://www.youtube.com/embed/M5-HH1lVSwM",
      featured: false,
    },
  ];

  const skills: Skills = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux",
      "HTML5/CSS3",
    ],
    Blockchain: ["Solidity", "Wagmi", "Scaffold_eth"],
    "Tools & Others": [
      "Git/GitHub",
      "VS Code",
      "Hardhat",
      "Vercel",
      "Responsive Design",
    ],
  };

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-3 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["home", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4">
              {["home", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left py-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen w-full flex gap-3 items-center justify-center px-6 pt-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-400">Available for hire</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
            {personalInfo.title}
          </h2>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">
              Building solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
              >
                {/* Video Demo Section - Smaller */}
                {project.videoUrl && (
                  <div className="mb-4 relative group">
                    {activeVideo === project.title ? (
                      <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src={project.videoUrl}
                          title={`${project.title} Demo`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() => setActiveVideo(project.title)}
                        className="w-full aspect-video bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                      >
                        <div className="text-center">
                          <div className="bg-blue-500/20 rounded-full p-3 inline-block mb-2 group-hover:bg-blue-500/30 transition-colors">
                            <svg
                              className="w-6 h-6 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="text-slate-300 text-sm font-semibold">
                            Watch Demo
                          </p>
                        </div>
                      </button>
                    )}
                  </div>
                )}

                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <Code2 size={28} className="text-blue-400 shrink-0" />
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {project.role && (
                  <p className="text-slate-500 text-xs mb-3 italic">
                    {project.role}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 mt-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400 text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <div
                key={category}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 text-slate-300 px-3 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-slate-400 text-lg mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 md:py-3 md:px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>

            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Github size={18} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-400">
        <p>
          © 2026 {personalInfo.name}. Built with Next.js, TypeScript & Tailwind
          CSS.
        </p>
      </footer>
    </div>
  );
}
