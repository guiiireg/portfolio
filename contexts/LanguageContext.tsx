"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero
        "hero.hello": "Hello, I'm",
        "hero.role1": "Computer Science Student",
        "hero.role2": "C/C++ Developer",
        "hero.role3": "Systems Programmer",
        "hero.role4": "Low-Level Enthusiast",
        "hero.at": "at Ynov Nantes",
        "hero.description":
            "Passionate about low-level programming and system development. Specializing in C/C++ with experience in Python, HTML, CSS, and JavaScript.",
        "hero.cta.contact": "Get In Touch",
        "hero.cta.projects": "View Projects",

        // About
        "about.title": "About",
        "about.me": "Me",
        "about.greeting": "Hello! I'm Guireg NAEL",
        "about.p1":
            "I'm a passionate computer science student at Ynov Nantes, specializing in low-level programming and system development.",
        "about.p2":
            "My journey in programming is driven by a deep fascination with how computers work at their core. I love diving into the intricacies of memory management, building custom shells, and creating efficient algorithms in C and C++.",
        "about.p3":
            "Beyond low-level development, I also explore higher-level languages like Python for automation and web technologies (HTML, CSS, JavaScript) to bring ideas to life on the web.",
        "about.tag1": "Systems Programming",
        "about.tag2": "Memory Management",
        "about.tag3": "Algorithm Design",
        "about.card1.title": "Clean Code",
        "about.card1.desc":
            "Writing maintainable, efficient, and well-documented code following best practices.",
        "about.card2.title": "System Design",
        "about.card2.desc":
            "Building robust systems from scratch with deep understanding of computer architecture.",
        "about.card3.title": "Problem Solving",
        "about.card3.desc":
            "Tackling complex challenges with analytical thinking and creative solutions.",

        // Skills
        "skills.title": "My",
        "skills.skills": "Skills",
        "skills.subtitle":
            "Technologies and tools I work with to build robust and efficient solutions",
        "skills.primary": "Primary Languages",
        "skills.secondary": "Secondary Languages",
        "skills.tools": "Tools & Technologies",
        "skills.level.advanced": "Advanced",
        "skills.level.intermediate": "Intermediate",
        "skills.level.proficient": "Proficient",
        "skills.expertise": "Areas of",
        "skills.expertise.title": "Expertise",
        "skills.spec1.title": "Systems Programming",
        "skills.spec1.desc":
            "Memory management, custom allocators, shell implementation",
        "skills.spec2.title": "Algorithm Design",
        "skills.spec2.desc":
            "Efficient algorithms, data structures, optimization",
        "skills.spec3.title": "Low-Level Development",
        "skills.spec3.desc": "Core system utilities, performance optimization",
        "skills.spec4.title": "Web Development",
        "skills.spec4.desc": "Frontend development, responsive design",

        // Projects
        "projects.title": "Featured",
        "projects.projects": "Projects",
        "projects.subtitle":
            "A showcase of my work in systems programming, algorithms, and software development",
        "projects.conway.title": "Conway's Game of Life",
        "projects.conway.desc":
            "A Python implementation of Conway's Game of Life with save/load functionality and automatic loop detection. Features include interactive gameplay, live statistics, configurable grid sizes, and clean terminal-based visualization.",
        "projects.conway.feat1": "🎮 Interactive gameplay",
        "projects.conway.feat2": "💾 Save/Load system",
        "projects.conway.feat3": "🔄 Loop detection",
        "projects.conway.feat4": "📊 Live statistics",
        "projects.pongsh.title": "PongSh - Custom C Shell",
        "projects.pongsh.desc":
            "A custom shell implementation built from scratch in C, featuring essential built-in commands like cat, echo, env, ls, and which. Demonstrates deep understanding of system calls and process management.",
        "projects.pongsh.feat1": "🐚 Custom shell interpreter",
        "projects.pongsh.feat2": "⚙️ Built-in commands",
        "projects.pongsh.feat3": "🔧 Process management",
        "projects.pongsh.feat4": "📁 File operations",
        "projects.memalloc.title": "MemAlloc - Custom Memory Allocator",
        "projects.memalloc.desc":
            "A complete memory manager implemented in pure C with advanced features including custom malloc/free, leak detection, defragmentation algorithms, and comprehensive statistical analysis.",
        "projects.memalloc.feat1": "🔧 Custom allocator",
        "projects.memalloc.feat2": "🐛 Leak detection",
        "projects.memalloc.feat3": "📊 Statistics",
        "projects.memalloc.feat4": "⚡ Defragmentation",
        "projects.highlights": "Highlights",
        "projects.features": "Key Features",
        "projects.github": "View on GitHub",
        "projects.learn": "Learn More",
        "projects.more": "Want to see more?",
        "projects.visit": "Visit My GitHub",

        // Contact
        "contact.title": "Get In",
        "contact.touch": "Touch",
        "contact.subtitle":
            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.github": "GitHub",
        "contact.location": "Location",
        "contact.nantes": "Nantes, France",
        "contact.cta.title": "Let's Work Together",
        "contact.cta.desc":
            "Whether you have a project in mind, need help with system-level programming, or just want to connect, feel free to reach out. I'm always excited to collaborate on challenging and innovative projects.",
        "contact.cta.email": "Send Me an Email",
        "contact.cta.github": "View GitHub Profile",
        "contact.studying": "Currently studying at",
        "contact.form.title": "Send Me a Message",
        "contact.form.name": "Name",
        "contact.form.namePlaceholder": "Your name",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "your.email@example.com",
        "contact.form.subject": "Subject",
        "contact.form.subjectPlaceholder": "What is this about?",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Your message here...",
        "contact.form.send": "Send Message",
        "contact.form.sending": "Sending...",
        "contact.form.success":
            "Message sent successfully! I'll get back to you soon.",
        "contact.form.error":
            "Failed to send message. Please try again or contact me directly at guiregnael.pro@gmail.com",

        // Footer
        "footer.about.desc":
            "Computer Science student at Ynov Nantes, passionate about systems programming and low-level development.",
        "footer.quick": "Quick Links",
        "footer.contact": "Contact",
        "footer.made": "Made with",
        "footer.using": "using Next.js & Tailwind CSS",
    },
    fr: {
        // Navbar
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        // Hero
        "hero.hello": "Bonjour, je suis",
        "hero.role1": "Étudiant en Informatique",
        "hero.role2": "Développeur C/C++",
        "hero.role3": "Programmeur Systèmes",
        "hero.role4": "Passionné de Bas Niveau",
        "hero.at": "à Ynov Nantes",
        "hero.description":
            "Passionné par la programmation bas niveau et le développement système. Spécialisé en C/C++ avec de l'expérience en Python, HTML, CSS et JavaScript.",
        "hero.cta.contact": "Me Contacter",
        "hero.cta.projects": "Voir les Projets",

        // About
        "about.title": "À",
        "about.me": "Propos",
        "about.greeting": "Bonjour ! Je suis Guireg NAEL",
        "about.p1":
            "Je suis un étudiant passionné en informatique à Ynov Nantes, spécialisé dans la programmation bas niveau et le développement système.",
        "about.p2":
            "Mon parcours en programmation est guidé par une fascination profonde pour le fonctionnement des ordinateurs. J'adore plonger dans les subtilités de la gestion mémoire, construire des shells personnalisés et créer des algorithmes efficaces en C et C++.",
        "about.p3":
            "Au-delà du développement bas niveau, j'explore également des langages de plus haut niveau comme Python pour l'automatisation et les technologies web (HTML, CSS, JavaScript) pour donner vie aux idées sur le web.",
        "about.tag1": "Programmation Système",
        "about.tag2": "Gestion Mémoire",
        "about.tag3": "Conception d'Algorithmes",
        "about.card1.title": "Code Propre",
        "about.card1.desc":
            "Écriture de code maintenable, efficace et bien documenté suivant les meilleures pratiques.",
        "about.card2.title": "Conception Système",
        "about.card2.desc":
            "Construction de systèmes robustes à partir de zéro avec une compréhension profonde de l'architecture informatique.",
        "about.card3.title": "Résolution de Problèmes",
        "about.card3.desc":
            "Relever des défis complexes avec une pensée analytique et des solutions créatives.",

        // Skills
        "skills.title": "Mes",
        "skills.skills": "Compétences",
        "skills.subtitle":
            "Technologies et outils que j'utilise pour construire des solutions robustes et efficaces",
        "skills.primary": "Langages Principaux",
        "skills.secondary": "Langages Secondaires",
        "skills.tools": "Outils & Technologies",
        "skills.level.advanced": "Avancé",
        "skills.level.intermediate": "Intermédiaire",
        "skills.level.proficient": "Compétent",
        "skills.expertise": "Domaines",
        "skills.expertise.title": "d'Expertise",
        "skills.spec1.title": "Programmation Système",
        "skills.spec1.desc":
            "Gestion mémoire, allocateurs personnalisés, implémentation de shell",
        "skills.spec2.title": "Conception d'Algorithmes",
        "skills.spec2.desc":
            "Algorithmes efficaces, structures de données, optimisation",
        "skills.spec3.title": "Développement Bas Niveau",
        "skills.spec3.desc":
            "Utilitaires système, optimisation des performances",
        "skills.spec4.title": "Développement Web",
        "skills.spec4.desc": "Développement frontend, design responsive",

        // Projects
        "projects.title": "Projets",
        "projects.projects": "Principaux",
        "projects.subtitle":
            "Une vitrine de mon travail en programmation système, algorithmes et développement logiciel",
        "projects.conway.title": "Jeu de la Vie de Conway",
        "projects.conway.desc":
            "Une implémentation Python du Jeu de la Vie de Conway avec fonctionnalité de sauvegarde/chargement et détection automatique de boucles. Comprend un gameplay interactif, des statistiques en direct, des tailles de grille configurables et une visualisation claire en terminal.",
        "projects.conway.feat1": "🎮 Gameplay interactif",
        "projects.conway.feat2": "💾 Système de sauvegarde",
        "projects.conway.feat3": "🔄 Détection de boucles",
        "projects.conway.feat4": "📊 Statistiques en direct",
        "projects.pongsh.title": "PongSh - Shell C Personnalisé",
        "projects.pongsh.desc":
            "Une implémentation de shell personnalisé construite de zéro en C, avec des commandes intégrées essentielles comme cat, echo, env, ls et which. Démontre une compréhension approfondie des appels système et de la gestion des processus.",
        "projects.pongsh.feat1": "🐚 Interpréteur de shell personnalisé",
        "projects.pongsh.feat2": "⚙️ Commandes intégrées",
        "projects.pongsh.feat3": "🔧 Gestion des processus",
        "projects.pongsh.feat4": "📁 Opérations sur fichiers",
        "projects.memalloc.title": "MemAlloc - Allocateur Mémoire Personnalisé",
        "projects.memalloc.desc":
            "Un gestionnaire de mémoire complet implémenté en C pur avec des fonctionnalités avancées incluant malloc/free personnalisés, détection de fuites, algorithmes de défragmentation et analyse statistique complète.",
        "projects.memalloc.feat1": "🔧 Allocateur personnalisé",
        "projects.memalloc.feat2": "🐛 Détection de fuites",
        "projects.memalloc.feat3": "📊 Statistiques",
        "projects.memalloc.feat4": "⚡ Défragmentation",
        "projects.highlights": "Points Forts",
        "projects.features": "Fonctionnalités Clés",
        "projects.github": "Voir sur GitHub",
        "projects.learn": "En Savoir Plus",
        "projects.more": "Envie d'en voir plus ?",
        "projects.visit": "Visiter Mon GitHub",

        // Contact
        "contact.title": "Entrer en",
        "contact.touch": "Contact",
        "contact.subtitle":
            "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de vos visions.",
        "contact.email": "Email",
        "contact.phone": "Téléphone",
        "contact.github": "GitHub",
        "contact.location": "Localisation",
        "contact.nantes": "Nantes, France",
        "contact.cta.title": "Travaillons Ensemble",
        "contact.cta.desc":
            "Que vous ayez un projet en tête, besoin d'aide en programmation système, ou simplement envie de discuter, n'hésitez pas à me contacter. Je suis toujours enthousiaste à l'idée de collaborer sur des projets innovants et stimulants.",
        "contact.cta.email": "M'Envoyer un Email",
        "contact.cta.github": "Voir le Profil GitHub",
        "contact.studying": "Actuellement étudiant à",
        "contact.form.title": "Envoyez-moi un Message",
        "contact.form.name": "Nom",
        "contact.form.namePlaceholder": "Votre nom",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "votre.email@exemple.com",
        "contact.form.subject": "Sujet",
        "contact.form.subjectPlaceholder": "De quoi s'agit-il ?",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Votre message ici...",
        "contact.form.send": "Envoyer le Message",
        "contact.form.sending": "Envoi en cours...",
        "contact.form.success":
            "Message envoyé avec succès ! Je vous répondrai bientôt.",
        "contact.form.error":
            "Échec de l'envoi du message. Veuillez réessayer ou me contacter directement à guiregnael.pro@gmail.com",

        // Footer
        "footer.about.desc":
            "Étudiant en informatique à Ynov Nantes, passionné par la programmation système et le développement bas niveau.",
        "footer.quick": "Liens Rapides",
        "footer.contact": "Contact",
        "footer.made": "Fait avec",
        "footer.using": "avec Next.js & Tailwind CSS",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem(
            "language",
        ) as Language | null;
        if (savedLanguage) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
        }
    };

    const t = (key: string): string => {
        return (
            translations[language][key as keyof typeof translations.en] || key
        );
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
