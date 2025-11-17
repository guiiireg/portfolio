"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiTerminal, FiZap } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const cards = [
        {
            icon: FiCode,
            titleKey: "about.card1.title",
            descKey: "about.card1.desc",
            gradient: "from-purple-500 to-pink-500",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            iconColor: "text-purple-600 dark:text-purple-400",
        },
        {
            icon: FiCpu,
            titleKey: "about.card2.title",
            descKey: "about.card2.desc",
            gradient: "from-blue-500 to-cyan-500",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
        },
        {
            icon: FiTerminal,
            titleKey: "about.card3.title",
            descKey: "about.card3.desc",
            gradient: "from-green-500 to-emerald-500",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            iconColor: "text-green-600 dark:text-green-400",
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" />

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
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <FiZap className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto animate-pulse" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("about.title")}{" "}
                        <span className="gradient-text">{t("about.me")}</span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeInUp}
                        className="space-y-6"
                    >
                        <div className="glass-effect p-8 rounded-2xl border border-purple-500/20">
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
                                {t("about.greeting")}
                            </h3>
                            <div className="space-y-4">
                                <motion.p
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {t("about.p1")}
                                </motion.p>
                                <motion.p
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {t("about.p2")}
                                </motion.p>
                                <motion.p
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {t("about.p3")}
                                </motion.p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                {
                                    text: t("about.tag1"),
                                    color: "purple",
                                },
                                {
                                    text: t("about.tag2"),
                                    color: "blue",
                                },
                                {
                                    text: t("about.tag3"),
                                    color: "green",
                                },
                            ].map((tag, index) => (
                                <motion.span
                                    key={tag.text}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className={`px-4 py-2 bg-${tag.color}-100 dark:bg-${tag.color}-900/30 text-${tag.color}-700 dark:text-${tag.color}-400 rounded-full text-sm font-medium cursor-default`}
                                >
                                    {tag.text}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid gap-6 perspective-container">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.titleKey}
                                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    rotateY: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4 + index * 0.1,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    rotateX: 5,
                                    z: 50,
                                }}
                                className="gradient-border group cursor-pointer"
                            >
                                <div className="gradient-border-content flex items-start gap-4 relative overflow-hidden">
                                    {/* Animated gradient overlay */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    {/* Icon with 3D effect */}
                                    <motion.div
                                        className={`relative p-4 ${card.iconBg} rounded-xl`}
                                        whileHover={{
                                            rotate: [0, -10, 10, 0],
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}
                                        />
                                        <card.icon
                                            className={`w-8 h-8 ${card.iconColor} relative z-10`}
                                        />
                                    </motion.div>

                                    <div className="flex-1 relative z-10">
                                        <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                            {t(card.titleKey)}
                                            <motion.span
                                                initial={{ x: -5, opacity: 0 }}
                                                whileInView={{
                                                    x: 0,
                                                    opacity: 1,
                                                }}
                                                className="text-purple-600 dark:text-purple-400"
                                            >
                                                →
                                            </motion.span>
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {t(card.descKey)}
                                        </p>
                                    </div>

                                    {/* Shimmer effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
