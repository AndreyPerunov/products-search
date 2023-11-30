import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Products",
    template: "%s | Products"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-100 dark:bg-slate-900"}>
        <div className="mt-32 px-5 md:px-24 lg:px-32 xl:px-48 flex flex-col items-center">{children}</div>
      </body>
    </html>
  )
}
