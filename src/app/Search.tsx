"use client"
import { useEffect, useState } from "react"

export default function Search() {
  const possibleSearches = ["ice cream", "sweet bananas", "grilling", "baking", "fresh", "meat", "seafood", "fruits", "bakery", "dairy", "vegetables", "sweets", "pasta", "snacks", "crunchy", "vanilla ice cream", "juicy sausages", "probiotic-rich yogurt", "grain bread", "breakfast essential"]
  const [placeholder, setPlaceholder] = useState<string>("...")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    setPlaceholder(possibleSearches[Math.floor(Math.random() * possibleSearches.length)])
  }, [])

  return (
    <search className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 p-1 rounded-2xl border-2 w-full max-w-lg flex focus-within:border-purple-500 shadow-lg">
      <input value={search} onChange={e => setSearch(e.target.value)} className="p-2 bg-transparent flex-1 focus:outline-none" type="text" placeholder={placeholder} />
    </search>
  )
}
