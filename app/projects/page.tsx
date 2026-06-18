import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ChevronLeft } from 'lucide-react'

type ProjectStatus = 'active' | 'tabled' | 'archived';
type ProjectCategory = 'career' | 'side';

interface Project {
  title: string;
  emoji: string;
  link: string;
  description: string;
  date: string;
  dateEnd?: string;
  status: ProjectStatus;
  category: ProjectCategory;
}

const projects: Project[] = [
  {
    title: "Kalos",
    emoji: "🩻",
    link: "https://livekalos.com",
    description: "Head of engineering.",
    date: "July 2025",
    dateEnd: "current",
    status: 'active',
    category: 'career'
  },
  {
    title: "Markdown to PDF",
    emoji: "📄",
    link: "https://markdown-to-pdf-five-zeta.vercel.app",
    description: "Paste Markdown, export a styled PDF.",
    date: "June 2026",
    status: 'archived',
    category: 'side'
  },
  {
    title: "Memorize It",
    emoji: "🧠",
    link: "https://memorize-it-ecru.vercel.app",
    description: "Memorization app for scripts and speeches.",
    date: "February 2026",
    status: 'archived',
    category: 'side'
  },
  {
    title: "PARES AI",
    emoji: "🏠",
    link: "https://www.pares.ai",
    description: "Led product for an early-stage AI startup in commercial real estate.",
    date: "March 2025",
    dateEnd: "May 2025",
    status: 'archived',
    category: 'career'
  },
  {
    title: "AugmentOS Hackathon",
    emoji: "👓",
    link: "https://github.com/seancorc/AugmentedChords/blob/main/README.md",
    description: "One of ten engineers selected to participate in a smartglasses hackathon. Built a suite of music apps and won first place.",
    date: "March 2025",
    status: 'archived',
    category: 'side'
  },
  {
    title: "BIP",
    emoji: "🔨",
    link: "https://www.buildinpublic.me/",
    description: "Web-app that creates social media posts based on an AI voice interview.",
    date: "Febuary 2025",
    status: 'archived',
    category: 'side'
  },
  {
    title: "SeanGPT",
    emoji: "🤖",
    link: "https://seangpt-sean-corcorans-projects.vercel.app/",
    description: "Sean but ~AI~",
    date: "January 2025",
    status: 'archived',
    category: 'side'
  },
  {
    title: "Jack Sparrow AI",
    emoji: "🏴‍☠️",
    link: "https://jack-sparrow-ai.vercel.app/",
    description: "Hacked together a toy chatbot to get my hands dirty with AI.",
    date: "November 2024",
    status: 'archived',
    category: 'side'
  },
  {
    title: "Alcolyte",
    emoji: "💧",
    link: "https://drinkalcolyte.com/",
    description: "Founded a CPG startup and grew it to $10k MRR and over 10k social media followers.",
    date: "February 2021",
    dateEnd: "November 2024",
    status: 'archived',
    category: 'career'
  },
  {
    title: "ServiceNow",
    emoji: "👨‍💻",
    link: "https://www.servicenow.com/docs/bundle/yokohama-servicenow-platform/page/administer/hermes-messaging-service/concept/hermes-messaging-service.html",
    description: "Developed and globally deployed ServiceNow's data streaming infrastructure which processes billions of events daily.",
    date: "May 2020",
    dateEnd: "March 2025",
    status: 'archived',
    category: 'career'
  },
  {
    title: "Way",
    emoji: "💸",
    link: "https://www.linkedin.com/company/pay-with-way/",
    description: "Founding member of a fintech startup building an online food ordering and payments platform.",
    date: "September 2019",
    dateEnd: "June 2020",
    status: 'archived',
    category: 'career'
  },
  {
      title: "Hanger",
      emoji: "👕",
      link: "https://github.com/seancorc/Hanger/",
      description: "Tinder for buying & selling clothes.",
      date: "June 2019",
      status: 'archived',
      category: 'side'
    },
    {
      title: "Snax",
      emoji: "🍭",
      link: "https://github.com/seancorc/snax-backend",
      description: "Hackathon app for food delivery.",
      date: "April 2019",
      status: 'archived',
      category: 'side'
    },
    {
      title: "ChallengeMe",
      emoji: "🏆",
      link: "https://github.com/seancorc/ChallengeMe",
      description: "Hackathon app that gamifies personal development.",
      date: "December 2018",
      status: 'archived',
      category: 'side'
    },
  {
    title: "Spacecraft Dash",
    emoji: "👾",
    link: "https://github.com/seancorc/Spacecraft-Dash-",
    description: "iOS game I built in high school. Watching people smile & have fun using something I built was a transformational experience and led me to study Computer Science at Cornell.",
    date: "July 2017",
    status: 'archived',
    category: 'side'
  }
]

const careerProjects = projects.filter((project) => project.category === 'career')
const sideQuests = projects.filter((project) => project.category === 'side')

const StatusLegend = () => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-emerald-500" />
        <span className="text-sm text-gray-600">Active</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-gray-400" />
        <span className="text-sm text-gray-600">Archived</span>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Projects</h1>
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <StatusLegend />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Side Quests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sideQuests.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}