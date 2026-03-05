import profile from "../../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}

        <div>

          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Navin Ray</span>
          </h1>

          <p className="text-gray-400 mb-6">
            Full Stack  Developer passionate about building scalable web applications.
          </p>

          <div className="flex gap-4">

            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Navin Ray"
         className="w-72 h-72 rounded-full object-cover object-top scale-125 border-4 border-blue-500 shadow-xl hover:scale-110 transition duration-300"
/>

        </div>

      </div>
    </section>
  );
}

export default Hero;