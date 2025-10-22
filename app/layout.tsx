import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
    title: "Guireg NAEL - Portfolio",
    description:
        "Portfolio of Guireg NAEL, Computer Science student at Ynov Nantes specializing in C/C++ development",
    keywords: [
        "Guireg NAEL",
        "Developer",
        "C",
        "C++",
        "Python",
        "Ynov Nantes",
        "Portfolio",
    ],
    authors: [{ name: "Guireg NAEL" }],
    openGraph: {
        title: "Guireg NAEL - Portfolio",
        description:
            "Portfolio of Guireg NAEL, Computer Science student at Ynov Nantes",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                const theme = localStorage.getItem('theme');
                                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                if (theme === 'dark' || (!theme && prefersDark)) {
                                    document.documentElement.classList.add('dark');
                                    document.documentElement.classList.remove('light');
                                } else {
                                    document.documentElement.classList.add('light');
                                    document.documentElement.classList.remove('dark');
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
