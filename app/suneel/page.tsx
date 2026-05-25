"use client";

import React, { useEffect, useState } from "react";

export default function App() {

  const [message, setMessage] = useState("");

  const [activeSection, setActiveSection] = useState("home");

  const [openChat, setOpenChat] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "AI",
      text: "Hello 👋 Ask me about skills, projects, React, Python, SQL, or contact."
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

    let botReply = "I am Suneel's AI Assistant 👋";

    if (
      message.toLowerCase().includes("skills")
    ) {

      botReply =
        "Skills include React, JavaScript, Python, SQL, Power BI, HTML, CSS, and Dashboard Development.";

    }

    else if (
      message.toLowerCase().includes("project")
    ) {

      botReply =
        "Projects include IPL Dashboard and EV Market Analysis Dashboard.";

    }

    else if (
      message.toLowerCase().includes("react")
    ) {

      botReply =
        "React is used for building interactive frontend applications.";

    }

    else if (
      message.toLowerCase().includes("python")
    ) {

      botReply =
        "Python is used for data analysis and machine learning.";

    }

    else if (
      message.toLowerCase().includes("sql")
    ) {

      botReply =
        "SQL is used for database queries and analytics.";

    }

    else if (
      message.toLowerCase().includes("contact")
    ) {

      botReply =
        "Contact: suneel.sajja1209@gmail.com";

    }

    else {

      botReply =
        "Ask me about skills, projects, React, Python, SQL, or contact.";

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

        <div className="w-40 h-40 rounded-full border-4 border-cyan-400 flex items-center justify-center text-6xl font-bold mb-8">
          S
        </div>

        <h1 className="text-6xl font-extrabold mb-6">
          SUNEEL SAJJA
        </h1>

        <p className="text-2xl text-gray-400">
          React Developer | Data Analyst
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

            Hi, I’m Suneel Sajja,
            a passionate React Developer and Data Analyst.

            I build responsive frontend applications
            using React.js, JavaScript, HTML, CSS,
            Python, SQL, and Power BI.

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
              Frontend
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Backend
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>Python</li>
              <li>SQL</li>
            </ul>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Tools
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Power BI</li>
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

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              IPL Dashboard
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Developed an IPL Analysis Dashboard (2008–2025) to analyze team performance, points tables, Orange Cap, Purple Cap, match statistics, and player records using interactive dashboards and data visualization techniques.

Built dynamic filters, charts, and analytics components to provide season-wise insights and improve cricket data analysis using Power BI, Python, SQL, and frontend technologies.
            </p>

          </div>

          <div className="bg-gray-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              EV Market Analysis
            </h3>

            <p className="text-lg text-gray-300 leading-9">
              Developed an EV Market Analysis Dashboard to analyze electric vehicle market trends, battery performance, charging efficiency, pricing, and sustainability insights using interactive data visualization and analytics techniques.

Created dynamic dashboards and comparison features to help users explore EV models, market growth, energy efficiency, and future mobility trends in a responsive and user-friendly interface.
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

            <p>📧 suneel.sajja1209@gmail.com</p>

            <p>📞 9550897271</p>

            <p>📍 Hyderabad</p>

          </div>

        </div>

      </section>

      {/* CHAT BUTTON */}
      {!openChat && (

        <button
          onClick={() => setOpenChat(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-cyan-500 text-black text-3xl shadow-2xl hover:scale-110 duration-300"
        >
          💬
        </button>

      )}

      {/* CHATBOT */}
      {openChat && (

        <div className="fixed bottom-6 right-6 z-50">

          <div className="bg-gray-900 border border-cyan-400 rounded-3xl shadow-2xl w-[360px] overflow-hidden">

            {/* HEADER */}
            <div className="bg-cyan-500 px-6 py-4 flex justify-between items-center">

              <div>

                <h3 className="font-bold text-black">
                  AI Assistant
                </h3>

                <p className="text-sm text-black">
                  Online
                </p>

              </div>

              <button
                onClick={() => setOpenChat(false)}
                className="w-8 h-8 rounded-full bg-black text-white"
              >
                ×
              </button>

            </div>

            {/* CHAT BODY */}
            <div className="p-5 h-[350px] overflow-y-auto bg-black space-y-4">

              {chat.map((msg, index) => (

                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "You"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[250px] text-sm ${
                      msg.sender === "You"
                        ? "bg-cyan-500 text-black"
                        : "bg-gray-800 text-gray-300"
                    }`}
                  >

                    {msg.text}

                  </div>

                </div>

              ))}

            </div>

            {/* INPUT */}
            <div className="p-4 border-t border-gray-800 flex gap-3 bg-gray-950">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask something..."
                className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3 text-sm outline-none"
              />

              <button
                onClick={sendMessage}
                className="bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-xl font-bold text-black"
              >
                Send
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}