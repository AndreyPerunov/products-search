const data = {
  products: [
    {
      id: 1,
      name: "Apple",
      price: 1.1,
      currency: "EUR",
      category: "Fruits",
      description: "Fresh and delicious apples from the local orchard."
    },
    {
      id: 2,
      name: "Banana",
      price: 0.65,
      currency: "EUR",
      category: "Fruits",
      description: "Ripe and sweet bananas, perfect for a healthy snack."
    },
    {
      id: 3,
      name: "Chicken Breast",
      price: 3.25,
      currency: "EUR",
      category: "Meat",
      description: "Boneless and skinless chicken breasts, great for grilling or baking."
    },
    {
      id: 4,
      name: "Salmon",
      price: 6.99,
      currency: "EUR",
      category: "Seafood",
      description: "Fresh Atlantic salmon fillet, high in omega-3 fatty acids."
    },
    {
      id: 5,
      name: "Bread",
      price: 2.05,
      currency: "EUR",
      category: "Bakery",
      description: "Artisanal whole grain bread, freshly baked daily."
    },
    {
      id: 6,
      name: "Milk",
      price: 1.79,
      currency: "EUR",
      category: "Dairy",
      description: "Farm-fresh whole milk, rich and creamy."
    },
    {
      id: 7,
      name: "Eggs",
      price: 1.35,
      currency: "EUR",
      category: "Dairy",
      description: "Organic free-range eggs, a breakfast essential."
    },
    {
      id: 8,
      name: "Tomato",
      price: 0.65,
      currency: "EUR",
      category: "Vegetables",
      description: "Vine-ripened tomatoes, perfect for salads and sandwiches."
    },
    {
      id: 9,
      name: "Cucumber",
      price: 0.89,
      currency: "EUR",
      category: "Vegetables",
      description: "Crisp and refreshing cucumbers, great for salads."
    },
    {
      id: 10,
      name: "Chocolate Bar",
      price: 1.95,
      currency: "EUR",
      category: "Sweets",
      description: "A decadent dark chocolate bar with almonds."
    },
    {
      id: 11,
      name: "Pasta",
      price: 1.35,
      currency: "EUR",
      category: "Pasta",
      description: "Italian-style pasta, perfect for your favorite sauces."
    },
    {
      id: 12,
      name: "Lettuce",
      price: 1.15,
      currency: "EUR",
      category: "Vegetables",
      description: "Crisp and fresh lettuce for salads and sandwiches."
    },
    {
      id: 13,
      name: "Orange Juice",
      price: 2.49,
      currency: "EUR",
      category: "Beverages",
      description: "100% pure orange juice, packed with vitamins."
    },
    {
      id: 14,
      name: "Potato Chips",
      price: 1.79,
      currency: "EUR",
      category: "Snacks",
      description: "Classic potato chips, the perfect snack."
    },
    {
      id: 15,
      name: "Ground Beef",
      price: 4.49,
      currency: "EUR",
      category: "Meat",
      description: "Ground beef for making burgers and meatballs."
    },
    {
      id: 16,
      name: "Rice",
      price: 1.99,
      currency: "EUR",
      category: "Grains",
      description: "Long-grain white rice, ideal for various dishes."
    },
    {
      id: 17,
      name: "Yogurt",
      price: 1.49,
      currency: "EUR",
      category: "Dairy",
      description: "Creamy and probiotic-rich yogurt."
    },
    {
      id: 18,
      name: "Carrots",
      price: 0.89,
      currency: "EUR",
      category: "Vegetables",
      description: "Fresh and crunchy carrots, perfect for snacking."
    },
    {
      id: 19,
      name: "Ice Cream",
      price: 3.49,
      currency: "EUR",
      category: "Sweets",
      description: "Vanilla ice cream with chocolate swirls."
    },
    {
      id: 20,
      name: "Sausages",
      price: 3.99,
      currency: "EUR",
      category: "Meat",
      description: "Juicy sausages for grilling or frying."
    }
  ]
}

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

export default async function Home({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const products: Product[] = data.products
  const search = searchParams?.search || ""

  return (
    <>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 mb-3 dark:from-purple-500 dark:to-pink-700">Find Your Products</h1>
      <p className="text-gray-600 font-medium mb-3">A simple way to find what you need!</p>

      <Search initialSearch={search} />

      <section className="place-items-stretch w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {products
          .filter(product => {
            if (!search) return true
            if (search === "") return true
            if (product.name.toLowerCase().includes(search.toLowerCase())) return true
            if (product.category.toLowerCase().includes(search.toLowerCase())) return true
            if (product.description.toLowerCase().includes(search.toLowerCase())) return true
          })
          .map(product => (
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

      <Navigation />
    </>
  )
}
