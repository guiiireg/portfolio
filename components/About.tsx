"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiTerminal } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                        {t("about.title")}{" "}
                        <span className="gradient-text">{t("about.me")}</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeInUp}
                    >
                        <h3 className="text-3xl font-bold mb-6">
                            {t("about.greeting")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {t("about.p1")}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {t("about.p2")}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {t("about.p3")}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                                {t("about.tag1")}
                            </span>
                            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                                {t("about.tag2")}
                            </span>
                            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                                {t("about.tag3")}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        variants={fadeInUp}
                        className="grid gap-6"
                    >
                        <div className="gradient-border">
                            <div className="gradient-border-content flex items-start gap-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                    <FiCode className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">
                                        {t("about.card1.title")}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {t("about.card1.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border">
                            <div className="gradient-border-content flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <FiCpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">
                                        {t("about.card2.title")}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {t("about.card2.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border">
                            <div className="gradient-border-content flex items-start gap-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <FiTerminal className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">
                                        {t("about.card3.title")}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {t("about.card3.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
