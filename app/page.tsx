import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-8">
            <span className="text-2xl font-semibold tracking-tight text-gray-900 hover:text-gray-700 transition-colors">
              SC
            </span>
            <div className="flex justify-center space-x-12">
              <Link 
                href="/projects" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link 
                href="/writing" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Writing
              </Link>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden ring-2 ring-gray-200 ring-offset-2 ring-offset-white transition-all duration-300 hover:ring-gray-400">
                <Image
                  src="/Headshot-sm.jpeg"
                  alt="Profile photo at Bixby Bridge"
                  fill
                  className="object-cover scale-110 object-center transition-transform duration-300 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
              Hi! I&apos;m Sean 👋
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Software engineer (Cornell CS &apos;22) and entrepreneur. I&apos;m currently working at ServiceNow building & deploying the company&apos;s data-streaming architecture. During my undergrad, I worked on a few student-led startups and founded&nbsp;
              <a href="https://drinkalcolyte.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Alcolyte
              </a>, a consumer goods company. Alcolyte reached $10K in monthly revenue and grew to 10K social media followers before I wound it down in November 2024 due to profitability issues & a desire to focus on tech. Figuring out what&apos;s next. See my <Link href="/projects" className="text-blue-500 hover:underline">projects</Link> page for more.
              <br /> <br />
              Outside of work I&apos;ve completed an Ironman, multiple marathons, and just finished a 50 mile ultramarathon January 11th. Stopping after this race though because I want to put everything into launching a startup - that&apos;s my new race. I also play guitar & love music 
              (<a href="https://soundcloud.com/seancorc-269889361" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Soundcloud
              </a>).
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              >
                <Link href="mailto:seancorcoran45@gmail.com" target="_blank" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              >
                <Link href="https://github.com/seancorc" target="_blank" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              >
                <Link href="https://www.linkedin.com/in/sean-corcoran-/" target="_blank" className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
            <p className="text-gray-600">Based in Los Angeles, CA</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

