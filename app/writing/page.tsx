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

        <section className="space-y-12">
          
          <div>
            {/* <h2 className="text-2xl font-semibold mb-4">Health & Fitness</h2> */}
            <ul className="space-y-3">
            {/* <li>
                <Link href="/writing/suffering" className="hover:text-gray-900 transition-colors">
                  Suffering (WIP - Will get around to it at some point)
                </Link>
              </li> */}
              <li>
                <Link href="/writing/health-and-fitness" className="hover:text-gray-900 transition-colors">
                  Health & Fitness (January 2025)
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
            <h2 className="text-2xl font-semibold mb-4">Reflections</h2>
            <ul className="space-y-3">
            </ul>
          </div> */}
        </section>
      </main>
    </div>
  )
}

