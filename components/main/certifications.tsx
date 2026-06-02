import Image from "next/image";
import Link from "next/link";

import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-20"
    >
      <p className="text-sm text-[#b49bff]">Verified learning</p>
      <h1 className="py-8 text-center text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Certifications
      </h1>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((certificate) => (
          <Link
            key={certificate.title}
            href={certificate.pdf}
            target="_blank"
            rel="noreferrer noopener"
            className="group overflow-hidden rounded-lg border border-[#2A0E61] bg-[#03001480] shadow-lg transition hover:border-[#7042f88b]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
              <Image
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="min-h-[56px] text-base font-semibold leading-7 text-white">
                {certificate.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400">Open certificate PDF</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
