import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ChevronLeft } from 'lucide-react'

type ProjectStatus = 'active' | 'tabled' | 'archived';

interface Project {
  title: string;
  emoji: string;
  link: string;
  description: string;
  date: string;
  status: ProjectStatus;
}

const projects: Project[] = [
  {
    title: "Startup",
    emoji: "🤫",
    link: "https://emojipedia.org/shushing-face",
    description: "Left my job at ServiceNow to work on a new startup with a cofounder. Excited for this one! We'll emerge from the shadows soon 🥷",
    date: "March 2025",
    status: 'active'
  },
  {
    title: "AugmentOS Hackathon",
    emoji: "👓",
    link: "https://github.com/seancorc/AugmentedChords/blob/main/README.md",
    description: "One of ten engineers selected to participate in a smartglasses hackathon. Built a suite of music apps and won first place.",
    date: "March 2025",
    status: 'archived'
  },
  {
    title: "BIP",
    emoji: "🔨",
    link: "https://www.buildinpublic.me/",
    description: "Built an app that creates social media posts based on an AI voice interview.",
    date: "Febuary 2025",
    status: 'archived'
  },
  {
    title: "SeanGPT",
    emoji: "🤖",
    link: "https://seangpt-sean-corcorans-projects.vercel.app/",
    description: "Sean but ~AI~",
    date: "January 2025",
    status: 'archived'
  },
  {
    title: "Jack Sparrow AI",
    emoji: "🏴‍☠️",
    link: "https://jack-sparrow-ai.vercel.app/",
    description: "Built a toy chatbot to get my hands dirty with AI. Idk where the jack sparrow theme came from in my brain but I thought it was funny. Prompted it to compliment my gf for fun :)",
    date: "November 2024",
    status: 'archived'
  },
  {
    title: "Alcolyte",
    emoji: "💧",
    link: "https://drinkalcolyte.com/",
    description: "Founded a CPG startup and grew it to $10k MRR and over 10k social media followers before winding things down due to profitability challenges & a desire to focus on tech.",
    date: "Feburary 2021",
    status: 'archived'
  },
  {
    title: "ServiceNow",
    emoji: "👨‍💻",
    link: "https://www.servicenow.com/docs/bundle/yokohama-servicenow-platform/page/administer/hermes-messaging-service/concept/hermes-messaging-service.html",
    description: "Built high-scale messaging service infrastructure for a few years to pay rent and fund my entrepreneurial adventures.",
    date: "May 2020",
    status: 'archived'
  },
  {
    title: "Way",
    emoji: "💸",
    link: "https://www.linkedin.com/company/pay-with-way/",
    description: "Founding member of fintech startup. Ultimately failed due to equity disagreements.",
    date: "September 2019",
    status: 'archived'
  },
  {
      title: "Hanger",
      emoji: "👕",
      link: "https://github.com/seancorc/Hanger/",
      description: "Built tinder for buying & selling clothes.",
      date: "June 2019",
      status: 'archived'
    },
    {
      title: "Snax",
      emoji: "🍭",
      link: "https://github.com/seancorc/snax-backend",
      description: "Hackathon app for food delivery.",
      date: "April 2019",
      status: 'archived'
    },
    {
      title: "ChallengeMe",
      emoji: "🏆",
      link: "https://github.com/seancorc/ChallengeMe",
      description: "Hackathon app that gamifies personal development.",
      date: "December 2018",
      status: 'archived'
    },
  {
    title: "Spacecraft Dash",
    emoji: "👾",
    link: "https://github.com/seancorc/Spacecraft-Dash-",
    description: "Built a little iOS game in high school. Watching people smile & have fun using something I built was a transformational experience.",
    date: "July 2017",
    status: 'archived'
  }
]

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </main>
    </div>
  )
}