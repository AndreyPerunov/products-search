type Product = {
  id: number
  name: string
  price: number
  currency: string
  category: string
  description: string
}

async function getProducts(id: string) {
  const res = await fetch("https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd")
  const data: { products: Product[] } = await res.json()
  return data.products.find(item => item.id === Number(id))
}

export const metadata = {
  title: "Product Page"
}

export default async function Page({ params }: { params: { id: string } }) {
  const product: Product | undefined = await getProducts(params.id)
  return (
    <article
      className="h-full px-30 min-h-[70vh] rounded-lg bg-white dark:bg-slate-800 p-10 shadow-lg flex flex-col relative
      before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-rose-400 before:via-fuchsia-500 before:to-indigo-500 before:right-5 before:top-5 before:blur-sm"
    >
      <p className="text-right font-medium text-gray-400 dark:text-slate-500">{product!.category}</p>
      <h1 className="text-right text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 mb-20 dark:from-purple-400 dark:to-pink-400">{product!.name}</h1>

      <p className="md:pl-40 text-right flex-1 text-lg mb-2 dark:text-slate-400">{product!.description}</p>
      <p className="text-3xl text-right font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 dark:from-purple-400 dark:to-pink-400">
        {product!.price} {product!.currency}
      </p>
    </article>
  )
}
