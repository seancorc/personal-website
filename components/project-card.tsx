"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  link: string
  title: string
  description: string
  emoji: string
}

export function ProjectCard({ link, title, description, emoji }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <span className="text-xl">{emoji}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

