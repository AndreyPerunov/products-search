"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Search({ initialSearch }: { initialSearch?: string }) {
  const [placeholder, setPlaceholder] = useState<string>("🔍")
  const [search, setSearch] = useState<string>(initialSearch || "")
  const [debouncedSearch, setDebouncedSearch] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    const possibleSearches = ["ice cream", "sweet bananas", "grilling", "baking", "fresh", "meat", "seafood", "fruits", "bakery", "dairy", "vegetables", "sweets", "pasta", "snacks", "crunchy", "vanilla ice cream", "juicy sausages", "probiotic-rich yogurt", "grain bread", "breakfast essential"]
    // Choose a random placeholder
    setPlaceholder("🔍 " + possibleSearches[Math.floor(Math.random() * possibleSearches.length)])
  }, [])

  // Debouncing search
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)

    return () => clearTimeout(timeout)
  }, [search])

  // Update the URL with the search query
  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/?search=${debouncedSearch}`)
    } else {
      router.push("/")
    }
  }, [debouncedSearch, router])

  return (
    <search className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 p-1 rounded-2xl border-2 w-full max-w-lg flex focus-within:border-purple-500 shadow-lg">
      <input value={search} onChange={e => setSearch(e.target.value)} className="p-2 bg-transparent flex-1 focus:outline-none" type="text" placeholder={placeholder} />
    </search>
  )
}
