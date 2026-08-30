"use client";

import Link from "next/link";
import {
  Code2,
  Terminal,
  Database,
  Server,
  Layers,
  Mail,
  FileDown,
  GraduationCap,
  ArrowUpRight,
  Cpu,
  Boxes,
  CheckCircle2,
  Calendar,
  Briefcase,
  Globe,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4", size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4", size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const projects = [
    {
      title: "Exon",
      subtitle: "Plateforme & Hub Communautaire",
      desc: "Application web servant de point central pour partager des expérimentations logicielles, des architectures de référence et des ressources d'apprentissage pour les étudiants développeurs.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "HTML5 Sémantique", "WAI-ARIA"],
      tasks: [
        "Architecture 100% HTML5 sémantique sans conteneurs génériques, garantissant un arbre d'accessibilité propre et natif.",
        "Navigation accessible complète : repères (landmarks), support intégral du clavier et compatibilité lecteurs d'écran.",
        "Rendu statique optimisé (SSG) avec Next.js 16 pour un chargement instantané et un référencement naturel optimal.",
        "Mise en place d'un design system modulaire en thème sombre avec Tailwind CSS v4.",
        "Rédaction et intégration d'un article technique de référence sur les standards web et la structure sémantique.",
      ],
      link: "https://github.com/Exoncode-stream/Exon",
      liveUrl: "https://exon-ten.vercel.app/",
    },
    {
      title: "Code Quest",
      subtitle: "Plateforme d'apprentissage gamifiée du code",
      desc: "Application web Full-Stack permettant d'apprendre la programmation à travers des quêtes interactives inspirées du jeu de rôle, avec gain d'expérience et progression par niveaux.",
      tags: ["Java 21", "Spring Boot 4", "Angular 19", "RxJS", "PostgreSQL 16", "Hibernate / JPA", "Docker Compose", "Spring Security", "JWT", "JUnit 5"],
      tasks: [
        "Conception et développement d'une API REST découplée avec Spring Boot.",
        "Sécurisation des routes avec Spring Security et authentification stateless via JWT.",
        "Modélisation de la base de données relationnelle et persistance avec PostgreSQL et Spring Data JPA.",
        "Moteur de validation automatique des réponses et gestion de la progression utilisateur (XP, mondes, quêtes).",
        "Interface utilisateur réactive sous Angular 19 avec gestion d'état RxJS.",
        "Conteneurisation de la base de données avec Docker Compose et tests automatisés (JUnit 5, Jasmine / Karma).",
      ],
      link: "https://github.com/guiiireg/code-quest",
      liveUrl: "https://code-quest-bv1.pages.dev",
    },
    {
      title: "CityDrive Manager",
      subtitle: "Gestion de mobilité urbaine & simulateur",
      desc: "Application console orientée objet permettant de piloter une flotte de véhicules, d'enregistrer des points d'intérêt urbains et de simuler des trajets avec conditions de trafic.",
      tags: ["C# 13", ".NET 10", "POO Avancée", "Polymorphisme", "LINQ", "System.Text.Json"],
      tasks: [
        "Architecture logicielle en couches séparant modèles de domaine, services métier et interface utilisateur console.",
        "Modélisation orientée objet avancée avec classes abstraites et héritage multiple d'interfaces (thermiques, électriques, hybrides).",
        "Algorithme de calcul de distance géographique réelle basé sur la formule de Haversine.",
        "Moteur de simulation de trajets prenant en compte des conditions de trafic variables.",
        "Système de persistance et restauration des données au format JSON avec validation stricte des saisies.",
        "Recherche, tri et filtrage avancés en mémoire grâce à LINQ.",
      ],
      link: "https://github.com/guiiireg/CityDrive-Manager",
    },
    {
      title: "PHP E-Commerce",
      subtitle: "Boutique en ligne & gestion des ventes",
      desc: "Application e-commerce Full-Stack développée en PHP natif sans framework, permettant la navigation dans un catalogue, la gestion d'un panier d'achat et l'administration des commandes.",
      tags: ["PHP 8 Natif", "MySQL", "PDO", "HTML5 / CSS3", "Sessions PHP", "Transactions SQL"],
      tasks: [
        "Découplage architectural entre contrôleurs backend et vues frontend sans dépendance à un framework externe.",
        "Modélisation et requêtage SQL de la base relationnelle (utilisateurs, articles, paniers, factures).",
        "Sécurisation applicative : requêtes préparées PDO contre les injections SQL, hachage BCrypt et échappement XSS.",
        "Gestion transactionnelle des commandes SQL (ACID) avec solde virtuel, décrémentation des stocks et facturation.",
        "Gestion des sessions utilisateur et contrôle d'accès basé sur les rôles (Utilisateur / Administrateur).",
        "Espace d'administration complet : CRUD articles, gestion des stocks et modération des comptes.",
      ],
      link: "https://github.com/guiiireg/php-e-commerce",
      liveUrl: "https://guireg.alwaysdata.net",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background subtle ambient lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[400px] bg-gradient-to-bl from-blue-500/5 via-indigo-500/5 to-transparent blur-[140px]" />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="#"
            className="text-base font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
            <span>Guireg Naël</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#a-propos" className="hover:text-white transition-colors">
              À propos
            </a>
            <a href="#projets" className="hover:text-white transition-colors">
              Projets
            </a>
            <a href="#competences" className="hover:text-white transition-colors">
              Compétences
            </a>
            <a href="#formation" className="hover:text-white transition-colors">
              Formation
            </a>
            <a href="#experiences" className="hover:text-white transition-colors">
              Expériences
            </a>
            <a href="#savoir-faire" className="hover:text-white transition-colors">
              Savoir-faire
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:guiregnael.pro@gmail.com"
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-28">
        {/* 1. Section Accueil */}
        <section id="accueil" className="pt-6 sm:pt-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Recherche d&apos;alternance · Septembre 2026
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Guireg Naël
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-indigo-400 mt-2">
            Développeur Full-Stack
          </p>
          <p className="text-sm font-medium text-zinc-400 mt-1 flex items-center gap-2">
            <GraduationCap size={16} className="text-zinc-400" />
            Étudiant en développement informatique (Ynov Campus Nantes)
          </p>

          <p className="text-base sm:text-lg text-zinc-300 mt-6 leading-relaxed max-w-2xl">
            Je développe des applications web complètes, de la base de données jusqu&apos;à l&apos;écran.
            Je passe autant de temps sur la logique backend que sur des interfaces simples et fluides à utiliser au quotidien.
          </p>

          {/* Technologies principales */}
          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Technologies principales
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Java & Spring Boot",
                "PHP & Laravel",
                "TypeScript & JavaScript",
                "React & Next.js",
                "PostgreSQL & MySQL",
                "Docker & Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <nav className="flex flex-wrap items-center gap-3 mt-10" aria-label="Actions principales">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all shadow-sm active:scale-95"
            >
              Voir mes projets
              <ArrowUpRight size={16} />
            </a>

            <a
              href="mailto:guiregnael.pro@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95"
            >
              <Mail size={16} />
              Me contacter
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Guireg_Nael.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95"
            >
              <FileDown size={16} />
              Télécharger mon CV
            </a>
          </nav>
        </section>

        {/* 2. Section À propos */}
        <section id="a-propos" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>01</span>
            <span>/</span>
            <span>Présentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
            À propos de moi
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8">
              <p className="text-zinc-300 leading-relaxed text-base">
                Étudiant à Nantes, j&apos;ai commencé le développement par curiosité avant d&apos;en faire mon quotidien.
                Ce qui me plaît le plus, c&apos;est de comprendre comment s&apos;articule une application de A à Z :
                modéliser une base de données, concevoir des API fiables et brancher le tout sur une interface fluide.
                J&apos;aime travailler en équipe, tester des solutions concrètes et livrer du code lisible, testé et maintenable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  <GraduationCap size={15} className="text-indigo-400" />
                  Formation
                </div>
                <p className="text-sm font-semibold text-white">Ynov Campus Nantes</p>
                <p className="text-xs text-zinc-400 mt-0.5">Bachelor 3ème année - Dév. informatique</p>
              </div>

              <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  <Briefcase size={15} className="text-emerald-400" />
                  Recherche
                </div>
                <p className="text-sm font-semibold text-white">Alternance Full-Stack / Backend</p>
                <p className="text-xs text-zinc-400 mt-0.5">Disponible dès Septembre 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Section Projets */}
        <section id="projets" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>02</span>
            <span>/</span>
            <span>Réalisations</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Projets réalisés
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Sélection d&apos;applications complètes et d&apos;architectures logicielles développées récemment.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <header className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/60 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {"liveUrl" in project && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 hover:text-white transition-all w-fit"
                      >
                        <Globe size={14} />
                        <span>Visiter le site</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-200 border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-all w-fit"
                    >
                      <GithubIcon size={14} />
                      <span>Voir sur GitHub</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </header>

                <p className="text-sm text-zinc-300 leading-relaxed mt-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-800/70 border border-zinc-700/50 text-xs font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Travail réalisé */}
                <div className="mt-5 pt-4 border-t border-zinc-800/40">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Travail réalisé &amp; aspects techniques
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                    {project.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Section Compétences techniques */}
        <section id="competences" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>03</span>
            <span>/</span>
            <span>Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Compétences techniques
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Technologies et outils manipulés au quotidien pour concevoir des systèmes complets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Code2 size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Langages</h3>
              </div>
              <p className="text-sm font-mono text-zinc-300 leading-relaxed">
                Java · PHP · C# · JavaScript · TypeScript · SQL
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Layers size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Frontend</h3>
              </div>
              <p className="text-sm font-mono text-zinc-300 leading-relaxed">
                HTML5 · CSS3 · React · Next.js · Angular · Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Server size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Backend</h3>
              </div>
              <p className="text-sm font-mono text-zinc-300 leading-relaxed">
                Spring Boot · Laravel · Node.js · APIs REST
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Database size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Bases de données</h3>
              </div>
              <p className="text-sm font-mono text-zinc-300 leading-relaxed">
                PostgreSQL · MySQL · SQLite · NoSQL
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Terminal size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Outils &amp; Environnement</h3>
              </div>
              <p className="text-sm font-mono text-zinc-300 leading-relaxed">
                Git · GitHub · Docker · Docker Compose · Linux (Bash/CLI)
              </p>
            </div>
          </div>
        </section>

        {/* 7. Section Formation */}
        <section id="formation" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>04</span>
            <span>/</span>
            <span>Parcours</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Formation &amp; Apprentissages
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Cursus académique et programme de spécialisation en développement informatique.
          </p>

          <article className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/60 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Ynov Campus Nantes</h3>
                <p className="text-sm text-indigo-400 font-medium">
                  Bachelor Informatique | Spécialisation Développement (3ème année)
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-mono text-zinc-300 w-fit">
                <Calendar size={13} className="text-zinc-400" />
                2024 - 2027
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <Cpu size={14} className="text-indigo-400" />
                  Développement &amp; Ingénierie
                </h4>
                <ul className="space-y-1 text-xs text-zinc-400 leading-relaxed">
                  <li>• Dév. Full-Stack (web moderne &amp; backends)</li>
                  <li>• Conception d&apos;APIs REST modulaires</li>
                  <li>• Applications mobiles &amp; desktop</li>
                  <li>• Moteurs 2D &amp; 3D (simulation / jeu)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <Database size={14} className="text-emerald-400" />
                  Bases de données &amp; Systèmes
                </h4>
                <ul className="space-y-1 text-xs text-zinc-400 leading-relaxed">
                  <li>• Administration de serveurs de bases de données</li>
                  <li>• Modèles relationnels (SQL natif, ACID)</li>
                  <li>• Modèles NoSQL appliqués à la data et à l&apos;IA</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <Boxes size={14} className="text-purple-400" />
                  Méthodes &amp; Projets Pro
                </h4>
                <ul className="space-y-1 text-xs text-zinc-400 leading-relaxed">
                  <li>• Pratiques DevOps &amp; conteneurisation</li>
                  <li>• Projets pluridisciplinaires (Ydays)</li>
                  <li>• Hackathons IA &amp; Challenges 48h</li>
                  <li>• Communication &amp; prise d&apos;initiative</li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        {/* 6. Section Expériences */}
        <section id="experiences" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>05</span>
            <span>/</span>
            <span>Expériences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Expériences professionnelles
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Expériences de terrain développant rigueur opérationnelle, communication et sens du collectif.
          </p>

          <div className="space-y-6">
            <article className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700 transition-all">
              <header className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/60 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Hôte de caisse</h3>
                  <p className="text-sm font-medium text-indigo-400">
                    Auchan · Saint-Sébastien-sur-Loire
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-mono text-zinc-300 w-fit">
                  <Calendar size={13} className="text-zinc-400" />
                  Octobre 2024 - Décembre 2024
                </div>
              </header>

              <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>Gestion rigoureuse des encaissements et adaptation rapide en période de forte affluence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>Résolution autonome des imprévus et anomalies en caisse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>Communication continue avec les collègues et responsables afin de maintenir un rythme fluide.</span>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700 transition-all">
              <header className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/60 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Bénévole Logistique &amp; Support Technique</h3>
                  <p className="text-sm font-medium text-indigo-400">
                    DevFest Nantes · Nantes
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-mono text-zinc-300 w-fit">
                  <Calendar size={13} className="text-zinc-400" />
                  Octobre 2023
                </div>
              </header>

              <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>Accueil, orientation et support auprès des conférenciers, visiteurs et professionnels de la tech.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>Coordination avec les équipes d&apos;organisation pour assurer le bon déroulement logistique de l&apos;événement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>Gestion, vérification et assistance sur le matériel technique et les salles de conférence.</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* 8. Section Ce que je sais faire */}
        <section id="savoir-faire" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>06</span>
            <span>/</span>
            <span>Savoir-faire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Ce que je sais faire
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Compétences pratiques et méthodologiques mises en œuvre sur des projets concrets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Code2 size={18} className="text-indigo-400" />
                  Développement &amp; Conception
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-400 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>Construire des API REST propres, typées et documentées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>Modéliser et administrer des bases de données SQL &amp; NoSQL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>Développer des applications web Full-Stack réactives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>Concevoir des outils CLI et applications desktop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>Écrire des tests automatisés (unitaires et intégration)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Layers size={18} className="text-blue-400" />
                  Architecture &amp; Code
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-400 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Pattern MVC et architectures logicielles en couches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Séparation stricte des responsabilités (découplage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Sécurisation (JWT, hash sécurisé, requêtes préparées)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Respect des standards HTML5 et de l&apos;accessibilité</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Terminal size={18} className="text-emerald-400" />
                  Systèmes &amp; Environnement
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-400 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>Travail quotidien sous environnement Linux et au terminal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>Conteneurisation des services (Docker &amp; Compose)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>Productivité avancée au terminal (Bash, Git)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Section GitHub */}
        <section id="github" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/40 to-zinc-900/80 border border-zinc-800 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
                <GithubIcon size={16} />
                <span>Code Source &amp; Open Source</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Explorer mon profil GitHub
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Retrouvez l&apos;ensemble de mes projets, expérimentations et contributions en code source ouvert.
              </p>
            </div>

            <a
              href="https://github.com/guiiireg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-95 shrink-0"
            >
              <GithubIcon size={18} />
              <span>@guiiireg</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* 11. Section Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-zinc-900 pt-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>07</span>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Me contacter
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mb-8 leading-relaxed">
            Vous souhaitez échanger au sujet d&apos;une opportunité d&apos;alternance, d&apos;un projet ou d&apos;une collaboration ? N&apos;hésitez pas à m&apos;écrire directement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:guiregnael.pro@gmail.com"
              className="group rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 hover:border-indigo-500/50 hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                  Email
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors break-all">
                  guiregnael.pro@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/guireg-nael/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 hover:border-blue-500/50 hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                  LinkedIn
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  Guireg Naël
                </span>
              </div>
            </a>

            <a
              href="https://github.com/guiiireg"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 hover:border-zinc-500 hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 w-fit mb-4 group-hover:scale-110 transition-transform">
                <GithubIcon size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                  GitHub
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  @guiiireg
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-10 relative z-10 bg-zinc-950/80">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>Guireg Naël · {new Date().getFullYear()}</p>
          <p className="flex items-center gap-2">
            <span>Next.js &amp; Tailwind CSS</span>
            <span>·</span>
            <a
              href="https://github.com/guiiireg/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors underline underline-offset-4"
            >
              Code source de ce site
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}




