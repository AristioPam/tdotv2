"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen p-6 md:p-24 bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden">
      <div className="mb-8 md:mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hubungi Saya.</h1>
          <p className="text-xl opacity-70 mb-8">
            Untuk kebutuhan rekrutmen atau kerja sama, saya dapat dihubungi
            melalui link di samping.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 rounded-2xl"
        >
          <section className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-md">Github</h1>

              <div className="h-6 w-full bg-white/50  rounded-md hover:bg-cyan-300">
                <a
                  className="justify-center items-center flex hover:text-black/100"
                  href="https://github.com/luciss41"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github.png"
                    alt="Github"
                    className="mr-2"
                    width={20}
                    height={20}
                  />
                  Kunjungi Github
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-md">Instagram</h1>

              <div className="h-6 w-full bg-white/50  rounded-md hover:bg-cyan-300">
                <a
                  className="justify-center items-center flex hover:text-black/100"
                  href="https://www.instagram.com/arst.666/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    className="mr-2"
                    width={20}
                    height={20}
                  />
                  Kunjungi Instagram
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-md">Linkedin</h1>

              <div className="h-6 w-full bg-white/50  rounded-md hover:bg-cyan-300">
                <a
                  className="justify-center items-center flex hover:text-black/100"
                  href="https://www.linkedin.com/in/aristiopamungkas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="mr-2"
                    width={20}
                    height={20}
                  />
                  Kunjungi Linkedin
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-md">Email</h1>

              <div className="h-6 w-full bg-white/50 rounded-md hover:bg-cyan-300">
                <a
                  className="justify-center items-center flex hover:text-black/100"
                  href="mailto:aristiov@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/mail.png"
                    alt="Email"
                    className="mr-2"
                    width={20}
                    height={20}
                  />
                  Kirim Email
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
