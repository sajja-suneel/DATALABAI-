"use client";

import React from "react";
import SelectPortfolio from "@/components/SelectPortfolio";

export default function SathvikPortfolio() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10">

        {/* GRADIENT */}

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#00ff99_0%,transparent_30%),radial-gradient(circle_at_bottom_right,#00ffaa_0%,transparent_30%)] opacity-20" />

        {/* GRID */}

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-black tracking-[8px] text-green-400">
            SATHVIK
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-[4px] text-gray-400 items-center">

            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-green-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-green-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>

            <div className="w-[250px]">
              <SelectPortfolio />
            </div>

          </div>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="min-h-screen flex items-center pt-24">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[6px] text-green-400 text-xs md:text-sm">
              DATA ANALYST • MACHINE LEARNING • AI
            </p>

            <h1 className="text-[60px] md:text-[110px] font-black leading-none mt-8">
              DATA
              <br />
              SCIENCE
            </h1>

            <h2 className="text-[24px] md:text-[40px] font-black text-white/20 mt-4">
              FUTURE AI ENGINEER
            </h2>

            <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-9 mt-10">

              Highly motivated Data Analyst skilled in Python,
              Machine Learning, SQL, Tableau, and Deep Learning.
              Passionate about building intelligent AI systems,
              prediction models, and analytics solutions.

            </p>

            <div className="flex gap-5 mt-12 flex-wrap">

              <button className="px-7 py-3 bg-green-400 text-black rounded-full font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(0,255,153,0.4)]">
                Explore Work
              </button>

              <button className="px-7 py-3 border border-white/20 rounded-full hover:border-green-400 hover:text-green-400 transition duration-300">
                Download CV
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute w-[300px] h-[300px] bg-green-500/20 blur-[100px] rounded-full" />

            <div className="relative group">

              <div className="absolute inset-0 rounded-[40px] border border-green-400/20 rotate-6 group-hover:rotate-12 transition duration-500" />

              <div className="relative w-[300px] md:w-[360px] h-[420px] md:h-[500px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

                <img
                  src="/sathvik.jpg"
                  alt="Sathvik"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28"
      >

        <h2 className="text-5xl font-black mb-14 text-green-400">
          ABOUT
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <h3 className="text-2xl font-bold mb-6">
              Career Objective
            </h3>

            <p className="text-gray-400 leading-9 text-lg">

              Enthusiastic and detail-oriented graduate seeking
              opportunities as a Data Analyst and AI Engineer.
              Strong knowledge in data analysis, machine learning,
              deep learning, and predictive analytics with hands-on
              project experience.

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <h3 className="text-2xl font-bold mb-6">
              Education
            </h3>

            <div className="space-y-6 text-gray-400">

              <div>
                <h4 className="text-white font-semibold">
                  B.Tech
                </h4>

                <p>
                  Gokaraju Rangaraju Institute of Engineering and Technology
                </p>
                <p>2020 - 2023 | CGPA: 7.10</p>
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Diploma
                </h4>

                <p>KLR College of Engineering and Technology</p>
                <p>2017 - 2020 | 77.8%</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28"
      >

        <h2 className="text-5xl font-black mb-14 text-green-400">
          SKILLS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {[
            "Python",
            "Machine Learning",
            "Deep Learning",
            "SQL",
            "Tableau",
            "MS Excel",
            "NLP",
            "Jupyter Notebook",
            "VS Code",
            "Google Colab",
          ].map((skill) => (

            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-green-400 transition duration-300"
            >

              <h3 className="font-semibold text-lg">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28"
      >

        <h2 className="text-5xl font-black mb-14 text-green-400">
          PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "YouTube Dataset Analysis",
              desc: "Performed data cleaning, preprocessing, and ML model building for likes prediction using regression models.",
            },

            {
              title: "Terro's Real Estate Agency",
              desc: "Regression analysis project focusing on visualization, prediction, and interpretation of housing data.",
            },

            {
              title: "Indian Liver Patient Identification",
              desc: "Built classification models using Gradient Boosting with data preprocessing and visualization.",
            },

            {
              title: "Crop Prediction ML",
              desc: "Developed crop prediction system using EDA, data wrangling, and Logistic Regression.",
            },

          ].map((project, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-green-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {project.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28"
      >

        <h2 className="text-5xl font-black mb-14 text-green-400">
          CONTACT
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl space-y-6">

          <p className="text-lg text-gray-300">
            📧 sathvikyadav721@gmail.com
          </p>

          <p className="text-lg text-gray-300">
            📞 7036402567
          </p>

          <p className="text-lg text-gray-300">
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/in/sathvik-yadav-1075992a9/"
              target="_blank"
              className="text-green-400 ml-2"
            >
              View Profile
            </a>
          </p>

        </div>

      </section>

    </div>
  );
}