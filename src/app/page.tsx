"use client";

import Link from "next/link";
import CanvasWrapper from "@/components/CanvasWrapper";
import { motion } from "framer-motion";
import ProjectCarousel from "@/components/ProjectCarousel";
import Image from "next/image";
import Snowfall from "react-snowfall";
export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-6 md:p-24 overflow-hidden">
<Snowfall color="white"/>
      <CanvasWrapper />

      <section className="z-10 w-full max-w-5xl flex flex-col items-start justify-center h-[70vh] md:h-[80vh] pointer-events-none px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-[var(--foreground)]">
            tdotio.
          </h1>
          <p className="text-lg md:text-2xl text-[var(--foreground)] opacity-80 mb-6 md:mb-8 max-w-xs md:max-w-2xl">
            Membangun solusi frontend yang stabil, fungsional, dan mudah
            dipahami pengguna.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Resume.pdf"
              download
              className="px-6 md:px-8 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:scale-105 transition-transform text-center text-sm md:text-base"
            >
              Download CV
            </a>

            <Link
              href="/contact"
              className="px-6 md:px-8 py-3 glass-panel text-[var(--foreground)] rounded-full font-medium hover:scale-105 transition-transform text-sm md:text-base text-center"
            >
              Hubungi saya
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="z-10 w-full pb-12 md:pb-20">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pl-2 md:pl-4 text-[var(--foreground)]">
          Project
          <span className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pl-2 md:pl-2 text-gray-800">
            Saya.
          </span>
        </h2>
        <ProjectCarousel />
      </section>

      <section className="z-10 w-full pb-24 px-6 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="w-48 md:w-full aspect-square bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg shadow-xl flex items-center justify-center">
            <Image src="/AP.webp" alt="Tio" width={192} height={192} />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
            Aristio Pamungkas
          </h2>
          <div className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)] mb-6">
            UI/UX Designer & Frontend Developer
          </div>

          <p className="text-lg opacity-80 mb-6 leading-relaxed">
            Berfokus pada <strong>UI/UX</strong> dan pengembangan{" "}
            <strong>Frontend</strong>. Menggabungkan desain dan teknologi untuk
            hasil yang efektif.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-1">Tech Stack</h4>
              <p className="opacity-70 text-sm">
                Next.js, React, TypeScript, TailwindCSS, Framer Motion.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Creative / Design</h4>
              <p className="opacity-70 text-sm">
                User Flow, Interaction Design, Visual Composition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
