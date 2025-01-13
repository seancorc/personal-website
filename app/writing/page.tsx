import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <section className="space-y-16">
          <div>
            {/* <h2 className="text-2xl font-semibold mb-6">Recent Writing</h2> */}
            <ul className="space-y-3">
              <li>
                <Link href="/writing/endurance-reflections" className="hover:text-gray-900 transition-colors">
                  Reflections on Endurance (WIP - coming soon)
                </Link>
              </li>
              <li>
                <Link href="/writing/alcolyte-lessons" className="hover:text-gray-900 transition-colors">
                  Alcolyte Lessons (November 2024)
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h2 className="text-2xl font-semibold mb-6">Essays</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/writing/startup-ideas" className="hover:text-gray-900 transition-colors">
                  2028 October  | Startup Ideas
                </Link>
              </li>
              <li>
                <Link href="/writing/lessons-learned" className="hover:text-gray-900 transition-colors">
                  2027 October  | Blah
                </Link>
              </li>
            </ul>
          </div> */}
        </section>
      </main>
    </div>
  )
}

