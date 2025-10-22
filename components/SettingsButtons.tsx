"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SettingsButtons() {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-20 right-4 z-40 flex flex-col gap-3">
            {/* Theme Toggle */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-gray-700"
                aria-label="Toggle theme"
            >
                {theme === "light" ? (
                    <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                ) : (
                    <FiSun className="w-5 h-5 text-yellow-500" />
                )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="px-3 py-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-gray-700 font-bold text-sm"
                aria-label="Toggle language"
            >
                <span className="text-gray-800 dark:text-gray-200">
                    {language === "en" ? "FR" : "EN"}
                </span>
            </motion.button>
        </div>
    );
}
