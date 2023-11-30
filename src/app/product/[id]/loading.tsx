import { FC } from "react"

const Loading: FC = () => {
  return (
    <article className="animate-pulse h-full px-30  min-h-[70vh] rounded-lg bg-gray-200 p-5 shadow-lg flex flex-col relative">
      <div className="self-end my-2 h-2 w-20 bg-gray-300 rounded"></div>
      <div className="self-end my-2 mb-5 h-2 w-28 bg-gray-400 rounded"></div>
      <div className="self-end flex-1 my-2 h-2 w-3/4 bg-gray-300 rounded"></div>
      <div className="self-end my-2 h-2 w-20 bg-gray-400 rounded"></div>
    </article>
  )
}

export default Loading
