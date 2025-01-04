import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Writing</h1>
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <section className="space-y-16">
          <div>
            {/* <h2 className="text-2xl font-semibold mb-6">Random Musings</h2> */}
            <ul className="space-y-3">
              <li>
                <Link href="/writing/alcolyte-lessons" className="hover:text-blue-900 transition-colors">
                  2024 September | Alcolyte Lessons
                </Link>
              </li>
              <li>
                <Link href="/writing/" className="hover:text-blue-900 transition-colors">
                  2024 January  | Test
                </Link>
              </li>
              <li>
                <Link href="/writing/" className="hover:text-blue-900 transition-colors">
                  2024 January  | Test
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h2 className="text-2xl font-semibold mb-6">Essays</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/writing/startup-ideas" className="hover:text-gray-900 transition-colors">
                  2022 October  | Finding and Validating Startup Ideas
                </Link>
              </li>
              <li>
                <Link href="/writing/lessons-learned" className="hover:text-gray-900 transition-colors">
                  2021 October  | Ten Lessons Learned From My Time at Facebook
                </Link>
              </li>
            </ul>
          </div> */}
        </section>
      </main>
    </div>
  )
}

