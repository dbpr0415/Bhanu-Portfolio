import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img
          src="https://drive.google.com/uc?id=1BUAEvwEostVzTQ86_vu2rmM5YN6B_A9V"
          alt="Bhanu Prakash"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold">Bhanu Prakash</h1>
        <p className="mt-2 text-xl md:text-2xl text-indigo-400">Full Stack Developer | ML Enthusiast</p>
        <p className="mt-4 max-w-2xl text-gray-300">
          A dynamic and results-driven professional passionate about problem-solving, emerging technologies, and continuous learning. Eager to apply my technical skills in an innovative environment to drive impactful solutions and stay ahead in the ever-evolving tech landscape.
        </p>
        <p className="mt-2 max-w-2xl text-gray-400 text-sm">
          Undergraduate student pursuing B.Tech in Computer Science and Engineering at PES University, Bangalore.
        </p>
        <div className="mt-6 flex gap-6">
          <a href="https://github.com/dbpr0415" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/bhanupr0415/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://drive.google.com/file/d/1MU3IZaJdL5xbGJivQRwQSPoghquNHyAL/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-indigo-700 transition"
          >
            View Resume <FaArrowRight />
          </a>
        </div>
      </header>

      <section className="px-6 md:px-20 py-12 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">Languages</h3>
            <p className="text-gray-300">C, Python, JavaScript, Java (OOPS), Linux, MySQL, Rust</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">Frameworks & Libraries</h3>
            <p className="text-gray-300">PyTorch, TensorFlow, React Native, Node.js, Spring Boot, Pandas, MATLAB</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">DevOps & Cloud</h3>
            <p className="text-gray-300">AWS (EC2, S3, Lambda), Kubernetes, Terraform, Docker, CI/CD, Git</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">Web & Tools</h3>
            <p className="text-gray-300">HTML, CSS, MongoDB, Big Data, Data Structures, Data Science, ML</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="text-gray-400">Project details coming soon...</p>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Bhanu Prakash. All rights reserved.
      </footer>
    </div>
  );
}
