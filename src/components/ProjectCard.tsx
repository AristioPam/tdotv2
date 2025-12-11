'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            className="relative flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-64 h-44 md:h-32 rounded-md cursor-pointer overflow-hidden group shadow-lg"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
            style={{ background: project.image }}
            onClick={() => {
                if (project.url) {
                    window.open(project.url, '_blank');
                }
            }}
        >
            <img src={project.image} alt={project.title} className="inset-0 object-cover object-center" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm font-bold">{project.title}</h3>
                <p className="text-white/80 text-xs">{project.category}</p>
            </div>
        </motion.div>
    );
}
