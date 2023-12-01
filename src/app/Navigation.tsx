import Link from "next/link"

export default function Navigation({ page, search, pagesNumber }: { page: number; search: string; pagesNumber: number }) {
  return (
    <nav className="my-5 w-full flex justify-center items-center">
      {1 < page ? (
        <Link
          className="rounded-lg bg-white dark:bg-slate-800 dark:text-slate-500 p-2 px-4 shadow-lg border-2 border-transparent hover:text-purple-700 dark:hover:text-purple-500 hover:border-purple-700 dark:hover:border-purple-500"
          href={{
            pathname: "/",
            query: {
              ...(search ? { search } : {}),
              page: page - 1
            }
          }}
        >
          {"<"}
        </Link>
      ) : (
        <span className="rounded-lg bg-white dark:bg-slate-800 dark:text-slate-700 p-2 px-4 shadow-lg border-2 border-transparent text-gray-400 cursor-not-allowed">{"<"}</span>
      )}
      <span className="mx-5 text-center dark:text-slate-500">
        {page} / {pagesNumber}
      </span>
      {pagesNumber > page ? (
        <Link
          className="rounded-lg bg-white dark:bg-slate-800 dark:text-slate-500 p-2 px-4 shadow-lg border-2 border-transparent hover:text-purple-700 dark:hover:text-purple-500 hover:border-purple-700 dark:hover:border-purple-500"
          href={{
            pathname: "/",
            query: {
              ...(search ? { search } : {}),
              page: page + 1
            }
          }}
        >
          {">"}
        </Link>
      ) : (
        <span className="rounded-lg bg-white dark:bg-slate-800 dark:text-slate-700 p-2 px-4 shadow-lg border-2 border-transparent text-gray-400 cursor-not-allowed">{">"}</span>
      )}
    </nav>
  )
}
