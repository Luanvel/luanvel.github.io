import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Javascript",
    "React",
    "TailwindCSS",
    "Angular",
    "HTML5",
    "CSS3",
    "FIGMA",
    "UI/UX Design",
  ];

  const backendSkills = [
    ".NET",
    "Python",
    "AWS",
    "SQL",
    "Java",
    "Node.js",
    "Express.js",
  ];

  const devOpsSkills = [
    "ELK Stack (Elasticsearch, Kibana)",
    "Grafana",
    "CheckMK",
    "AzureDevOps",
    "Postman",
    "SOAPUI",
    "Salesforce",
  ];

  const otherSkills = ["Git", "GitHub", "Jira", "Confluence"];

  const getDuration = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let result = "";

    if (years > 0) {
      result += years + " year";
      if (years > 1) result += "s";
    }

    if (years > 0 && months > 0) {
      result += " and ";
    }

    if (months > 0) {
      result += months + " month";
      if (months > 1) result += "s";
    }

    return result;
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-300 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border transition-all">
            <p className="text-gray-300 mb-6">
              Hi there! I'm a developer with a strong knowledge of UI/UX design.
              Since stepping into the world of development, I've been constantly
              learning and exploring new ways to improve my work. I truly enjoy
              the creative process and collaborating with others to bring
              meaningful ideas to life.
            </p>
            <p>Thanks for stopping by my portfolio!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Version Control & Ticketing
                </h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="pb-2">
                  <strong>
                    {" "}
                    Higher Vocational Training, Web Application Development{" "}
                  </strong>{" "}
                  - Institut Obert de Catalunya - IOC (2022-2025)
                </li>
                <li className="pb-2">
                  <strong> Front-End Web Development </strong> - Centres
                  Innovació i Formació Ocupacional – CIFO (2023-2024)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <ul className="space-y-4 text-gray-300 list-disc">
                <li>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer (SRE) (March 2024 - Present){" "}
                    <span className="text-cyan-400 italic sm:text-sm">
                      {getDuration("2024-03-01")}
                    </span>
                  </h4>

                  <h3 className="pt-2 pb-2">Vueling (Aktios)</h3>

                  <p className="sm:text-sm">
                    Site Reliability Engineer focused on full-stack development,
                    maintenance and automation using .NET, Angular and Python.
                    Experienced in DevOps, cloud infrastructure (AWS, Azure
                    DevOps), and monitoring tools like ELK, Grafana, and
                    Checkmk. Strong background in CRM (Salesforce), user
                    support, and database maintenance.
                  </p>
                </li>

                <li>
                  <h4 className="font-semibold">
                    {" "}
                    FrontEnd Developer + UX/UI Designer + Lead Artist (2023 -
                    Present){" "}
                    <span className="text-cyan-400 italic sm:text-sm">
                      {getDuration("2023-01-01")}
                    </span>
                  </h4>
                  <h3 className="pt-2 pb-2">Kraken's Den Studios</h3>
                  <p className="sm:text-sm">
                    Personal project combining frontend development (HTML5,
                    CSS3, Tailwind, JavaScript, React, Next.js) with 2D art and
                    UX/UI design (Figma, Photoshop, Clip Studio) integrated into
                    UE5. Led a 3-person team as Lead Artist using Agile methods;
                    part of the LevelUp 2023 Pre-Incubation Program.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
