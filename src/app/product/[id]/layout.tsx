export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid w-full h-full px-10 md:px-16 lg:px-24 xl:px-36">
      <a href="/" className="mb-2 ml-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 ">
        Go Back
      </a>
      {children}
    </section>
  )
}
