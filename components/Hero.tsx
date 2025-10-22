"use client";

import { FiGithub, FiMail, FiPhone } from "react-icons/fi";
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
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-purple-900 -z-10" />

            {/* Floating shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float" />
            <div
                className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float"
                style={{ animationDelay: "1s" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-lg sm:text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
                            {t("hero.hello")}
                        </h2>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 min-h-[1.2em]">
                            <TypingEffect
                                text="Guireg NAEL"
                                speed={120}
                                delay={500}
                                className="gradient-text"
                            />
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 min-h-[1.2em]">
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
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
                            {t("hero.at")}
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {t("hero.description")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            {t("hero.cta.contact")}
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#projects")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all duration-300"
                        >
                            {t("hero.cta.projects")}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center gap-6"
                    >
                        <a
                            href="https://github.com/guiiireg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:guiregnael.pro@gmail.com"
                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
                            aria-label="Email"
                        >
                            <FiMail className="w-6 h-6" />
                        </a>
                        <a
                            href="tel:0781105856"
                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
                            aria-label="Phone"
                        >
                            <FiPhone className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
