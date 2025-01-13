"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  link: string
  title: string
  description: string
  emoji: string
  date: string
}

export function ProjectCard({ link, title, description, emoji, date }: ProjectCardProps) {
  return (
    <Card>
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

