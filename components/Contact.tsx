"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiMapPin } from "react-icons/fi";
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
            color: "from-red-500 to-pink-500",
        },
        {
            icon: FiPhone,
            label: t("contact.phone"),
            value: "07 81 10 58 56",
            href: "tel:0781105856",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: FiGithub,
            label: t("contact.github"),
            value: "github.com/guiiireg",
            href: "https://github.com/guiiireg",
            color: "from-gray-700 to-gray-900",
        },
        {
            icon: FiMapPin,
            label: t("contact.location"),
            value: t("contact.nantes"),
            href: "#",
            color: "from-blue-500 to-indigo-500",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-white dark:bg-black">
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
                        {t("contact.title")}{" "}
                        <span className="gradient-text">
                            {t("contact.touch")}
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
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
                            className={`group relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
                                info.href !== "#"
                                    ? "cursor-pointer"
                                    : "cursor-default"
                            }`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                            />

                            <div className="relative">
                                <div
                                    className={`inline-flex p-3 bg-gradient-to-br ${info.color} rounded-lg mb-4`}
                                >
                                    <info.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">
                                    {info.label}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm break-words">
                                    {info.value}
                                </p>
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
                    <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>{t("contact.studying")}</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">
                            Ynov Nantes
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
