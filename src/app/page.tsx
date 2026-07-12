"use client";

import { useState } from "react";
import { Mail, ExternalLink, Terminal, Cpu, Database, Wrench, X } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      title: "Exon", 
      desc: "Hub communautaire complexe visant à centraliser mes activités sociales, vidéos et streams.", 
      context: "Projet personnel ambitieux pour regrouper ma communauté dans un environnement unifié.",
      challenges: "Architecture complexe, gestion temps réel, intégration d'APIs externes (Twitch, YouTube).",
      role: "Développeur Solo Full-Stack",
      tags: ["Laravel", "React", "Docker", "Jira"], 
      color: "from-blue-500/20 to-purple-500/20",
      link: "https://github.com/Exoncode-stream/Exon"
    },
    { 
      title: "PHP E-Commerce", 
      desc: "Application e-commerce complète en PHP natif avec séparation backend/frontend.", 
      context: "Développé de A à Z pour bien comprendre les fondations du métier (sans framework).",
      challenges: "Création d'un système MVC maison, gestion sécurisée des sessions, et paniers.",
      role: "Développeur Solo",
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
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </menu>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all hover:scale-105">
            Me contacter
          </a>
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
              Développeur Full-Stack Laravel & React
            </em>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Passionné par la création d'architectures complètes, je conçois des interfaces dynamiques et des back-ends robustes.
          </p>
          
          <menu className="flex flex-wrap items-center gap-4 m-0 p-0">
            <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20">
              Voir mes projets
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-all border border-white/10 hover:scale-105 active:scale-95">
              Me contacter
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
              <p>Bonjour ! Je suis Guireg, développeur Full-Stack en devenir. Actuellement étudiant en Bachelor à Ynov sur le campus de Nantes, je me construis au quotidien à travers des lignes de code et des projets concrets.</p>
              
              <p>Ce qui me stimule dans le développement web, c'est la capacité de partir d'une feuille blanche pour concevoir une architecture complète. J'aime tout particulièrement évoluer dans l'écosystème PHP, utiliser le framework Laravel, et créer des interfaces dynamiques avec React et JavaScript. Pour bien comprendre les fondations de notre métier, j'ai d'abord tenu à développer mon propre site e-commerce de A à Z en PHP natif.</p>
              
              <p>En ce moment, je mets toute mon énergie dans "Exon", un hub communautaire complexe développé sous Laravel et React, qui vise à centraliser mes différentes activités sociales, vidéos et streams. C'est un défi technique qui me pousse à me structurer rigoureusement avec des outils comme Jira ou Docker.</p>
              
              <p>Quand je ne suis pas en train de débugger ou d'optimiser une base de données, vous me trouverez probablement sur Overwatch ou Minecraft, plongé dans un light novel ou un anime, ou bien en plein entraînement de callisthénie.</p>
              
              <p className="text-indigo-300 font-medium">Si vous cherchez un profil autonome, qui aime le travail d'équipe et qui communique facilement, je serais ravi d'en discuter avec vous !</p>
            </article>
            <figure className="relative h-96 w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center m-0">
              {/* Placeholder for photo */}
              <i className="not-italic text-gray-500">Image professionnelle et naturelle</i>
            </figure>
          </article>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto py-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Compétences Techniques</h2>
          
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-0 p-0">
            {[
              { icon: <Terminal className="text-indigo-400" size={24}/>, title: "Front-end", skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
              { icon: <Cpu className="text-purple-400" size={24}/>, title: "Back-end", skills: ["PHP", "Laravel", "Node.js"] },
              { icon: <Database className="text-blue-400" size={24}/>, title: "Bases de données", skills: ["SQL (MySQL)", "NoSQL (MongoDB)"] },
              { icon: <Wrench className="text-green-400" size={24}/>, title: "Outils & DevOps", skills: ["Docker", "Git", "Jira"] },
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
              <li key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-white/10 transition-all list-none cursor-pointer" onClick={() => setSelectedProject(project)}>
                <figure className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-0 block`}></figure>
                <article className="relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
                  <header className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <button className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all border-none cursor-pointer">
                      <ExternalLink size={20} />
                    </button>
                  </header>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {project.desc}
                  </p>
                  <ul className="flex flex-wrap gap-2 m-0 p-0">
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

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto py-24">
          <article className="p-12 md:p-16 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05]">
            <header className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à collaborer ?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                N'hésitez pas à me contacter via ce formulaire ou directement sur mes réseaux.
              </p>
            </header>
            
            <section className="grid md:grid-cols-2 gap-12">
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Votre nom" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition-colors" />
                <input type="email" placeholder="Votre email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition-colors" />
                <textarea placeholder="Votre message" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
                <button type="submit" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all border-none cursor-pointer">
                  <Mail size={20} />
                  Envoyer le message
                </button>
              </form>
              
              <aside className="flex flex-col gap-6 justify-center">
                <h3 className="text-xl font-bold text-white mb-2">Retrouvez-moi sur</h3>
                <menu className="flex flex-col gap-4 m-0 p-0">
                  <a href="https://github.com/guiiireg" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    <strong>GitHub (guiiireg)</strong>
                  </a>
                  <a href="https://github.com/Exoncode-stream" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    <strong>GitHub (Exoncode-stream)</strong>
                  </a>
                  <a href="#" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                    <strong>YouTube</strong>
                  </a>
                </menu>
              </aside>
            </section>
          </article>
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
              <article>
                <h3 className="text-xl font-semibold text-white mb-3">Contexte du projet</h3>
                <p className="text-gray-400 leading-relaxed">{selectedProject.context}</p>
              </article>
              
              <article>
                <h3 className="text-xl font-semibold text-white mb-3">Défis techniques</h3>
                <p className="text-gray-400 leading-relaxed">{selectedProject.challenges}</p>
              </article>
              
              <article>
                <h3 className="text-xl font-semibold text-white mb-3">Mon rôle</h3>
                <p className="text-gray-400 leading-relaxed">{selectedProject.role}</p>
              </article>
              
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
