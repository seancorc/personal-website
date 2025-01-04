import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ChevronLeft } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Projects</h1>
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="space-y-12">
          <ProjectCard
            title="Personal Website"
            description="A showcase of my work and thoughts built with Next.js and Tailwind CSS."
            images={[
              "/projects/personal-website-1.jpg",
              "/projects/personal-website-2.jpg",
              "/projects/personal-website-3.jpg",
            ]}
          />
          <ProjectCard
            title="AI-Powered Task Manager"
            description="A task management application that uses AI to prioritize and categorize tasks."
            images={[
              "/projects/task-manager-1.jpg",
              "/projects/task-manager-2.jpg",
              "/projects/task-manager-3.jpg",
            ]}
          />
          <ProjectCard
            title="Handcrafted Wooden Desk"
            description="A non-software project: A custom-designed and handcrafted wooden desk made from reclaimed oak."
            images={[
              "/projects/wooden-desk-1.jpg",
              "/projects/wooden-desk-2.jpg",
              "/projects/wooden-desk-3.jpg",
            ]}
          />
        </div>
      </main>
    </div>
  )
}

