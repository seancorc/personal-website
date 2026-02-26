"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  link: string
  title: string
  description: string
  emoji: string
  date: string
  dateEnd?: string
  status: 'active' | 'tabled' | 'archived'
}

const statusStyles = {
  active: "border-emerald-500/50",
  tabled: "border-amber-500/50",
  archived: "border-gray-400/50"
} as const

const formatDateRange = (date: string, dateEnd?: string) => {
  if (!dateEnd) return date;
  if (dateEnd === "current") return `${date} – current`;
  return `${date} – ${dateEnd}`;
};

export function ProjectCard({ link, title, description, emoji, date, dateEnd, status }: ProjectCardProps) {
  return (
    <Card className={`border-2 ${statusStyles[status]} hover:shadow-lg transition-shadow min-h-[220px]`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <span className="text-xl">{emoji}</span>
        </CardTitle>
        <div className="text-sm text-gray-500">{formatDateRange(date, dateEnd)}</div>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

