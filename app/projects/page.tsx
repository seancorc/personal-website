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
    title: "Shhh",
    emoji: "🤫",
    link: "https://emojipedia.org/shushing-face",
    description: "Working on something with someone. We will emerge from the shadows soon 🥷",
    date: "March 2025",
    status: 'active'
  },
  {
    title: "AugmentOS Hackathon",
    emoji: "👓",
    link: "https://github.com/seancorc/AugmentedChords",
    description: "One of ten engineers selected to participate in smartglasses hackathon. Built suite of music apps.  .",
    date: "March 2025",
    status: 'archived'
  },
  {
    title: "BIP",
    emoji: "🔨",
    link: "https://www.buildinpublic.me/",
    description: "Built an AI journalist that makes social media posts based on a voice interview with an AI. Decided it was more of a vitamin than a painkiller so pivoted.",
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
    description: "Spent a few hours building this toy chatbot to get my hands dirty with AI. Idk where the jack sparrow theme came from in my brain but I thought it was funny. Prompted it to compliment my gf for fun :)",
    date: "November 2024",
    status: 'archived'
  },
  {
    title: "Alcolyte",
    emoji: "💧",
    link: "https://drinkalcolyte.com/",
    description: "Created the world's first electrolyte cocktail concentrate. Bootstrapped the company out of my apartment. Wound things down in November 2024 due to profitability issues & a desire to focus on tech. Learned an insane amount",
    date: "Feburary 2021",
    status: 'archived'
  },
  {
    title: "Way",
    emoji: "💸",
    link: "https://www.linkedin.com/company/pay-with-way/",
    description: "Founding member in a fintech startup created to simplify restaurant orders via mobile ordering & payments. Ultimately failed due to equity disagreements which was a very educational experience",
    date: "September 2019",
    status: 'archived'
  },
  {
      title: "Hanger",
      emoji: "👕",
      link: "https://github.com/seancorc/Hanger/",
      description: "Built tinder for buying & selling clothes. Before I could finalize dev, I got recruited to work on WAY so ended up just being a learning project",
      date: "June 2019",
      status: 'archived'
    },
    {
      title: "Snax",
      emoji: "🍭",
      link: "https://github.com/seancorc/snax-backend",
      description: "Backend developer on team which participated in hackathon developing 'Snax' - A food delivery app",
      date: "April 2019",
      status: 'archived'
    },
    {
      title: "ChallengeMe",
      emoji: "🏆",
      link: "https://github.com/seancorc/ChallengeMe",
      description: "IOS developer on team which participated in hackathon developing the 'ChallengeMe' app: an engaging tool for personal fulfillment and self-improvement",
      date: "December 2018",
      status: 'archived'
    },
  {
    title: "Spacecraft Dash",
    emoji: "👾",
    link: "https://github.com/seancorc/Spacecraft-Dash-",
    description: "The project that started it all! Created a little game in high school that solidified my love of building things for the sake of delivering value to others. Watching people smile & have fun using something I made was a transformational experience",
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