import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sean Corcoran",
  description: "Full-Stack Software Engineer specializing in scalable infrastructure and entrepreneurship",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

