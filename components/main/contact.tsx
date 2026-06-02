import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import { LINKS } from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#090615]/90 p-10 shadow-2xl shadow-[#6c2cf8]/20 backdrop-blur-xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Let’s build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            I’m available for internships, freelance work, and full-time opportunities. Reach out any time using email or phone, and I’ll respond as soon as I can.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0f0824] p-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-2xl text-fuchsia-300">
              <FaEnvelope />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Email</p>
            <a
              href={LINKS.contact}
              className="mt-4 block text-lg font-medium text-white transition hover:text-fuchsia-300"
            >
              siddharthsingh23122005@gmail.com
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#0f0824] p-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-2xl text-fuchsia-300">
              <FaPhone />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Phone</p>
            <a
              href="tel:+918755366061"
              className="mt-4 block text-lg font-medium text-white transition hover:text-fuchsia-300"
            >
              +91 87553 66061
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#0f0824] p-8 text-center sm:col-span-2 xl:col-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Ready to talk?</p>
            <p className="mt-4 text-lg font-medium text-white leading-8">
              Click below to open your email client and send me a message right away.
            </p>
            <Link
              href={LINKS.contact}
              className="mt-8 inline-flex rounded-full bg-fuchsia-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-fuchsia-400"
            >
              Email me anytime
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
