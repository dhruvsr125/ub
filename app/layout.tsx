import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/website/Navbar"
import Footer from "./components/website/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Urbantech Ecom - AI-Powered E-commerce Solutions",
  description:
    "Transform your e-commerce business with cutting-edge AI technology and expert strategies. Join 500+ successful brands achieving 150% average ROI increase.",
  keywords: "e-commerce optimization, AI-powered solutions, Amazon SEO, PPC management, marketplace automation",
  authors: [{ name: "Urbantech Ecom" }],
  creator: "Urbantech Ecom",
  publisher: "Urbantech Ecom",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urbantechecom.com",
    title: "Urbantech Ecom - AI-Powered E-commerce Solutions",
    description: "Transform your e-commerce business with cutting-edge AI technology and expert strategies.",
    siteName: "Urbantech Ecom",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urbantech Ecom - AI-Powered E-commerce Solutions",
    description: "Transform your e-commerce business with cutting-edge AI technology and expert strategies.",
    creator: "@urbantechecom",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`} style={{ scrollBehavior: "smooth" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
