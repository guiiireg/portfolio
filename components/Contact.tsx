"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

export default function Contact() {
    const { t } = useLanguage();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const contactInfo = [
        {
            icon: FiMail,
            label: t("contact.email"),
            value: "guiregnael.pro@gmail.com",
            href: "mailto:guiregnael.pro@gmail.com",
            gradient: "from-red-500 to-pink-500",
        },
        {
            icon: FiPhone,
            label: t("contact.phone"),
            value: "07 81 10 58 56",
            href: "tel:0781105856",
            gradient: "from-green-500 to-emerald-500",
        },
        {
            icon: FiGithub,
            label: t("contact.github"),
            value: "github.com/guiiireg",
            href: "https://github.com/guiiireg",
            gradient: "from-gray-700 to-gray-900",
        },
        {
            icon: FiMapPin,
            label: t("contact.location"),
            value: t("contact.nantes"),
            href: "#",
            gradient: "from-blue-500 to-indigo-500",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-white dark:bg-black relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-30 animate-float" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-30 animate-float-delayed" />
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
                        <FiSend className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("contact.title")}{" "}
                        <span className="gradient-text">
                            {t("contact.touch")}
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
                        {t("contact.subtitle")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.label}
                            href={info.href}
                            target={
                                info.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                info.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                            }}
                            className={`group relative perspective-container ${
                                info.href !== "#"
                                    ? "cursor-pointer"
                                    : "cursor-default"
                            }`}
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                            />

                            <div className="relative glass-effect rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                {/* Gradient overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                                />

                                <div className="relative">
                                    <motion.div
                                        className={`inline-flex p-4 bg-gradient-to-br ${info.gradient} rounded-xl mb-4 relative overflow-hidden`}
                                        whileHover={{
                                            rotate: [0, -10, 10, 0],
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
                                        <info.icon className="w-6 h-6 text-white relative z-10" />
                                    </motion.div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {info.label}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm break-words">
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <ContactForm />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    variants={fadeInUp}
                    className="mt-12 text-center"
                >
                    <div className="glass-effect inline-block px-8 py-4 rounded-2xl border border-purple-500/20">
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>{t("contact.studying")}</span>
                            <span className="font-bold gradient-text">
                                Ynov Nantes
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
