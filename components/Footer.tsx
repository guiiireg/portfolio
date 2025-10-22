"use client";

import { FiGithub, FiMail, FiPhone, FiHeart } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 gradient-text">
                            Guireg NAEL
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {t("footer.about.desc")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            {t("footer.quick")}
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { href: "#home", label: t("nav.home") },
                                { href: "#about", label: t("nav.about") },
                                { href: "#skills", label: t("nav.skills") },
                                { href: "#projects", label: t("nav.projects") },
                                { href: "#contact", label: t("nav.contact") },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(link.href)
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}
                                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            {t("footer.contact")}
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:guiregnael.pro@gmail.com"
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                                >
                                    <FiMail className="w-4 h-4" />
                                    guiregnael.pro@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:0781105856"
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                                >
                                    <FiPhone className="w-4 h-4" />
                                    07 81 10 58 56
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/guiiireg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                                >
                                    <FiGithub className="w-4 h-4" />
                                    github.com/guiiireg
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                            © {currentYear} Guireg NAEL. {t("footer.made")}{" "}
                            <FiHeart className="w-4 h-4 text-red-500 inline" />{" "}
                            {t("footer.using")}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/guiiireg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
                                aria-label="GitHub"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:guiregnael.pro@gmail.com"
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
                                aria-label="Email"
                            >
                                <FiMail className="w-5 h-5" />
                            </a>
                            <a
                                href="tel:0781105856"
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
                                aria-label="Phone"
                            >
                                <FiPhone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
