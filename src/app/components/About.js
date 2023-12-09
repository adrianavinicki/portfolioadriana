export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            🌟 Welcome to my profile! I'm thrilled to share my journey with you.
            🚀
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            🌍 For several years, I dedicated myself to the world of finance and
            business administration. I had the privilege of leading impactful
            projects and diverse teams, and I even ventured into launching
            companies across various countries in Latin America. 🛣️ However, I
            believe that personal and professional growth stems from embracing
            new challenges. That's why I embarked on an exciting transition into
            the world of technology. 🌐 👨‍💻 My tech journey began with Henry, an
            immersive coding bootcamp. During this transformative experience, I
            immersed myself in the realm of web development and emerged with the
            coveted title of Full Stack Developer. My primary focus and passion
            lie in the back end, where I relish building robust, efficient
            systems that power web applications. 💡 Philosophy: I strongly
            believe that the skills and mindset cultivated in my previous career
            are invaluable in the tech world. My ability to strategize, adapt,
            and lead teams brings a unique perspective to problem-solving in the
            ever-evolving tech landscape. 🌟 Why Me?: Versatility: I bring a
            rich blend of experience from the worlds of finance, business, and
            now technology. Problem-Solver: I thrive in complex problem-solving
            scenarios, whether it's optimizing financial operations or
            developing software solutions. Team Player: Collaboration is at the
            core of my work ethic, and I love working with diverse teams to
            achieve common goals.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              📫 I'm excited about the limitless possibilities that technology
              offers and eager to contribute my unique skills to innovative
              projects. If you'd like to collaborate or learn more about my
              journey, please feel free to connect with me. Together, we can
              build remarkable solutions! 💻
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="fotojpeg.png"
          />
        </div>
      </div>
    </section>
  );
}
