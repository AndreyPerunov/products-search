import { FC } from "react"

const Loading: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 mb-3">Find Your Products</h1>
      <p className="text-gray-600 font-medium mb-3">A simple way to find what you need!</p>

      <search className="animate-pulse bg-gray-400 h-14 group p-1 rounded-2xl border-2 w-full max-w-lg flex focus-within:border-purple-700 shadow-lg dark:bg-slate-800 dark:border-slate-700"></search>
      <section className="animate-pulse grid place-items-stretch w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <article key={index} className="place-self-stretch h-full min-h-[14rem] rounded-lg bg-gray-200 dark:bg-slate-700 p-5 shadow-lg flex flex-col">
              <div className="my-2 h-2 w-14 bg-gray-300 dark:bg-slate-500 rounded"></div>
              <div className="my-2 mb-5 h-2 w-20 bg-gray-400 dark:bg-slate-300 rounded"></div>
              <div className="flex-1 my-2 h-2 w-3/4 bg-gray-300 dark:bg-slate-400 rounded"></div>
              <div className="self-end my-2 h-2 w-20 bg-gray-400 dark:bg-slate-400 rounded"></div>
            </article>
          ))}
      </section>
    </>
  )
}

export default Loading
