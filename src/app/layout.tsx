import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"
import { ReactNode } from "react"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Ping Panda",
  description: "Modern event monitoring",
  icons: [{ rel: "icon", url: "/logo.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
        <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans bg-brand-50 text-brand-950 antialiased">
          <main className="relative flex-1 flex flex-col">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
