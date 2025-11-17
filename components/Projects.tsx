"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { SiPython, SiC, SiCplusplus } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function Projects() {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const projects = [
        {
            title: t("projects.conway.title"),
            description: t("projects.conway.desc"),
            tags: ["Python", "Algorithms", "OOP", "Terminal UI"],
            github: "https://github.com/guiiireg/tp-python",
            icon: SiPython,
            color: "from-yellow-400 to-yellow-600",
            bgGradient: "from-yellow-500/20 to-orange-500/20",
            features: [
                t("projects.conway.feat1"),
                t("projects.conway.feat2"),
                t("projects.conway.feat3"),
                t("projects.conway.feat4"),
            ],
        },
        {
            title: t("projects.pongsh.title"),
            description: t("projects.pongsh.desc"),
            tags: ["C", "System Programming", "UNIX", "Shell"],
            github: "https://github.com/guiiireg/pongsh",
            icon: SiC,
            color: "from-blue-500 to-blue-700",
            bgGradient: "from-blue-500/20 to-cyan-500/20",
            features: [
                t("projects.pongsh.feat1"),
                t("projects.pongsh.feat2"),
                t("projects.pongsh.feat3"),
                t("projects.pongsh.feat4"),
            ],
        },
        {
            title: t("projects.memalloc.title"),
            description: t("projects.memalloc.desc"),
            tags: ["C", "Memory Management", "Algorithms", "Systems"],
            github: "https://github.com/guiiireg/MemAlloc",
            icon: SiCplusplus,
            color: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-500/20 to-pink-500/20",
            features: [
                t("projects.memalloc.feat1"),
                t("projects.memalloc.feat2"),
                t("projects.memalloc.feat3"),
                t("projects.memalloc.feat4"),
            ],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-30 animate-float" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-30 animate-float-delayed" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="inline-block mb-4"
                    >
                        <FiFolder className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("projects.title")}{" "}
                        <span className="gradient-text">
                            {t("projects.projects")}
                        </span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
                        {t("projects.subtitle")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-1 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            variants={fadeInUp}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            whileHover={{
                                scale: 1.02,
                                rotateY: 2,
                                z: 50,
                            }}
                            className="group relative perspective-container"
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                            />

                            <div className="relative glass-effect rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
                                {/* Gradient overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                <div className="relative p-8">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Left side - Icon and Title */}
                                        <div className="lg:w-2/5">
                                            <motion.div
                                                className="flex items-start gap-6 mb-6"
                                                animate={{
                                                    x: hoveredIndex === index ? 10 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.div
                                                    className={`p-6 bg-gradient-to-br ${project.color} rounded-2xl relative overflow-hidden`}
                                                    whileHover={{
                                                        rotate: [0, -10, 10, -10, 0],
                                                        scale: 1.1,
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 shimmer"
                                                        style={{
                                                            background:
                                                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                                                        }}
                                                    />
                                                    <project.icon className="w-12 h-12 text-white relative z-10" />
                                                </motion.div>

                                                <div>
                                                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                                                        {project.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map((tag) => (
                                                            <motion.span
                                                                key={tag}
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                whileHover={{ scale: 1.1, y: -2 }}
                                                                className="px-3 py-1 text-xs font-medium glass-effect border border-purple-500/30 text-gray-700 dark:text-gray-300 rounded-full"
                                                            >
                                                                {tag}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.p
                                                className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg"
                                                animate={{
                                                    x: hoveredIndex === index ? 10 : 0,
                                                }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                {project.description}
                                            </motion.p>

                                            {/* Action buttons */}
                                            <motion.div
                                                className="flex gap-4"
                                                animate={{
                                                    x: hoveredIndex === index ? 10 : 0,
                                                }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                            >
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-medium hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 shimmer"
                                                        style={{
                                                            background:
                                                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                                                        }}
                                                    />
                                                    <FiGithub className="w-5 h-5 relative z-10" />
                                                    <span className="relative z-10">{t("projects.github")}</span>
                                                </motion.a>
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 glass-effect border-2 border-purple-600/50 dark:border-purple-400/50 text-purple-600 dark:text-purple-400 rounded-xl font-medium hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FiExternalLink className="w-5 h-5" />
                                                    <span>{t("projects.learn")}</span>
                                                </motion.a>
                                            </motion.div>
                                        </div>

                                        {/* Right side - Features */}
                                        <div className="lg:w-3/5">
                                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                <motion.div
                                                    className={`w-1 h-6 bg-gradient-to-b ${project.color} rounded-full`}
                                                    animate={{
                                                        height: hoveredIndex === index ? 32 : 24,
                                                    }}
                                                />
                                                {t("projects.features")}
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {project.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            delay: 0.1 * idx,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            x: 5,
                                                        }}
                                                        className="flex items-start gap-3 p-4 glass-effect rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                                                    >
                                                        <motion.div
                                                            className={`w-2 h-2 mt-2 bg-gradient-to-r ${project.color} rounded-full`}
                                                            animate={{
                                                                scale: [1, 1.5, 1],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: idx * 0.2,
                                                            }}
                                                        />
                                                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View more section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <div className="glass-effect inline-block p-8 rounded-2xl border border-purple-500/20">
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                            {t("projects.more")}
                        </p>
                        <motion.a
                            href="https://github.com/guiiireg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <FiGithub className="w-6 h-6 relative z-10" />
                            <span className="relative z-10">{t("projects.visit")}</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
