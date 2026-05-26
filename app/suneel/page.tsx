"use client";

import React, { useEffect, useState } from "react";

import SelectPortfolio from "@/components/SelectPortfolio";

export default function App() {

  const [message, setMessage] = useState("");

  const [activeSection, setActiveSection] = useState("home");

  const [openChat, setOpenChat] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "AI",
      text: "Hello 👋 Ask me about skills, projects, Python, SQL, Power BI or contact."
    }
  ]);

  /* ================= ACTIVE NAVBAR ================= */

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

  /* ================= CHATBOT ================= */

  const sendMessage = () => {

    if (message.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: message
    };

    let botReply = "I am Suneel's AI Assistant 👋";

    if (message.toLowerCase().includes("skills")) {

      botReply =
        "Skills include Python, SQL, Power BI, React.js, Data Analytics, Dashboard Development and Machine Learning.";

    }

    else if (message.toLowerCase().includes("project")) {

      botReply =
        "Projects include IPL Dashboard, EV Market Analysis and Restaurant Consumer Behavior Analysis.";

    }

    else if (message.toLowerCase().includes("python")) {

      botReply =
        "Python is used for Data Analysis, Visualization and Machine Learning.";

    }

    else if (message.toLowerCase().includes("sql")) {

      botReply =
        "SQL is used for Advanced Queries and Data Analysis.";

    }

    else if (message.toLowerCase().includes("power bi")) {

      botReply =
        "Power BI is used for KPI Dashboards and Data Visualization.";

    }

    else if (message.toLowerCase().includes("contact")) {

      botReply =
        "Contact: suneel.sajja1209@gmail.com | +91 9550897271";

    }

    else {

      botReply =
        "Ask me about skills, projects, Python, SQL, Power BI or contact.";

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

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-extrabold text-cyan-400">
            Portfolio
          </h1>

          <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

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

            <li className="w-[230px]">
              <SelectPortfolio />
            </li>

          </ul>

        </div>

      </nav>

      {/* ================= HOME ================= */}

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >

        <div className="w-44 h-44 rounded-full border-4 border-cyan-400 flex items-center justify-center text-7xl font-bold mb-8 shadow-2xl">
          S
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          SUNEEL SAJJA
        </h1>

        <p className="text-2xl text-gray-400">
          React Developer | Data Analyst
        </p>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-zinc-950 px-6"
      >

        <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center">

          <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            ABOUT ME
          </p>

          <h2 className="text-[42px] md:text-[72px] font-black leading-none mt-6 text-white">
            DATA ANALYST
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-9 mt-8 max-w-4xl">
            Data Analyst with hands-on experience in Python, SQL,
            Power BI, Excel and Dashboard Development.
            Passionate about transforming raw data into
            meaningful business insights using Data Visualization,
            Exploratory Data Analysis and Machine Learning.
          </p>

          {/* ABOUT CARDS */}

          <div className="flex flex-wrap justify-center items-center gap-6 mt-14 w-full">

            {[
              "Power BI",
              "Python & SQL",
              "KPI Dashboards",
              "Data Analytics",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[24px] shadow-xl w-[220px] h-[120px] flex items-center justify-center hover:scale-105 transition-all duration-300"
              >

                <h3 className="text-xl font-black text-black text-center px-4">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-black px-6"
      >

        <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center text-center">

          <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            SKILLS
          </p>

          <h2 className="text-[42px] md:text-[72px] font-black leading-none mt-6 text-white">
            TECH STACK
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-9 mt-8 max-w-4xl">
            Strong technical foundation in Data Analytics,
            Dashboard Visualization, Frontend Development
            and Database Technologies.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 w-full">

            <div className="bg-zinc-900 border border-cyan-400/20 rounded-[28px] p-8 w-[260px] min-h-[280px] flex flex-col items-center justify-center shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-2xl font-black text-cyan-400">
                Python
              </h3>

              <p className="text-gray-300 mt-6 leading-8 text-sm text-center">
                Pandas, NumPy,
                Matplotlib, Seaborn
                and Machine Learning.
              </p>

            </div>

            <div className="bg-cyan-500 rounded-[28px] p-8 w-[260px] min-h-[280px] flex flex-col items-center justify-center shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-2xl font-black text-black">
                SQL & Power BI
              </h3>

              <p className="text-black mt-6 leading-8 text-sm font-medium text-center">
                Advanced SQL Queries,
                KPI Dashboards,
                DAX and Analytics.
              </p>

            </div>

            <div className="bg-zinc-900 border border-cyan-400/20 rounded-[28px] p-8 w-[260px] min-h-[280px] flex flex-col items-center justify-center shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-2xl font-black text-cyan-400">
                React.js
              </h3>

              <p className="text-gray-300 mt-6 leading-8 text-sm text-center">
                React.js, JavaScript,
                HTML, CSS and
                Tailwind CSS.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-zinc-950 px-6"
      >

        <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center text-center">

          <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            PROJECTS
          </p>

          <h2 className="text-[42px] md:text-[72px] font-black leading-none mt-6 text-white">
            FEATURED WORK
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-9 mt-8 max-w-4xl">
            Real-world projects focused on
            Data Analysis, Machine Learning
            and Interactive Dashboard Development.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 w-full">

            <div className="bg-zinc-900 rounded-[28px] overflow-hidden shadow-2xl w-full max-w-[320px] hover:scale-105 transition-all duration-300">

              <div className="h-[180px] bg-cyan-500 flex items-center justify-center">

                <h3 className="text-5xl font-black text-black">
                  01
                </h3>

              </div>

              <div className="p-8 flex flex-col items-center justify-center text-center">

                <h3 className="text-3xl font-black text-white">
                  IPL Dashboard
                </h3>

                <p className="text-gray-300 leading-8 mt-5 text-sm">
                  Interactive Power BI dashboard
                  analyzing IPL statistics
                  from 2008–2025.
                </p>

              </div>

            </div>

            <div className="bg-zinc-900 rounded-[28px] overflow-hidden shadow-2xl w-full max-w-[320px] hover:scale-105 transition-all duration-300">

              <div className="h-[180px] bg-white flex items-center justify-center">

                <h3 className="text-5xl font-black text-black">
                  02
                </h3>

              </div>

              <div className="p-8 flex flex-col items-center justify-center text-center">

                <h3 className="text-3xl font-black text-white">
                  EV Market Analysis
                </h3>

                <p className="text-gray-300 leading-8 mt-5 text-sm">
                  Python-based analysis
                  and visualization of
                  Electric Vehicle market trends.
                </p>

              </div>

            </div>

            <div className="bg-zinc-900 rounded-[28px] overflow-hidden shadow-2xl w-full max-w-[320px] hover:scale-105 transition-all duration-300">

              <div className="h-[180px] bg-cyan-500 flex items-center justify-center">

                <h3 className="text-5xl font-black text-black">
                  03
                </h3>

              </div>

              <div className="p-8 flex flex-col items-center justify-center text-center">

                <h3 className="text-3xl font-black text-white">
                  Restaurant Analysis
                </h3>

                <p className="text-gray-300 leading-8 mt-5 text-sm">
                  Consumer behavior analysis
                  using MySQL and
                  Advanced SQL Queries.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-black px-6"
      >

        <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center">

          <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            CONTACT
          </p>

          <h2 className="text-[42px] md:text-[72px] font-black leading-none mt-6 text-white">
            LET'S CONNECT
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-9 mt-8 max-w-3xl">
            Open to internships,
            freelance opportunities,
            collaborations and
            Data Analyst roles.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 w-full">

            <div className="bg-zinc-900 border border-cyan-400/20 rounded-[28px] p-8 w-[260px] min-h-[220px] flex flex-col items-center justify-center shadow-2xl">

              <h3 className="text-2xl font-black text-cyan-400">
                Email
              </h3>

              <p className="text-gray-300 mt-6 text-sm break-all text-center">
                suneel.sajja1209@gmail.com
              </p>

            </div>

            <div className="bg-cyan-500 rounded-[28px] p-8 w-[260px] min-h-[220px] flex flex-col items-center justify-center shadow-2xl">

              <h3 className="text-2xl font-black text-black">
                Phone
              </h3>

              <p className="text-black mt-6 text-sm font-semibold text-center">
                +91 9550897271
              </p>

            </div>

            <div className="bg-zinc-900 border border-cyan-400/20 rounded-[28px] p-8 w-[260px] min-h-[220px] flex flex-col items-center justify-center shadow-2xl">

              <h3 className="text-2xl font-black text-cyan-400">
                Location
              </h3>

              <p className="text-gray-300 mt-6 text-sm text-center">
                Hyderabad, India
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CHAT BUTTON ================= */}

      {!openChat && (

        <button
          onClick={() => setOpenChat(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-cyan-400 text-black text-3xl shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        >
          💬
        </button>

      )}

      {/* ================= CHATBOT ================= */}

      {openChat && (

        <div className="fixed bottom-6 right-6 z-50">

          <div className="w-[370px] h-[520px] bg-zinc-950 border border-cyan-400/30 rounded-[30px] shadow-2xl overflow-hidden flex flex-col">

            <div className="bg-cyan-400 px-6 py-5 flex justify-between items-center">

              <div>

                <h2 className="text-black font-black text-xl">
                  AI Assistant
                </h2>

                <p className="text-black/70 text-sm">
                  Ask about skills, projects & contact
                </p>

              </div>

              <button
                onClick={() => setOpenChat(false)}
                className="w-10 h-10 rounded-full bg-black text-white text-xl"
              >
                ×
              </button>

            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 bg-black">

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
                    className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm leading-7 ${
                      msg.sender === "You"
                        ? "bg-cyan-400 text-black rounded-br-md"
                        : "bg-zinc-900 text-white border border-cyan-400/20 rounded-bl-md"
                    }`}
                  >

                    <p className="font-bold mb-1">
                      {msg.sender}
                    </p>

                    <p>
                      {msg.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <div className="p-4 bg-zinc-950 border-t border-cyan-400/20 flex items-center gap-3">

              <input
                type="text"
                placeholder="Ask something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="flex-1 bg-black border border-cyan-400/20 rounded-full px-5 py-3 text-white outline-none focus:border-cyan-400"
              />

              <button
                onClick={sendMessage}
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-5 py-3 rounded-full font-bold transition-all duration-300"
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