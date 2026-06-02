import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import { LINKS, PROFILE_HIGHLIGHTS } from "@/constants";

export const Progress = () => {
  return (
    <section
      id="progress"
      className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 text-gray-200"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-[#b49bff]">Progress snapshot</p>
          <h1 className="mt-2 text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Practice, Projects & Momentum
          </h1>
        </div>

        <Link
          href={LINKS.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#7042f88b] px-4 py-2 text-sm text-gray-100 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          GitHub profile
          <FaExternalLinkAlt className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PROFILE_HIGHLIGHTS.map((item) => (
          <article
            key={item.label}
            className="rounded-lg border border-[#2A0E61] bg-[#03001480] p-5"
          >
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <h2 className="mt-3 text-base font-medium text-[#b49bff]">
              {item.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
