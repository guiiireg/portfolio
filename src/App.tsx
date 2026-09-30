import { createElement, type ReactNode } from "react"

type IconName = "arrow" | "code" | "github" | "linkedin" | "mail" | "map" | "spark"

const icons: Record<IconName, ReactNode> = {
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m8.5 8-4 4 4 4m7-8 4 4-4 4M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 7.7c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v1.89c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.2H3.3V21h3.2V8.2ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.7c0-3.85-2.05-5.64-4.79-5.64-2.2 0-3.19 1.22-3.74 2.07V8.2H9.26V21h3.21v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.9 2.06 3.4V21H21v-7.3Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6.5h18v12H3v-12Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c.5 5.5 3.5 8.5 9 9-5.5.5-8.5 3.5-9 9-.5-5.5-3.5-8.5-9-9 5.5-.5 8.5-3.5 9-9Z"
        fill="currentColor"
      />
    </svg>
  ),
}

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  return (
    <span className={`${className} shrink-0 [&>svg]:size-full`}>
      {icons[name]}
    </span>
  )
}

function Link({
  href,
  children,
  className = "",
  label,
}: {
  href: string
  children: ReactNode
  className?: string
  label?: string
}) {
  return createElement(
    "a",
    {
      href,
      className,
      "aria-label": label,
      ...(href.startsWith("http")
        ? { target: "_blank", rel: "noreferrer" }
        : {}),
    },
    children,
  )
}

function Heading({
  level = 2,
  children,
  className = "",
}: {
  level?: 1 | 2 | 3
  children: ReactNode
  className?: string
}) {
  return createElement(`h${level}`, { className }, children)
}

function SectionHeader({
  index,
  title,
  intro,
}: {
  index: string
  title: string
  intro?: string
}) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          {index} / {title}
        </p>
        <Heading
          level={2}
          className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
        >
          {title}
        </Heading>
      </div>
      {intro && (
        <p className="max-w-lg text-sm leading-6 text-slate-600 md:col-span-5">
          {intro}
        </p>
      )}
    </div>
  )
}

const projects = [
  {
    number: "01",
    title: "PHP E-Commerce",
    type: "Projet solo",
    pitch:
      "Une plateforme e-commerce complète avec catalogue paginé, panier persistant, solde virtuel et espace d'administration.",
    stack: ["PHP", "MySQL", "HTML5 & CSS3", "Git & GitHub"],
    role: "Concepteur & Développeur Full-Stack, refonte de l'architecture, sécurisation et tests automatisés.",
    learning:
      "Le vrai défi a été la gestion des accès concurrents lors du paiement. J'ai mis en place des transactions SQL ACID afin d'empêcher tout surbooking de stock ou solde négatif.",
    github: "https://github.com/guiiireg/php-e-commerce",
    accent: "bg-blue-600",
  },
  {
    number: "02",
    title: "Code Quest",
    type: "Projet solo",
    pitch:
      "Une plateforme d'apprentissage du code façon RPG, conçue pour s'entraîner, relever des quêtes et monter en niveau.",
    stack: ["Angular", "Java", "Spring Boot", "Docker", "PostgreSQL"],
    role: "Développeur full-stack : conception de l'UI réactive, de l'API sécurisée par JWT et du moteur de compilation dynamique.",
    learning:
      "Exécuter du code utilisateur arbitraire posait un risque critique. J'ai isolé chaque soumission dans une sandbox Docker sans réseau avec limites mémoire et CPU.",
    github: "https://github.com/guiiireg/code-quest",
    accent: "bg-violet-600",
  },
]

