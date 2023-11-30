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

type Product = {
  id: number
  name: string
  price: number
  currency: string
  category: string
  description: string
}

async function getProducts(id: string) {
  return new Promise<Product | undefined>(resolve => {
    setTimeout(() => {
      resolve(data.products.find(item => item.id === Number(id)))
    }, 1000)
  })
}

export const metadata = {
  title: "Product Page"
}

export default async function Page({ params }: { params: { id: string } }) {
  const product: Product | undefined = await getProducts(params.id)
  return (
    <article
      className="h-full px-30 min-h-[70vh] rounded-lg bg-white p-10 shadow-lg flex flex-col relative
      before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-rose-400 before:via-fuchsia-500 before:to-indigo-500 before:right-5 before:top-5 before:blur-sm"
    >
      <p className="text-right font-medium text-gray-400 ">{product!.category}</p>
      <h1 className="text-right text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900 mb-20 ">{product!.name}</h1>

      <p className="md:pl-40 text-right flex-1 text-lg mb-2 ">{product!.description}</p>
      <p className="text-3xl text-right font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 to-pink-900">
        {product!.price} {product!.currency}
      </p>
    </article>
  )
}
