import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Alcolyte Lessons</h1>
          <Button variant="ghost" asChild>
            <Link href="/writing" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Writing
            </Link>
          </Button>
        </div>
        <div className="text-gray-600 font-mono mb-8">2024 January</div>

        <article className="prose max-w-none">
          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">10 General Life Lessons</h2>
          
          <ol>
            <li>
              Reflect often on what achieving your goals looks like, where you are relative to those goals currently, and what is stopping you from achieving them.
              <blockquote>“The road to hell is not paved with good intentions. It is paved with lack of intention.” - Dr. Gabor Maté</blockquote>
            </li>
            <li>
              Prioritizing is hard but is the foundation of living a fulfilling life. Spend time on the highest leverage things.
            </li>
            <li>
              Align your environment with your goals. Your surroundings either facilitate or impede progress.
            </li>
            <li>
              Conviction & focus are force multipliers on work.
              <blockquote>“Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.” - Archimedes</blockquote>
            </li>
            <li>Assign an inspiring mission to your work.</li>
            <li>
              An hour of undistracted solitude can change the course of your life. Use this time for reflection.
            </li>
            <li>
              When receiving advice, consider the source. Learn from exceptional individuals in your field.
            </li>
            <li>
              Radical life change is one convicted decision away.
            </li>
            <li>
              Live with urgency but plan with longevity.
            </li>
            <li>
              Don’t take things too seriously. Combine intuition with rational thinking to live a fulfilling life.
              <blockquote>“Think lightly of yourself and deeply of the world.” - Miyamoto Musashi</blockquote>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">10 Tactical Business Lessons</h2>
          
          <ol>
            <li>
              A business grows by acquiring customers or increasing customer lifetime value (LTGP).
            </li>
            <li>
              Main levers for increasing LTGP are the value of the core offer and the brand.
            </li>
            <li>
              To increase LTGP or reduce CAC, experiment with product, persona, problem, promise, and placement.
            </li>
            <li>Maintain high talent standards.</li>
            <li>
              Don’t blindly trust experience. Ask questions when things don’t feel right.
            </li>
            <li>
              Apply the appropriate framework based on whether a decision is type 1 or type 2.
            </li>
            <li>
              A valuable core offer is worth investing time to build. It underpins long-term growth.
            </li>
            <li>
              Favor collaboration over directives when working with a team.
            </li>
            <li>
              End meetings with clear action items specifying “what,” “who,” “when,” and “why.”
            </li>
            <li>
              Start with a beachhead strategy to lower CAC and tailor solutions for specific segments.
            </li>
          </ol>
        </article>
      </main>
    </div>
  )
}