const skills = [
  {
    label: "Langages",
    items: ["TypeScript", "C", "PHP", "SQL", "HTML & CSS"],
  },
  {
    label: "Frameworks & libs",
    items: ["React", "Angular", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Outils",
    items: [
      "Git & GitHub",
      "Docker",
      "PostgreSQL",
      "Figma",
      "Linux",
      "GitHub Actions",
    ],
  },
]

const certifications = [
  {
    number: "01",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description:
      "Conception d’interfaces web accessibles et adaptatives avec HTML sémantique, CSS, Flexbox et Grid.",
    topics: ["HTML", "CSS", "Responsive Design", "Accessibilité"],
  },
]

const experiences = [
  {
    period: "Novembre 2025 - Février 2026",
    title: "Développeur n8n",
    meta: "Stage · Nantes",
    text: "Participation au développement d’interfaces web, intégration d’API et résolution de bugs au sein d’une équipe agile.",
  },
  {
    period: "Depuis Février 2026",
    title: "Streamer & YouTubeur",
    meta: "Création de contenu · Indépendant",
    text: "Lives et vidéos autour du développement informatique : vulgarisation, projets en direct et animation d’une communauté tech anglophone.",
  },
  {
    period: "Octobre 2024 - Décembre 2024",
    title: "Hôte de caisse",
    meta: "Job étudiant",
    text: "Autonomie, sens du service et gestion des priorités et résolution de problèmes dans un environnement rythmé.",
  },
  {
    period: "Édition 2024",
    title: "Bénévole au DevFest",
    meta: "DevFest Nantes",
    text: "Accueil des participants, accompagnement des speakers et soutien logistique d’un événement majeur de la communauté dev.",
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link
            href="#top"
            className="flex items-center gap-3 font-bold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-full bg-slate-950 text-sm text-white">
              GN
            </span>
            <span className="hidden sm:inline">Guireg Nael</span>
          </Link>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex"
            aria-label="Navigation principale"
          >
            <Link
              href="#projets"
              className="transition-colors hover:text-slate-950"
            >
              Projets
            </Link>
            <Link
              href="#competences"
              className="transition-colors hover:text-slate-950"
            >
              Compétences
            </Link>
            <Link
              href="#certifications"
              className="transition-colors hover:text-slate-950"
            >
              Certifications
            </Link>
            <Link
              href="#parcours"
              className="transition-colors hover:text-slate-950"
            >
              Parcours
            </Link>
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Me contacter
          </Link>
        </div>
      </header>

      <main id="top">
        <section className="hero-grid overflow-hidden border-b border-slate-200">
          <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-8">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                <span className="size-2 rounded-full bg-emerald-500 availability-dot" />
                Disponible dès maintenant
              </div>
              <p className="mb-5 font-mono text-sm font-medium text-blue-600">
                Bonjour, moi c’est Guireg.
              </p>
              <Heading
                level={1}
                className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-8xl"
              >
                Je transforme des idées en expériences web{" "}
                <span className="relative inline-block text-blue-600">
                  utiles.
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-lime-400"
                    viewBox="0 0 270 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8C70 2 173 2 268 7"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Heading>
              <p className="mt-9 max-w-2xl text-lg leading-8 text-slate-600">
                Étudiant en 3ème année à Nantes Ynov Campus, je conçois des site
                web accessibles et performants et pensés pour les personnes
                utilisant ces sites.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#projets"
                  className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Découvrir mes projets
                  <Icon
                    name="arrow"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="mailto:guiregnael@ynov.com"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-950"
                >
                  <Icon name="mail" className="size-4" />
                  Écrivez-moi
                </Link>
              </div>
            </div>

            <aside className="relative lg:col-span-4">
              <div className="absolute -right-12 -top-14 size-36 rounded-full bg-lime-300 blur-3xl opacity-50" />
              <div className="relative rotate-2 rounded-4xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300 transition-transform hover:rotate-0">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                    Recherche
                  </span>
                  <Icon name="spark" className="size-6 text-lime-300" />
                </div>
                <Heading level={2} className="text-2xl font-bold leading-tight">
                  Une équipe où apprendre, contribuer et construire.
                </Heading>
                <div className="mt-8 space-y-4 border-t border-slate-700 pt-6 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">Alternance</span>
                    <span className="font-semibold">6 mois minimum</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">Stage</span>
                    <span className="font-semibold">10 semaines</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">Localisation</span>
                    <span className="flex items-center gap-2 font-semibold">
                      <Icon name="map" className="size-4 text-lime-300" />
                      Nantes (Mobile)
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="projets" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeader
              index="01"
              title="Projets sélectionnés"
              intro="Des projets qui racontent ma façon de concevoir, coder et résoudre des problèmes concrets."
            />
            <div className="space-y-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="grid lg:grid-cols-12">
                    <div
                      className={`${project.accent} flex min-h-52 flex-col justify-between p-7 text-white lg:col-span-4 lg:p-9`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm">
                          PROJET {project.number}
                        </span>
                        <Icon name="code" className="size-7" />
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-white/75">
                          {project.type}
                        </p>
                        <Heading
                          level={3}
                          className="text-4xl font-bold tracking-tight"
                        >
                          {project.title}
                        </Heading>
                      </div>
                    </div>
                    <div className="grid gap-8 p-7 lg:col-span-8 lg:grid-cols-2 lg:p-9">
                      <div>
                        <p className="text-lg font-semibold leading-7 text-slate-900">
                          {project.pitch}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={project.github}
                          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-600"
                        >
                          <Icon name="github" className="size-4" />
                          Voir le code sur GitHub
                          <Icon name="arrow" className="size-4" />
                        </Link>
                      </div>
                      <div className="space-y-5 text-sm leading-6 text-slate-600">
                        <div>
                          <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-950">
                            Mon rôle
                          </p>
                          <p>{project.role}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-5">
                          <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                            Blocage & apprentissage
                          </p>
                          <p>{project.learning}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="competences"
          className="scroll-mt-24 bg-slate-950 py-24 text-white sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                02 / Compétences
              </p>
              <Heading
                level={2}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Une boîte à outils au service du produit.
              </Heading>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Je choisis les technologies pour ce qu’elles permettent de
                construire, pas pour remplir une jauge.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl bg-slate-700 md:grid-cols-3">
              {skills.map((group, index) => (
                <div key={group.label} className="bg-slate-900 p-7 lg:p-9">
                  <div className="mb-8 flex items-center justify-between">
                    <Heading level={3} className="text-xl font-bold">
                      {group.label}
                    </Heading>
                    <span className="font-mono text-xs text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 px-3.5 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="scroll-mt-24 border-b border-slate-200 bg-blue-50 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeader
              index="03"
              title="Certifications"
              intro="Un espace dédié aux compétences validées, avec l’organisme, la date et l’identifiant de chaque certification."
            />
            <div className="max-w-3xl">
              {certifications.map((certification) => (
                <article
                  key={certification.number}
                  className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/80 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Certification {certification.number}
                    </span>
                    <span className="grid size-10 place-items-center rounded-full bg-lime-300 text-slate-950">
                      <Icon name="spark" className="size-5" />
                    </span>
                  </div>
                  <div className="mt-10">
                    <p className="font-mono text-xs text-slate-500">
                      {certification.issuer}
                    </p>
                    <Heading
                      level={3}
                      className="mt-2 text-2xl font-bold tracking-tight text-slate-950"
                    >
                      {certification.title}
                    </Heading>
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
                    {certification.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                    {certification.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-700"
                      >
                        {topic}
                      </span>
                    ))}
                    <div className="ml-auto hidden items-center text-blue-600 sm:flex">
                      <Icon name="code" className="size-5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="parcours" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeader
              index="04"
              title="Parcours & expériences"
              intro="Un parcours nourri par la formation, le terrain et l’envie de transmettre."
            />
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="sticky top-28 rounded-3xl bg-blue-600 p-8 text-white">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 font-mono text-xs">
                    EN COURS
                  </span>
                  <p className="mt-10 text-sm text-blue-100">2023 — 2026</p>
                  <Heading
                    level={3}
                    className="mt-2 text-3xl font-bold leading-tight"
                  >
                    Bachelor Informatique
                  </Heading>
                  <p className="mt-3 text-blue-100">
                    Nantes Ynov Campus · 3ème année
                  </p>
                  <div className="mt-8 border-t border-blue-400 pt-6">
                    <p className="text-sm leading-6 text-blue-50">
                      Développement web, algorithmique, architecture logicielle,
                      bases de données et DevOps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                {experiences.map((experience, index) => (
                  <article
                    key={experience.title}
                    className="relative grid gap-3 border-t border-slate-200 py-8 sm:grid-cols-12"
                  >
                    <div className="sm:col-span-3">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {experience.period}
                      </span>
                    </div>
                    <div className="sm:col-span-8">
                      <Heading level={3} className="text-xl font-bold">
                        {experience.title}
                      </Heading>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {experience.meta}
                      </p>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                        {experience.text}
                      </p>
                    </div>
                    <span className="absolute right-0 top-8 font-mono text-xs text-slate-300">
                      0{index + 1}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-5 pb-8 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-lime-300 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Un projet ? Une opportunité ?
                </p>
                <Heading
                  level={2}
                  className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl"
                >
                  Construisons quelque chose d’utile ensemble.
                </Heading>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <Link
                  href="mailto:guiregnael.pro@gmail.com"
                  className="inline-flex w-full items-center justify-between rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white lg:max-w-sm"
                >
                  guiregnael.pro@gmail.com
                  <Icon name="mail" />
                </Link>
                <div className="flex w-full gap-3 lg:max-w-sm">
                  <Link
                    href="https://github.com/guiiireg"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white/50 px-5 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-white"
                  >
                    <Icon name="github" /> GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/guireg-nael"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white/50 px-5 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-white"
                  >
                    <Icon name="linkedin" /> LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-mono">Nantes, France · Disponible maintenant</p>
      </footer>
    </div>
  )
}
