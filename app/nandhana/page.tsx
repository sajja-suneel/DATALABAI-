"use client";

import React, { useEffect, useState } from "react";

export default function NandhanaPage() {

  const [message, setMessage] = useState("");

  const [activeSection, setActiveSection] = useState("home");

  const [openChat, setOpenChat] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "AI",
      text: "Hello 👋 Ask me about skills, projects, certifications, or contact."
    }
  ]);

  /* ACTIVE NAVBAR */

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const top = element.offsetTop - 150;

          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* CHATBOT */

  const sendMessage = () => {

    if (message.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: message
    };

    let botReply =
      "Ask me about skills, projects, certifications, or contact.";

    if (message.toLowerCase().includes("skills")) {

      botReply =
        "Skills include Python, SQL, DBMS, OOPS, HTML, Power BI, Canva, and Content Writing.";

    }

    else if (message.toLowerCase().includes("projects")) {

      botReply =
        "Projects include Virtual Museum, Drug Recommendation System, and SLA Breach Prediction.";

    }

    else if (message.toLowerCase().includes("certification")) {

      botReply =
        "Certifications include Deloitte Data Analytics, IBM Data Fundamentals, Google Python, and Power BI.";

    }

    else if (message.toLowerCase().includes("contact")) {

      botReply =
        "Contact: anugantinandhana53@gmail.com";

    }

    const aiMessage = {
      sender: "AI",
      text: botReply
    };

    setChat([...chat, userMessage, aiMessage]);

    setMessage("");

  };

  return (

    <div className="bg-black text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-extrabold text-cyan-400">
            Portfolio
          </h1>

          <ul className="hidden md:flex gap-8 text-lg font-medium">

            <li>
              <a
                href="#home"
                className={`transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={`transition-all duration-300 ${
                  activeSection === "about"
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={`transition-all duration-300 ${
                  activeSection === "skills"
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={`transition-all duration-300 ${
                  activeSection === "projects"
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`transition-all duration-300 ${
                  activeSection === "contact"
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      </nav>

      {/* HOME */}

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >

        <img
          src="/nandhana.jpg"
          alt="Nandhana"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover mb-8"
        />

        <h1 className="text-6xl font-extrabold mb-6">
          ANUGANTI NANDHANA
        </h1>

        <p className="text-2xl text-gray-400">
          Data Science Student | Data Analyst
        </p>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-28 px-8 bg-gray-950 text-center"
      >

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-12">

          <p className="text-lg text-gray-300 leading-10">

            Seeking a challenging position to leverage skills and contribute
            to organizational growth. Passionate about learning new technologies,
            teamwork, and building innovative projects.

          </p>

        </div>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="py-28 px-8"
      >

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Languages
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Python</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>DBMS</li>
              <li>OOPS Concepts</li>
            </ul>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Tools
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Power BI</li>
              <li>Canva</li>
              <li>Microsoft Office</li>
            </ul>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Soft Skills
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Content Writing</li>
            </ul>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="py-28 px-8 bg-gray-950"
      >

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Virtual Museum
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Developed immersive virtual museum experiences using digital
              technologies and cultural heritage concepts.
            </p>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Drug Recommendation
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Built an ML-based system for drug recommendation and overdose
              prediction based on patient symptoms.
            </p>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              SLA Breach Prediction
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Designed an AI-based prediction system for ITSM incident
              management to prevent SLA breaches proactively.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-28 px-8 text-center"
      >

        <h2 className="text-5xl font-bold text-cyan-400 mb-16">
          Contact
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-12">

          <div className="space-y-8 text-2xl text-gray-300">

            <p>📧 anugantinandhana53@gmail.com</p>

            <p>📞 +91-9000388566</p>

            <p>📍 Hyderabad</p>

          </div>

        </div>

      </section>

    </div>

  );

}