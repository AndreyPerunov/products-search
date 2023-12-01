import Search from "../app/Search"
import Navigation from "../app/Navigation"

type Product = {
  id: number
  name: string
  price: number
  currency: string
  category: string
  description: string
}

async function getProducts() {
  const res = await fetch("https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd")
  const data = await res.json()
  return data.products as Product[]
}

export default async function Home({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const search = searchParams?.search || ""
  let page: number = Number(searchParams?.page) || 1
  let limit: number = Number(searchParams?.limit) || 12

  const products: Product[] | undefined = await getProducts()
  const productsFiltered: Product[] = products.filter(product => {
    if (!search) return true
    if (search === "") return true
    if (product.name.toLowerCase().includes(search.toLowerCase())) return true
    if (product.category.toLowerCase().includes(search.toLowerCase())) return true
    if (product.description.toLowerCase().includes(search.toLowerCase())) return true
  })
  const productsPaginated: Product[] = productsFiltered.slice((page - 1) * limit, page * limit)

  const pagesNumber: number = Math.ceil(productsFiltered.length / limit)

  return (
    <>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 mb-3 dark:from-purple-500 dark:to-pink-700">Find Your Products</h1>
      <p className="text-gray-600 font-medium mb-3">A simple way to find what you need!</p>

      <Search initialSearch={search} />

      <section className="place-items-stretch w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {productsPaginated.map(product => (
          <a key={product.id} href={"/product/" + product.id}>
            <article className="h-full min-h-[14rem] rounded-lg bg-white dark:bg-slate-800 p-5 shadow-lg flex flex-col border-2 border-transparent hover:scale-110 transition hover:border-purple-700 dark:hover:border-purple-500">
              <p className="font-medium text-gray-400 dark:text-slate-500">{product.category}</p>
              <h2 className="font-bold text-xl mb-4 dark:text-slate-100">{product.name}</h2>
              <p className="flex-1 text-sm mb-4 dark:text-slate-400">{product.description}</p>
              <p className="text-xl text-right font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 dark:from-purple-400 dark:to-pink-400">
                {product.price} {product.currency}
              </p>
            </article>
          </a>
        ))}
      </section>
      <Navigation page={page} pagesNumber={pagesNumber} search={search} />
    </>
  )
}
