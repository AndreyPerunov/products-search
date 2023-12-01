"use client"

export default function Error({ message }: { message: string }) {
  return (
    <div className="h-full px-30  min-h-[70vh] rounded-lg bg-gray-200 dark:bg-slate-700 p-5 shadow-lg flex flex-col items-center justify-center">
      <p className="text-center text-gray-800 text-xl font-medium">Error</p>
      <p className="text-center text-gray-800 text-8xl mb-10 mt-5">:(</p>
    </div>
  )
}
