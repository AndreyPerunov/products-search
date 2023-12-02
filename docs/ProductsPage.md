# Product Page

> This component is a 'home' page of a website. It displays all the products filtered by search prompt.

Check out the [code](/src/app/page.tsx).

Table of Contents

- [Component initialization](https://github.com/AndreyPerunov/products-search/edit/main/docs/ProductsPage.md#component-initialization)
- [Fetching data](https://github.com/AndreyPerunov/products-search/edit/main/docs/ProductsPage.md#fetching-data)
- [Filtering](https://github.com/AndreyPerunov/products-search/edit/main/docs/ProductsPage.md#filtering)
- [Pagination](https://github.com/AndreyPerunov/products-search/edit/main/docs/ProductsPage.md#pagination)
- [If there is no products](https://github.com/AndreyPerunov/products-search/edit/main/docs/ProductsPage.md#if-there-is-no-products)

## Component initialization

I used **server side search approach**. The reason for that is to make this component render on 'server'. To do that I need to not use `useState` and `useEffect` hooks. This is why I am storing search prompt in _url search params_ instead of a _state_

On this page I am getting `search`, `page` and `limit` from [search params](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional).

If there is no params specified I am setting default values to `""`, `1` and `12`.

> I choose 12 because it can be divided by 2, 3 and 4. `"grid-cols-2 md:grid-cols-3 lg:grid-cols-4"`

> I get page limit from search params for potentially adding a feature that will chose the limit

```
export default async function Home({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const search = searchParams?.search || ""
  let page: number = Number(searchParams?.page) || 1
  let limit: number = Number(searchParams?.limit) || 12
  ...
}
```

## Fetching data

I use native [fetch](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch) extended by Next.js to fetch data.

```
async function getProducts() {
  const res = await fetch("https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd")
  const data = await res.json()
  return data.products as Product[]
}
```

```
const products: Product[] | undefined = await getProducts()
```

## Filtering

For products filtering I used native `.filter`

I pass product to new array ...

- ...if product description, name or category `.includes` search prompt
  - used `.toLowerCase` to make it not case sensitive
- ...if there is no search or search is empty I am passing every product

```
const productsFiltered: Product[] = products.filter(product => {
  if (!search) return true
  if (search === "") return true
  if (product.name.toLowerCase().includes(search.toLowerCase())) return true
  if (product.category.toLowerCase().includes(search.toLowerCase())) return true
  if (product.description.toLowerCase().includes(search.toLowerCase())) return true
})
```

I am modifying _search_ prompt in a [Search](/docs/Search.md) component.

## Pagination

> That is the final list of products that will be displayed

I am slicing filtered products from `(page - 1) * limit` to `page * limit`

```
const productsPaginated: Product[] = productsFiltered.slice((page - 1) * limit, page * limit)
```

I am changing the _page_ in a [Navigation](/docs/Navigation.md) component. I pass the `pagesNumber` into this component to display total number of pages.

> .ceil - rounds up the number (Math.ceil(2.1) = 3)

```
const pagesNumber: number = Math.ceil(productsFiltered.length / limit)
```

I display component <Navigation /> only if there is at least 1 product:

```
{productsPaginated.length > 0 && <Navigation page={page} pagesNumber={pagesNumber} search={search} />}
```

## If there is no products

If no products found I display that:

```
{productsPaginated.length === 0 && (
  <>
    <p className="text-center text-gray-600 font-medium">No products found</p>
    <p className="text-center text-gray-600 text-7xl mb-10 mt-5">:(</p>
  </>
)}
```
