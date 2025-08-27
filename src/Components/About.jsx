import { Section } from 'lucide'
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 pb-2">
        About Me
      </h2>

      {/* Content */}
      <div className="max-w-5xl text-center space-y-8">
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I’m{" "}
          <span className="font-semibold text-blue-400">Vikas Pandey</span>, a
          passionate and detail-oriented{" "}
          <span className="font-semibold text-yellow-400">
            Full-Stack Developer
          </span>{" "}
          with a strong foundation in{" "}
          <span className="font-semibold text-green-400">DSA (C++)</span> and
          modern web technologies. I enjoy building scalable, responsive, and
          user-friendly applications that solve real-world problems.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          ✦ Solved{" "}
          <span className="font-semibold text-purple-400">
            150+ problems on LeetCode
          </span>{" "}
          and{" "}
          <span className="font-semibold text-purple-400">
            100+ problems on GeeksforGeeks
          </span>{" "}
          using C++, which has helped me sharpen my problem-solving and
          analytical skills.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          ✦ Worked on{" "}
          <span className="font-semibold text-pink-400">5+ projects</span> using
          the <span className="text-blue-400">MERN stack</span> (MongoDB,
          Express, React, Node.js), showcasing my ability to transform ideas
          into fully functional applications.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          ✦ Strong academic knowledge in{" "}
          <span className="text-green-400">
            DBMS, Operating Systems, OOP, and Computer Networks
          </span>{" "}
          along with strong expertise in{" "}
          <span className="text-yellow-400">Next.js</span> and practical experience in{" "}
          <span className="text-yellow-400">Firebase</span>.

        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          ✦ I am a fast learner and enthusiastic about adapting to new
          technologies. My goal is to contribute to impactful projects,
          collaborate with like-minded developers, and grow as a{" "}
          <span className="text-blue-400">Software Engineer</span>.
        </p>
      </div>
    </section>
  )
}

export default About
