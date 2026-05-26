"use client";

import React from "react";

import SelectPortfolio from "@/components/SelectPortfolio";

import {
  Sparkles,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  BrainCircuit,
  LayoutDashboard,
  Database,
} from "lucide-react";

export default function NandhanaPage() {
  return (
    <main className="bg-[#fff7f9] text-black overflow-x-hidden">
      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-pink-300/40 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-orange-200/40 blur-[120px] rounded-full" />
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-black tracking-[6px]">
            NANDHANA
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[3px] text-gray-600">
            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-pink-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-pink-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>

            <div className="w-[190px]">
              <SelectPortfolio />
            </div>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="min-h-screen flex items-center justify-center pt-28 px-6">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold">
              <Sparkles size={14} />
              Data Science Portfolio
            </div>

            <h1 className="text-[52px] md:text-[88px] font-black leading-none mt-8">
              DATA
              <br />
              SCIENCE
            </h1>

            <h2 className="text-[20px] md:text-[34px] text-black/20 font-black mt-5 tracking-wide">
              FUTURE ANALYST
            </h2>

            <p className="text-base text-gray-600 leading-8 mt-8 max-w-xl">
              Passionate about Data Analytics, Artificial Intelligence,
              Visualization Tools and Problem Solving with innovative solutions.
            </p>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-10 flex-wrap justify-center lg:justify-start">
              <button className="px-7 py-3 rounded-full bg-black text-white hover:bg-pink-500 transition duration-300 font-bold text-sm">
                Explore Work
              </button>

              <button className="px-7 py-3 rounded-full border border-black/10 bg-white hover:border-pink-500 hover:text-pink-500 transition duration-300 font-semibold text-sm">
                Download Resume
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center items-center">
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full border-2 border-dashed border-pink-300 animate-spin" />

            <div className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-yellow-200" />

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-orange-200 rounded-[30px] rotate-6" />

              <div className="relative w-[280px] md:w-[340px] h-[360px] md:h-[430px] rounded-[30px] overflow-hidden bg-white p-3 shadow-2xl">
                <img
                  src="/nandhana.jpg"
                  alt="Nandhana"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

<section
  id="about"
  className="max-w-6xl mx-auto flex flex-col items-center text-center"
>
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

    <p className="uppercase tracking-[4px] text-pink-500 text-[10px] font-semibold text-center">
      About Me
    </p>

    <h2 className="text-[30px] md:text-[48px] font-black leading-none mt-4">
      CREATIVE ANALYST
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-7 mt-6 max-w-3xl">
      B.Tech Computer Science and Engineering (Data Science) student
      passionate about AI systems,
      Data Science,
      Analytics,
      Visualization and innovative technologies.
    </p>

    {/* ABOUT CARDS */}

    <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-10 mx-auto">
      {[
        "10+ Projects",
        "Data Analyst",
        "AI Systems",
        "Creative Thinker",
      ].map((item, index) => (

        <div
          key={index}
          className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-[22px] p-5 flex items-center justify-center text-center shadow-lg w-[170px] h-[100px] mx-auto"
        >

          <h3 className="text-base font-black">
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
        className="py-24 px-6 flex justify-center items-center"
      >
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center">
          <p className="uppercase tracking-[5px] text-pink-500 text-xs font-semibold">
            Expertise
          </p>

          <h2 className="text-[44px] md:text-[72px] font-black leading-none mt-5">
            SKILLS
          </h2>

          <p className="text-gray-600 mt-8 max-w-3xl text-base md:text-lg leading-8">
            Strong foundation in Data Science, Analytics, Visualization,
            Database Technologies and Dashboard Development.
          </p>

          {/* SKILL CARDS */}

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 w-full">
            {/* CARD 1 */}

            <div className="bg-white rounded-[28px] p-8 shadow-xl border border-black/5 text-center flex flex-col items-center justify-center w-[280px] min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <BrainCircuit className="text-pink-500" size={26} />
              </div>

              <h3 className="text-2xl font-black mt-6">
                Data Science
              </h3>

              <p className="text-gray-600 mt-5 leading-8 text-sm">
                Python, SQL, Analytics, AI Systems and Machine Learning.
              </p>
            </div>

            {/* CARD 2 */}

            <div className="bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 text-white rounded-[28px] p-8 shadow-xl text-center flex flex-col items-center justify-center w-[280px] min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <LayoutDashboard size={26} />
              </div>

              <h3 className="text-2xl font-black mt-6">
                Visualization
              </h3>

              <p className="mt-5 leading-8 text-sm text-white/95">
                Power BI, Canva, Dashboard Design and UI Presentation.
              </p>
            </div>

            {/* CARD 3 */}

            <div className="bg-black text-white rounded-[28px] p-8 shadow-xl text-center flex flex-col items-center justify-center w-[280px] min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Database className="text-pink-400" size={26} />
              </div>

              <h3 className="text-2xl font-black mt-6">
                Databases
              </h3>

              <p className="text-gray-300 mt-5 leading-8 text-sm">
                DBMS, SQL, OOPS Concepts and Database Management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="py-24 px-6 flex justify-center items-center"
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
          <p className="uppercase tracking-[5px] text-pink-500 text-xs font-semibold">
            Featured Work
          </p>

          <h2 className="text-[44px] md:text-[72px] font-black leading-none mt-5">
            PROJECTS
          </h2>

          <p className="text-gray-600 mt-8 max-w-3xl text-base md:text-lg leading-8">
            Innovative projects focused on Artificial Intelligence,
            Machine Learning and Interactive Technologies.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 w-full">
            {/* PROJECT 1 */}

            <div className="group bg-white rounded-[30px] overflow-hidden shadow-xl w-full max-w-[320px]">
              <div className="h-[180px] bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100 flex items-center justify-center">
                <h3 className="text-5xl font-black text-black/20">01</h3>
              </div>

              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-3xl font-black">
                  Virtual Museum
                </h3>

                <p className="text-gray-600 leading-8 mt-5 text-sm">
                  Interactive digital experience for showcasing cultural
                  heritage.
                </p>

                <button className="mt-7 flex items-center gap-2 text-pink-500 font-bold text-sm">
                  View Project
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* PROJECT 2 */}

            <div className="group bg-white rounded-[30px] overflow-hidden shadow-xl w-full max-w-[320px]">
              <div className="h-[180px] bg-gradient-to-br from-pink-400 via-pink-200 to-orange-100 flex items-center justify-center">
                <h3 className="text-5xl font-black text-black/20">02</h3>
              </div>

              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-3xl font-black">
                  Drug Recommendation
                </h3>

                <p className="text-gray-600 leading-8 mt-5 text-sm">
                  Machine Learning system for drug recommendation and
                  prediction.
                </p>

                <button className="mt-7 flex items-center gap-2 text-pink-500 font-bold text-sm">
                  View Project
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* PROJECT 3 */}

            <div className="group bg-white rounded-[30px] overflow-hidden shadow-xl w-full max-w-[320px]">
              <div className="h-[180px] bg-gradient-to-br from-orange-200 via-yellow-100 to-pink-100 flex items-center justify-center">
                <h3 className="text-5xl font-black text-black/20">03</h3>
              </div>

              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-3xl font-black">
                  SLA Prediction
                </h3>

                <p className="text-gray-600 leading-8 mt-5 text-sm">
                  AI-based SLA breach prediction system for Incident
                  Management.
                </p>

                <button className="mt-7 flex items-center gap-2 text-pink-500 font-bold text-sm">
                  View Project
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-24 px-6 flex justify-center items-center"
      >
        <div className="max-w-6xl w-full mx-auto bg-black text-white rounded-[32px] p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full" />

          <p className="uppercase tracking-[5px] text-pink-400 text-xs relative z-10 font-semibold">
            Contact
          </p>

          <h2 className="text-[44px] md:text-[72px] font-black leading-none mt-5 relative z-10">
            LET’S TALK
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8 relative z-10">
            Open to collaborations, internships and innovative opportunities
            in Data Science and Analytics.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 relative z-10">
            {/* EMAIL */}

            <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 text-center flex flex-col items-center w-full max-w-[260px]">
              <Mail className="text-pink-400 mb-4" size={26} />

              <p className="text-gray-500 uppercase tracking-[4px] text-xs">
                Email
              </p>

              <h3 className="text-sm font-bold mt-4 break-all">
                anugantinandhana53@gmail.com
              </h3>
            </div>

            {/* PHONE */}

            <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 text-center flex flex-col items-center w-full max-w-[260px]">
              <Phone className="text-pink-400 mb-4" size={26} />

              <p className="text-gray-500 uppercase tracking-[4px] text-xs">
                Phone
              </p>

              <h3 className="text-sm font-bold mt-4">
                +91 9000388566
              </h3>
            </div>

            {/* LOCATION */}

            <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 text-center flex flex-col items-center w-full max-w-[260px]">
              <MapPin className="text-pink-400 mb-4" size={26} />

              <p className="text-gray-500 uppercase tracking-[4px] text-xs">
                Location
              </p>

              <h3 className="text-sm font-bold mt-4">
                Hyderabad, India
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}