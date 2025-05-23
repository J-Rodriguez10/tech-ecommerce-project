import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import ReduxProvider from "@/redux/redux-provider"

// Load the Work Sans font from Google Fonts
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Phoone",
  description:
    "Browse high-end electronics in this full-stack portfolio e-commerce site by Jesus Rodriguez.",
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
