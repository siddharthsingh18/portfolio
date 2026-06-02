import { ACHIEVEMENTS, EDUCATION_TIMELINE, EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 text-gray-200"
    >
      <div className="text-center">
        <p className="text-sm text-[#b49bff]">Resume snapshot</p>
        <h1 className="mt-2 text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Experience & Education
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {EXPERIENCE.map((item) => (
            <article
              key={`${item.org}-${item.role}`}
              className="rounded-lg border border-[#2A0E61] bg-[#03001480] p-5"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {item.role}
                  </h2>
                  <p className="text-sm text-[#b49bff]">{item.org}</p>
                </div>
                <p className="text-sm text-gray-400">{item.period}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-[#2A0E61] bg-[#03001480] p-5">
            <h2 className="text-xl font-semibold text-white">
              Education Timeline
            </h2>
            <div className="mt-5 space-y-5">
              {EDUCATION_TIMELINE.map((item) => (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="relative border-l border-[#7042f88b] pl-5"
                >
                  <div className="absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-[#b49bff]" />
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-medium text-gray-100">
                    {item.institution}
                  </h3>
                  <p className="text-sm text-[#b49bff]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#2A0E61] bg-[#03001480] p-5">
            <h2 className="text-xl font-semibold text-white">
              Achievements
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
              {ACHIEVEMENTS.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};
