import React from "react";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
  SiLeetcode,
  SiVisualstudio,
  SiWebsocket,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">⚒️ Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">💻 Programming Languages</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <FaJava size={40} color="#f89820" />
                <p>Java</p>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript size={40} color="#f7df1e" />
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <SiC size={40} color="#5c6bc0" />
                <p>C</p>
              </div>
              <div className="flex flex-col items-center">
                <SiCplusplus size={40} color="#004482" />
                <p>C++</p>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">🌐 Frontend Development</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <SiTailwindcss size={40} color="#38bdf8" />
                <p>Tailwind</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact size={40} color="#61dbfb" />
                <p>React</p>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">🔧 Backend Development</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <FaNodeJs size={40} color="#68a063" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress size={40} color="#ffffff" />
                <p>Express</p>
              </div>
              <div className="flex flex-col items-center">
                <SiWebsocket size={40} color="#4cafef" />
                <p>WebSocket</p>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">🗄️ Databases</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <SiMongodb size={40} color="#4db33d" />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql size={40} color="#00758f" />
                <p>MySQL</p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">⚙️ Tools & Platforms</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <FaGitAlt size={40} color="#f34f29" />
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub size={40} color="#ffffff" />
                <p>GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <SiVisualstudio size={40} color="#007acc" />
                <p>VS Code</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPostman size={40} color="#ef5b25" />
                <p>Postman</p>
              </div>
              <div className="flex flex-col items-center">
                <SiVercel size={40} color="#ffffff" />
                <p>Vercel</p>
              </div>
            </div>
          </div>

          {/* Extra */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">🧠 Additional Skills</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <SiJsonwebtokens size={40} color="#d63aff" />
                <p>JWT</p>
              </div>
              <div className="flex flex-col items-center">
                <SiLeetcode size={40} color="#ffa116" />
                <p>LeetCode</p>
              </div>
              <div className="flex flex-col items-center">
                <SiBcrypt size={40} color="#f4e542" />
                <p>Bcrypt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
