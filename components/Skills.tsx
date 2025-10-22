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
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const skills = [
        {
            category: t("skills.primary"),
            items: [
                {
                    name: "C",
                    icon: SiC,
                    color: "text-blue-600 dark:text-blue-400",
                    level: t("skills.level.advanced"),
                },
                {
                    name: "C++",
                    icon: SiCplusplus,
                    color: "text-blue-700 dark:text-blue-500",
                    level: t("skills.level.advanced"),
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
                    level: t("skills.level.intermediate"),
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    color: "text-yellow-400 dark:text-yellow-300",
                    level: t("skills.level.intermediate"),
                },
                {
                    name: "HTML5",
                    icon: SiHtml5,
                    color: "text-orange-600 dark:text-orange-400",
                    level: t("skills.level.intermediate"),
                },
                {
                    name: "CSS3",
                    icon: SiCss3,
                    color: "text-blue-500 dark:text-blue-400",
                    level: t("skills.level.intermediate"),
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
                    level: t("skills.level.proficient"),
                },
                {
                    name: "GitHub",
                    icon: SiGithub,
                    color: "text-gray-800 dark:text-gray-200",
                    level: t("skills.level.proficient"),
                },
                {
                    name: "Linux",
                    icon: SiLinux,
                    color: "text-yellow-600 dark:text-yellow-400",
                    level: t("skills.level.proficient"),
                },
                {
                    name: "VS Code",
                    icon: VscCode,
                    color: "text-blue-500 dark:text-blue-400",
                    level: t("skills.level.proficient"),
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
        <section id="skills" className="py-20 bg-white dark:bg-black">
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
                        {t("skills.title")}{" "}
                        <span className="gradient-text">
                            {t("skills.skills")}
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
                        {t("skills.subtitle")}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skills.map((skillGroup, groupIndex) => (
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
                            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center">
                                {skillGroup.category}
                            </h3>
                            <div className="space-y-4">
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
                                        className="flex items-center gap-4 p-3 bg-white dark:bg-black rounded-lg hover:scale-105 transition-transform"
                                    >
                                        <skill.icon
                                            className={`w-8 h-8 ${skill.color}`}
                                        />
                                        <div className="flex-1">
                                            <p className="font-semibold">
                                                {skill.name}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {skill.level}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Specializations */}
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
                                className="group relative overflow-hidden rounded-xl p-6 bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />
                                <h4 className="text-xl font-bold mb-2 relative z-10">
                                    {spec.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 relative z-10">
                                    {spec.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
