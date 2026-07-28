"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Terminal, Cpu, Database, X, Code2 } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      title: "Code Quest", 
      desc: "Plateforme d'apprentissage ludique et gamifiée (RPG) pour résoudre des quêtes de programmation dans des mondes virtuels.", 
      context: "Projet Full-Stack d'apprentissage interactif axé sur le découplage strict entre une API REST robuste et une Single Page Application (SPA).",
      challenges: "Système de validation automatique des réponses par Regex, gestion de la progression (XP, mondes, niveaux), sécurisation basée sur les rôles (USER/ADMIN) et persistance avec PostgreSQL.",
      role: "Développeur Solo Full-Stack",
      tags: ["Java 21", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Docker"], 
      color: "from-amber-500/20 to-indigo-500/20",
      link: "https://github.com/guiiireg/code-quest"
    },
    { 
      title: "YMMA (Ymmo)", 
      desc: "Plateforme immobilière Full-Stack moderne avec backend Java/Spring Boot et frontend React/Vite conteneurisé.", 
      context: "Projet réalisé en équipe de 3 développeurs. Application immobilière permettant la consultation, la gestion de biens immobiliers et la modélisation de bases de données.",
      challenges: "Architecture en couche DAO avec SQL natif optimisé, conteneurisation microservices avec Docker Compose, Hot Module Replacement (HMR) avec Vite, et tests d'intégration avec Testcontainers.",
      role: "Développeur Front-End (Équipe de 3)",
      tags: ["Java 21", "Spring Boot", "React", "JavaScript", "TypeScript", "MySQL", "Docker"], 
      color: "from-emerald-500/20 to-teal-500/20",
      link: "https://github.com/guiiireg/ymma"
    },
    { 
      title: "Exon", 
      desc: "Hub communautaire complexe visant à centraliser mes activités sociales, vidéos et streams.", 
      context: "Projet personnel ambitieux pour regrouper ma communauté dans un environnement unifié.",
      challenges: "Architecture complexe, gestion temps réel, intégration d'APIs externes (Twitch, YouTube).",
      role: "Développeur Solo Full-Stack",
      tags: ["Laravel", "PHP", "React", "Docker", "Jira"], 
      color: "from-blue-500/20 to-purple-500/20",
      link: "https://github.com/Exoncode-stream/Exon"
    },
    { 
      title: "PHP E-Commerce", 
      desc: "Application e-commerce complète en PHP natif avec séparation backend/frontend.", 
      context: "Projet réalisé en équipe de 4 personnes pour développer une application e-commerce complète en PHP 8 natif sans framework, afin de maîtriser les fondamentaux du développement web et la gestion d'une base de données relationnelle.",
      features: [
        "Authentification sécurisée des utilisateurs et gestion des rôles (User / Admin).",
        "Catalogue de produits interactif avec recherche par mot-clé et filtres de tri par prix et date.",
        "Gestion d'un panier persistant avec ajustement des quantités et sous-total/total.",
        "Passage de commande avec solde bancaire virtuel, décrémentation des stocks en temps réel et génération de factures.",
        "Tableau de bord d'administration (CRUD articles, modération d'utilisateurs et suivi des factures)."
      ],
      skills: [
        "Découplage architectural backend/frontend en PHP natif.",
        "Sécurisation applicative : requêtes préparées PDO contre les injections SQL, hachage des mots de passe (password_hash) et protection XSS (htmlspecialchars).",
        "Gestion des transactions SQL et intégrité de la base de données lors des commandes.",
        "Travail collaboratif sur Git/GitHub et structuration propre du code."
      ],
      learned: "Ce projet m'a permis d'assimiler les mécaniques fondamentales du web (gestion des sessions, routage HTTP, requêtes SQL natives et sécurité) avant d'utiliser des frameworks de plus haut niveau comme Laravel ou Spring Boot.",
      technicalSection: {
        architecture: "Architecture modulable en couches avec séparation stricte des contrôleurs backend et des vues frontend.",
        pipeline: ["Frontend", "PHP", "PDO", "MySQL"]
      },
      challenges: "Création d'un système de routage et de sessions maison, sécurisation globale contre les failles OWASP, et gestion atomique des stocks.",
      role: "Développeur Full-Stack (Équipe de 4)",
      tags: ["PHP 8", "MySQL", "PDO", "HTML/CSS"], 
      color: "from-indigo-500/20 to-blue-500/20",
      link: "https://github.com/guiiireg/php-e-commerce"
    },
    { 
      title: "Portfolio", 
      desc: "Le portfolio sur lequel vous naviguez actuellement ! Un site vitrine moderne et sémantique.", 
      context: "Besoin d'un espace pour présenter mes projets et compétences de manière professionnelle.",
      challenges: "Design UI/UX premium, utilisation stricte de balises sémantiques HTML5 sans utiliser de div ni de span.",
      role: "Développeur Front-End",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"], 
      color: "from-purple-500/20 to-pink-500/20",
      link: "https://github.com/guiiireg/portfolio"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background ambient blobs */}
      <figure className="fixed inset-0 overflow-hidden pointer-events-none z-0 m-0">
        <b className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] animate-blob block"></b>
        <b className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] animate-blob block" style={{ animationDelay: '2s' }}></b>
        <b className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-blob block" style={{ animationDelay: '4s' }}></b>
      </figure>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-md">
        <section className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">Guireg<strong className="text-indigo-400 font-bold">Naël</strong></a>
          <menu className="hidden md:flex gap-8 text-sm font-medium text-gray-400 m-0 p-0">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
          </menu>
        </section>
      </header>

      <article className="relative z-10 pt-32 pb-16 px-6">
        {/* Hero Section */}
        <section id="hero" className="max-w-6xl mx-auto min-h-[75vh] flex flex-col justify-center">
          <aside className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 w-fit mb-6">
            <i className="w-2 h-2 rounded-full bg-green-400 animate-pulse not-italic block"></i>
            Disponible pour de nouveaux projets
          </aside>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            Guireg Naël <br className="hidden md:block"/>
            <em className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 not-italic">
              Développeur Full-Stack
            </em>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
            Spécialisé dans la conception d'architectures web robustes et scalables. J'allie la puissance des backends <strong className="text-white font-medium">Java (Spring Boot)</strong> et <strong className="text-white font-medium">PHP (Laravel)</strong> au dynamisme des frameworks frontend modernes comme <strong className="text-white font-medium">React</strong>, <strong className="text-white font-medium">Next.js</strong> et <strong className="text-white font-medium">TypeScript</strong>.
          </p>

          <menu className="flex flex-wrap gap-2 mb-10 m-0 p-0">
            {["Java", "PHP", "TS", "JS", "React", "Next.js", "Laravel", "Spring Boot"].map((skill, index) => (
              <li key={index} className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold list-none">
                {skill}
              </li>
            ))}
          </menu>
          
          <menu className="flex flex-wrap items-center gap-4 m-0 p-0">
            <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20">
              Voir mes projets
            </a>
          </menu>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto py-24 border-t border-white/5">
          <header className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">À propos de moi</h2>
          </header>
          <article className="grid md:grid-cols-2 gap-12 items-center">
            <article className="text-gray-400 leading-relaxed text-lg flex flex-col gap-4">
              <p>Bonjour ! Je suis Guireg, développeur Full-Stack. Étudiant en Bachelor à Ynov sur le campus de Nantes, je conçois des applications web complètes en associant des backends performants et des interfaces utilisateur réactives.</p>
              
              <p>Mon expertise couvre deux écosystèmes backend majeurs : <strong className="text-gray-200">Java (Spring Boot)</strong> pour les architectures d'entreprise fortement typées et scalables, ainsi que <strong className="text-gray-200">PHP (Laravel)</strong> pour le développement d'applications réactives et bien structurées.</p>

              <p>Côté frontend, je maîtrise les langages fondamentaux (<strong className="text-gray-200">JavaScript / TypeScript</strong>) ainsi que les frameworks et bibliothèques modernes tels que <strong className="text-gray-200">React</strong> et <strong className="text-gray-200">Next.js</strong> pour créer des Single Page Applications et des sites SSR fluides et optimisés.</p>

              <p>Mes projets récents illustrent cette polyvalence : <strong className="text-gray-200">Code Quest</strong> (une plateforme d'apprentissage gamifiée en Java/Spring Boot & Angular), <strong className="text-gray-200">YMMA / Ymmo</strong> (une application immobilière en Java/Spring Boot & React conteneurisée sous Docker), ou encore <strong className="text-gray-200">Exon</strong> (hub communautaire sous Laravel & React).</p>
            </article>
            <figure className="relative h-[560px] md:h-[620px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center m-0 group shadow-2xl">
              <Image 
                src="/PP.png" 
                alt="Guireg Naël - Développeur Full-Stack" 
                fill 
                className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></figcaption>
            </figure>
          </article>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto py-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Compétences Techniques</h2>
          
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-0 p-0">
            {[
              { icon: <Code2 className="text-indigo-400" size={24}/>, title: "Langages", skills: ["Java", "PHP", "TS (TypeScript)", "JS (JavaScript)", "HTML / CSS"] },
              { icon: <Terminal className="text-purple-400" size={24}/>, title: "Front-End", skills: ["React", "Next.js", "Angular", "Tailwind CSS", "SCSS / Vite"] },
              { icon: <Cpu className="text-blue-400" size={24}/>, title: "Back-End", skills: ["Spring Boot", "Laravel", "Node.js", "REST APIs", "OpenAPI"] },
              { icon: <Database className="text-green-400" size={24}/>, title: "Databases & DevOps", skills: ["PostgreSQL", "MySQL", "Docker", "Git", "Jira"] },
            ].map((category, i) => (
              <li key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group list-none">
                <header className="flex items-center gap-4 mb-6">
                  <figure className="p-3 rounded-2xl bg-white/[0.05] m-0 block">
                    {category.icon}
                  </figure>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </header>
                <ul className="flex flex-wrap gap-2 m-0 p-0">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-gray-300 list-none">
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Projets</h2>
          
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-0 p-0">
            {projects.map((project, i) => (
              <li key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-white/10 transition-all list-none cursor-pointer flex flex-col justify-between" onClick={() => setSelectedProject(project)}>
                <figure className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-0 block`}></figure>
                <article className="relative z-10 group-hover:scale-[1.02] transition-transform duration-300 flex-1 flex flex-col justify-between">
                  <div>
                    <header className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <button className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all border-none cursor-pointer">
                        <ExternalLink size={20} />
                      </button>
                    </header>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      {project.desc}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 m-0 p-0 mt-auto">
                    {project.tags.map((tag, j) => (
                      <li key={j} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-300 list-none">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050505]/80 py-8 relative z-10">
        <section className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Guireg Naël. Tous droits réservés.
          </p>
        </section>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <dialog open className="fixed inset-0 z-[100] w-full h-full bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 m-0 border-none overflow-y-auto">
          <article className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-3xl p-8 md:p-12 shadow-2xl m-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border-none cursor-pointer"
            >
              <X size={24} />
            </button>
            
            <header className="mb-8 pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <ul className="flex flex-wrap gap-2 m-0 p-0">
                {selectedProject.tags.map((tag: string, j: number) => (
                  <li key={j} className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 text-sm font-medium list-none">
                    {tag}
                  </li>
                ))}
              </ul>
            </header>

            <section className="space-y-8">
              {selectedProject.context && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Contexte du projet</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.context}</p>
                </article>
              )}
              
              {selectedProject.features && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Fonctionnalités</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
                    {selectedProject.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </article>
              )}

              {selectedProject.skills && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Compétences mises en pratique</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
                    {selectedProject.skills.map((skill: string, idx: number) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </article>
              )}

              {selectedProject.learned && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Ce que j'ai appris</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.learned}</p>
                </article>
              )}

              {selectedProject.technicalSection && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Section Technique</h3>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-gray-300 space-y-4">
                    <p className="leading-relaxed">
                      <strong className="text-white font-medium">Architecture :</strong> {selectedProject.technicalSection.architecture}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap font-mono text-xs md:text-sm bg-black/40 p-3.5 rounded-xl border border-white/5">
                      <span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">Frontend</span>
                      <span className="text-gray-500">→</span>
                      <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">PHP</span>
                      <span className="text-gray-500">→</span>
                      <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">PDO</span>
                      <span className="text-gray-500">→</span>
                      <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">MySQL</span>
                    </div>
                  </div>
                </article>
              )}

              {selectedProject.challenges && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Défis techniques</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.challenges}</p>
                </article>
              )}
              
              {selectedProject.role && (
                <article>
                  <h3 className="text-xl font-semibold text-white mb-3">Mon rôle</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.role}</p>
                </article>
              )}
              
              <footer className="pt-8 border-t border-white/10 flex gap-4">
                <a href={selectedProject.link} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                  Code Source
                </a>
              </footer>
            </section>
          </article>
        </dialog>
      )}
    </main>
  );
}

