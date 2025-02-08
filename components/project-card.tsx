"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  link: string
  title: string
  description: string
  emoji: string
  date: string
  status: 'active' | 'tabled' | 'archived'
}

const statusStyles = {
  active: "border-emerald-500/50",
  tabled: "border-amber-500/50",
  archived: "border-gray-400/50"
} as const

export function ProjectCard({ link, title, description, emoji, date, status }: ProjectCardProps) {
  return (
    <Card className={`border-2 ${statusStyles[status]} hover:shadow-lg transition-shadow`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <span className="text-xl">{emoji}</span>
        </CardTitle>
        <div className="text-sm text-gray-500">{date}</div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

