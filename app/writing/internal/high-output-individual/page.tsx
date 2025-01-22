import fs from 'fs';
import path from 'path';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

// Define the path to the HTML file
const filePath = path.join(process.cwd(), 'app', 'writing', 'internal', 'high-output-individual', 'HighOutputIndividual.html');

// Read the HTML file content
const htmlContent = fs.readFileSync(filePath, 'utf8');

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
        <div className="mb-12 flex items-center justify-between">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Sean Corcoran</h1>           
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/writing" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Writing
            </Link>
          </Button>
        </div>
          <div className="text-gray-600 font-mono">2025 January</div>
        </div>
        <div className="prose max-w-none mx-auto p-4">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </main>
    </div>
  )
}

