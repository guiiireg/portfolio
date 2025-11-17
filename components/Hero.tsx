"use client";

import { FiGithub, FiMail, FiPhone, FiCode, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import MultiTypingEffect from "./MultiTypingEffect";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            {/* Animated mesh background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-purple-900 -z-10" />
            <div className="absolute inset-0 mesh-background -z-10" />

            {/* Animated particles/stars */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full particle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Floating shapes with enhanced animation */}
            <motion.div
                className="absolute top-20 left-10 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-300 to-purple-400 dark:from-pink-700 dark:to-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center">
                    {/* Code decoration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-purple-500/30"
                    >
                        <FiCode className="text-purple-600 dark:text-purple-400 animate-pulse" />
                        <span className="text-sm font-mono text-purple-600 dark:text-purple-400">
                            {t("hero.hello")}
                        </span>
                        <FiStar className="text-yellow-500 animate-spin-slow" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[1.2em] perspective-container">
                            <motion.span
                                className="gradient-text inline-block"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <TypingEffect
                                    text="Guireg NAEL"
                                    speed={120}
                                    delay={500}
                                    className="gradient-text"
                                />
                            </motion.span>
                        </h1>
                        <div className="relative inline-block mb-4">
                            <motion.div
                                className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-20 blur-xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <p className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-semibold min-h-[1.2em]">
                                <MultiTypingEffect
                                    phrases={[
                                        t("hero.role1"),
                                        t("hero.role2"),
                                        t("hero.role3"),
                                        t("hero.role4"),
                                    ]}
                                    speed={100}
                                    deleteSpeed={50}
                                    pauseDuration={2000}
                                />
                            </p>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 flex items-center justify-center gap-2"
                        >
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            {t("hero.at")}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="glass-effect max-w-3xl mx-auto p-6 rounded-2xl mb-12 border border-purple-500/20">
                            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {t("hero.description")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 text-white rounded-full font-semibold overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                                initial={{ x: "0%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                {t("hero.cta.contact")}
                                <FiMail className="w-4 h-4" />
                            </span>
                        </motion.a>
                        <motion.a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#projects")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group px-8 py-4 glass-effect border-2 border-purple-600/50 dark:border-purple-400/50 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                {t("hero.cta.projects")}
                                <FiCode className="w-4 h-4" />
                            </span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex justify-center gap-4"
                    >
                        {[
                            {
                                href: "https://github.com/guiiireg",
                                icon: FiGithub,
                                label: "GitHub",
                                color: "hover:text-gray-900 dark:hover:text-white",
                            },
                            {
                                href: "mailto:guiregnael.pro@gmail.com",
                                icon: FiMail,
                                label: "Email",
                                color: "hover:text-purple-600 dark:hover:text-purple-400",
                            },
                            {
                                href: "tel:0781105856",
                                icon: FiPhone,
                                label: "Phone",
                                color: "hover:text-blue-600 dark:hover:text-blue-400",
                            },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={
                                    social.label === "GitHub"
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    social.label === "GitHub"
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className={`group relative p-4 glass-effect rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-300 ${social.color}`}
                                aria-label={social.label}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <social.icon className="w-6 h-6 relative z-10" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="w-6 h-10 border-2 border-purple-500 dark:border-purple-400 rounded-full flex justify-center relative overflow-hidden">
                        <motion.div
                            className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2"
                            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                        Scroll
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}
