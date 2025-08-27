export default function Home() {
  return (
     <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-24"
    >
      {/* Left Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Hi, I'm <span className="text-blue-500">Vikas Pandey</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
          Full-Stack Developer | MERN Stack Enthusiast
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-lg">
          I craft responsive and user-focused applications using modern tech
          like React, Node.js, MongoDB, and Next.js. Passionate about clean
          code, problem-solving, and DSA in C++.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Content: Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-end">
        <img
          src="/Profile.png" // <-- transparent background recommended
          alt="Profile"
          className="w-80 h-80 object-cover rounded-2xl shadow-lg border-2 border-gray-700"
        />
      </div>
    </section>
  );
}
