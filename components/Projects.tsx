"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiPython, SiC, SiCplusplus } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const projects = [
        {
            title: t("projects.conway.title"),
            description: t("projects.conway.desc"),
            longDescription: [
                "Step through generations at your own pace",
                "Save/Load system to resume games",
                "Automatic pattern repetition detection",
                "Live statistics tracking",
                "Clean modular architecture with type hints",
            ],
            tags: ["Python", "Algorithms", "OOP", "Terminal UI"],
            github: "https://github.com/guiiireg/tp-python",
            icon: SiPython,
            color: "from-yellow-400 to-yellow-600",
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
            longDescription: [
                "Custom command interpreter",
                "Built-in commands implementation",
                "Process management and execution",
                "Environment variable handling",
                "Low-level system programming",
            ],
            tags: ["C", "System Programming", "UNIX", "Shell"],
            github: "https://github.com/guiiireg/pongsh",
            icon: SiC,
            color: "from-blue-500 to-blue-700",
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
            longDescription: [
                "Custom malloc() and free() implementation",
                "Memory leak detection and reporting",
                "Defragmentation algorithms",
                "Detailed usage metrics and diagnostics",
                "Modular architecture with specialized components",
            ],
            tags: ["C", "Memory Management", "Algorithms", "Systems"],
            github: "https://github.com/guiiireg/MemAlloc",
            icon: SiCplusplus,
            color: "from-purple-500 to-pink-600",
            features: [
                t("projects.memalloc.feat1"),
                t("projects.memalloc.feat2"),
                t("projects.memalloc.feat3"),
                t("projects.memalloc.feat4"),
            ],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("projects.title")}{" "}
                        <span className="gradient-text">
                            {t("projects.projects")}
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
                        {t("projects.subtitle")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            variants={fadeInUp}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                            />

                            <div className="relative p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`p-4 bg-gradient-to-br ${project.color} rounded-xl`}
                                        >
                                            <project.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                                            aria-label="View on GitHub"
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                                            {t("projects.features")}
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.features.map(
                                                (feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                                                    >
                                                        <span>{feature}</span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                                            {t("projects.highlights")}
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.longDescription
                                                .slice(0, 4)
                                                .map((detail, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                                                    >
                                                        <span className="text-purple-600 dark:text-purple-400 mt-1">
                                                            •
                                                        </span>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        <FiGithub className="w-4 h-4" />
                                        {t("projects.github")}
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        {t("projects.learn")}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    variants={fadeInUp}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {t("projects.more")}
                    </p>
                    <a
                        href="https://github.com/guiiireg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                    >
                        <FiGithub className="w-5 h-5" />
                        {t("projects.visit")}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
