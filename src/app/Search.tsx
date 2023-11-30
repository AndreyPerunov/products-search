"use client"
import { useState } from "react"

export default function Search() {
  const [search, setSearch] = useState<string>("")

  return (
    <search className="bg-white p-1 rounded-2xl border-2 w-full max-w-lg flex focus-within:border-purple-500 shadow-lg">
      <input value={search} onChange={e => setSearch(e.target.value)} className="p-2 bg-transparent flex-1 focus:outline-none" type="text" placeholder="search" />
    </search>
  )
}
