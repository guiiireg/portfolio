"use client";

import { motion } from "framer-motion";
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGit,
    SiLinux,
    SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FiTrendingUp } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const skillsWithProgress = [
        {
            category: t("skills.primary"),
            items: [
                {
                    name: "C",
                    icon: SiC,
                    color: "text-blue-600 dark:text-blue-400",
                    bgColor: "bg-blue-500",
                    level: t("skills.level.advanced"),
                    progress: 90,
                },
                {
                    name: "C++",
                    icon: SiCplusplus,
                    color: "text-blue-700 dark:text-blue-500",
                    bgColor: "bg-blue-600",
                    level: t("skills.level.advanced"),
                    progress: 85,
                },
            ],
        },
        {
            category: t("skills.secondary"),
            items: [
                {
                    name: "Python",
                    icon: SiPython,
                    color: "text-yellow-500 dark:text-yellow-400",
                    bgColor: "bg-yellow-500",
                    level: t("skills.level.intermediate"),
                    progress: 75,
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    color: "text-yellow-400 dark:text-yellow-300",
                    bgColor: "bg-yellow-400",
                    level: t("skills.level.intermediate"),
                    progress: 70,
                },
                {
                    name: "HTML5",
                    icon: SiHtml5,
                    color: "text-orange-600 dark:text-orange-400",
                    bgColor: "bg-orange-500",
                    level: t("skills.level.intermediate"),
                    progress: 80,
                },
                {
                    name: "CSS3",
                    icon: SiCss3,
                    color: "text-blue-500 dark:text-blue-400",
                    bgColor: "bg-blue-500",
                    level: t("skills.level.intermediate"),
                    progress: 75,
                },
            ],
        },
        {
            category: t("skills.tools"),
            items: [
                {
                    name: "Git",
                    icon: SiGit,
                    color: "text-orange-600 dark:text-orange-400",
                    bgColor: "bg-orange-600",
                    level: t("skills.level.proficient"),
                    progress: 85,
                },
                {
                    name: "GitHub",
                    icon: SiGithub,
                    color: "text-gray-800 dark:text-gray-200",
                    bgColor: "bg-gray-700",
                    level: t("skills.level.proficient"),
                    progress: 80,
                },
                {
                    name: "Linux",
                    icon: SiLinux,
                    color: "text-yellow-600 dark:text-yellow-400",
                    bgColor: "bg-yellow-600",
                    level: t("skills.level.proficient"),
                    progress: 85,
                },
                {
                    name: "VS Code",
                    icon: VscCode,
                    color: "text-blue-500 dark:text-blue-400",
                    bgColor: "bg-blue-500",
                    level: t("skills.level.proficient"),
                    progress: 90,
                },
            ],
        },
    ];

    const specializations = [
        {
            title: t("skills.spec1.title"),
            description: t("skills.spec1.desc"),
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: t("skills.spec2.title"),
            description: t("skills.spec2.desc"),
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: t("skills.spec3.title"),
            description: t("skills.spec3.desc"),
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: t("skills.spec4.title"),
            description: t("skills.spec4.desc"),
            gradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-black relative overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-30 animate-float" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-30 animate-float-delayed" />
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
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="inline-block mb-4"
                    >
                        <FiTrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("skills.title")}{" "}
                        <span className="gradient-text">
                            {t("skills.skills")}
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
                        {t("skills.subtitle")}
                    </p>
                </motion.div>

                {/* Skills with animated progress bars */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skillsWithProgress.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: groupIndex * 0.2,
                            }}
                            variants={fadeInUp}
                            className="glass-effect rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-lift"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse" />
                                {skillGroup.category}
                            </h3>
                            <div className="space-y-5">
                                {skillGroup.items.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay:
                                                groupIndex * 0.2 + index * 0.1,
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        className="group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <motion.div
                                                whileHover={{
                                                    rotate: 360,
                                                    scale: 1.2,
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="p-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                                            >
                                                <skill.icon
                                                    className={`w-6 h-6 ${skill.color}`}
                                                />
                                            </motion.div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-semibold">
                                                        {skill.name}
                                                    </p>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        {skill.progress}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Animated progress bar */}
                                        <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`absolute inset-y-0 left-0 ${skill.bgColor} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.progress}%`,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay:
                                                        groupIndex * 0.2 +
                                                        index * 0.1 +
                                                        0.2,
                                                    ease: "easeOut",
                                                }}
                                            />
                                            {/* Shimmer effect */}
                                            <motion.div
                                                className="absolute inset-0 shimmer"
                                                style={{
                                                    background:
                                                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Specializations in bento-style grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInUp}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        {t("skills.expertise")}{" "}
                        <span className="gradient-text">
                            {t("skills.expertise.title")}
                        </span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {specializations.map((spec, index) => (
                            <motion.div
                                key={spec.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                variants={fadeInUp}
                                whileHover={{
                                    scale: 1.03,
                                    rotateY: 5,
                                    z: 50,
                                }}
                                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black border-2 border-transparent hover:border-purple-500/30 transition-all duration-300 perspective-container"
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />
                                <motion.div
                                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${spec.gradient} rounded-full filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                                />
                                <div className="relative z-10">
                                    <motion.div
                                        className={`w-12 h-1 bg-gradient-to-r ${spec.gradient} rounded-full mb-4`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 48 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1 + 0.3,
                                        }}
                                    />
                                    <h4 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                                        {spec.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {spec.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
