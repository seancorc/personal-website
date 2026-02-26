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
                  src="/prof-pic.jpeg"
                  alt="Profile photo at Bixby Bridge"
                  fill
                  className="object-cover scale-150 object-[center_30%] transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
              Hi! {"I'm"} Sean 👋
            </h1>
            <p className="text-lg text-gray-700 text-center">
              👉 <Link href="/projects" className="text-blue-500 hover:underline">projects</Link> to see stuff {"I've"} done.
              <br /> <br />
              👉 <Link href="/writing" className="text-blue-500 hover:underline">writing</Link>  to read thoughts {"I've"} had.
              <br /> <br />
              👉 <Link href="https://soundcloud.com/seancorc-269889361" className="text-blue-500 hover:underline" target="_blank">soundcloud</Link> to hear sounds {"I've"} made.
              </p>
          </div>
        </div>
      </main>
    </div>
  )
}

