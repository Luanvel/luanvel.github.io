import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-300 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Kraken's Den Studios</h3>
              <p className="text-gray-400 mb-4">
                Web from our game development studio (personal project)
                showcasing our portfolio and services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "TailwindCSS", "UI/UX Design"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-col">
                <a
                  href="https://www.krakensdenstudios.com/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/krakens-den-studios/web"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  Private GitHub Repo →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Azeroth Battle Pet Finder
              </h3>
              <p className="text-gray-400 mb-4">
                Explore, filter, and discover World of Warcraft battle pets by
                type in a fast and visual way.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML5", "CSS3", "BattleNet APIs"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col">
                <a
                  href="https://azeroth-bpet-finder.netlify.app/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Luanvel/azeroth-bpet-finder"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">CuiCuiRush Web</h3>
              <p className="text-gray-400 mb-4">
                Web for the mobile game CuiCuiRush (in development)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue.js", "HTML5", "CSS3"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                <a
                  href="https://cuicuirush.netlify.app/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Luanvel/cuicuirush-web"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Game Master's Codex</h3>
              <p className="text-gray-400 mb-4">
                A gallery-style image management tool designed for Game Masters,
                connected to a local SQL database for easy organization and
                retrieval (still PRIVATE project)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "REACT",
                  "Javscript",
                  "Node.js",
                  "Express.js",
                  "SQL",
                  "TailwindCSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                <a
                  href="https://github.com/Luanvel/gamemasterscodex"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  Private GitHub Repo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
