"use client";

import React, { useEffect, useState } from "react";

export default function SathvikPage() {

  const [message, setMessage] = useState("");

  const [activeSection, setActiveSection] = useState("home");

  const [openChat, setOpenChat] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "AI",
      text: "Hello 👋 Ask me about skills, projects, machine learning, or contact."
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
      "Ask me about skills, projects, machine learning, or contact.";

    if (message.toLowerCase().includes("skills")) {

      botReply =
        "Skills include Python, MySQL, Machine Learning, Tableau, Deep Learning, NLP, and MS Excel.";

    }

    else if (message.toLowerCase().includes("projects")) {

      botReply =
        "Projects include YouTube Dataset Analysis, Real Estate Analysis, Liver Patient Prediction, and Crop Prediction.";

    }

    else if (message.toLowerCase().includes("machine")) {

      botReply =
        "Machine Learning was used in prediction models, classification systems, and regression analysis projects.";

    }

    else if (message.toLowerCase().includes("contact")) {

      botReply =
        "Contact: sathvikyadav721@gmail.com";

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
          src="/sathvik.jpg"
          alt="Sathvik"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover mb-8"
        />

        <h1 className="text-6xl font-extrabold mb-6">
          D SATHVIK YADAV
        </h1>

        <p className="text-2xl text-gray-400">
          Data Analyst | Machine Learning Enthusiast
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

            Highly motivated and detail-oriented graduate seeking
            opportunities in Data Analytics and Machine Learning.
            Passionate about uncovering insights from data and
            building intelligent prediction systems.

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
              Programming
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Python</li>
              <li>MySQL</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
            </ul>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Data Tools
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Tableau</li>
              <li>MS Excel</li>
              <li>Jupyter Notebook</li>
              <li>VS Code</li>
            </ul>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Technologies
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Cloud Computing</li>
              <li>Internet of Things</li>
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

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              YouTube Dataset Analysis
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Built ML models for likes prediction using regression
              techniques with data cleaning and preprocessing.
            </p>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Terro’s Real Estate Agency
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Conducted regression analysis and visualization for
              target variable prediction using Linear Regression.
            </p>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Indian Liver Patient Identification
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Applied Gradient Boosting and classification techniques
              for medical prediction analysis.
            </p>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Crop Prediction Using ML
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Developed crop prediction system using EDA,
              logistic regression, and machine learning.
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

            <p>📧 sathvikyadav721@gmail.com</p>

            <p>📞 7036402567</p>

            <p>📍 Hyderabad</p>

          </div>

        </div>

      </section>

    </div>

  );

}