"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/lib/motion";

export const ProfilePhoto = () => {
  return (
    <motion.div
      variants={slideInFromRight(0.8)}
      className="relative w-full h-full flex justify-center items-center"
    >
      <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
        <Image
          src="/profile.jpg"
          alt="Siddharth Singh - AI/ML Engineer"
          fill
          className="object-cover"
          priority
          draggable={false}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-30"></div>
      </div>
    </motion.div>
  );
};
