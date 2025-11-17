"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiCheck, FiX, FiLoader } from "react-icons/fi";

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<{
        type: "idle" | "loading" | "success" | "error";
        message: string;
    }>({
        type: "idle",
        message: "",
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: "loading", message: t("contact.form.sending") });

        try {
            // Remplacez ces valeurs par vos propres clés EmailJS
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
            const templateId =
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: "guiregnael.pro@gmail.com",
                },
                publicKey
            );

            setStatus({
                type: "success",
                message: t("contact.form.success"),
            });
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset status after 5 seconds
            setTimeout(() => {
                setStatus({ type: "idle", message: "" });
            }, 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: "error",
                message: t("contact.form.error"),
            });

            // Reset error status after 5 seconds
            setTimeout(() => {
                setStatus({ type: "idle", message: "" });
            }, 5000);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-12"
        >
            <div className="relative group">
                {/* Glow effect */}
                <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                />

                <div className="relative glass-effect rounded-2xl p-8 md:p-12 border border-purple-500/20">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full filter blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full filter blur-2xl" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                            {t("contact.form.title")}
                        </h3>
                        <motion.div
                            className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                                    >
                                        {t("contact.form.name")}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 outline-none"
                                        placeholder={t("contact.form.namePlaceholder")}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                                    >
                                        {t("contact.form.email")}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 outline-none"
                                        placeholder={t("contact.form.emailPlaceholder")}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                                >
                                    {t("contact.form.subject")}{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 outline-none"
                                    placeholder={t("contact.form.subjectPlaceholder")}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                                >
                                    {t("contact.form.message")}{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 outline-none resize-none"
                                    placeholder={t("contact.form.messagePlaceholder")}
                                />
                            </div>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl flex items-center gap-3 ${
                                        status.type === "success"
                                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-300 dark:border-green-700"
                                            : status.type === "error"
                                            ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-300 dark:border-red-700"
                                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-700"
                                    }`}
                                >
                                    {status.type === "success" && (
                                        <FiCheck className="w-5 h-5" />
                                    )}
                                    {status.type === "error" && (
                                        <FiX className="w-5 h-5" />
                                    )}
                                    {status.type === "loading" && (
                                        <FiLoader className="w-5 h-5 animate-spin" />
                                    )}
                                    <p className="font-medium flex-1">
                                        {status.message}
                                    </p>
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={status.type === "loading"}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {status.type === "loading" ? (
                                        <>
                                            <FiLoader className="w-5 h-5 animate-spin" />
                                            {t("contact.form.sending")}
                                        </>
                                    ) : (
                                        t("contact.form.send")
                                    )}
                                </span>
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
