# Search

> This is client component. It is search input that putting search prompt into url search params

Check out the [code](/src/app/Search.tsx).

Table of Contents

- [Component initialization](https://github.com/AndreyPerunov/products-search/blob/main/docs/Search.md#component-initialization)
- [Input](https://github.com/AndreyPerunov/products-search/blob/main/docs/Search.md#input)

## Component initialization

- `initialSearch`: From the props I get initialSearch to put it in the search state. Reason for that is to make url sharable. Because if you share url with the search prompt or refresh the page, search will be empty
- `search`: contains user input
- `debouncedSearch`: actual search prompt that will be inserted into search params
- `placeholder`: placeholder contains random predefined search prompt to make it more User Friendly

```
export default function Search({ initialSearch }: { initialSearch?: string }) {
  const [placeholder, setPlaceholder] = useState<string>("🔍")
  const [search, setSearch] = useState<string>(initialSearch || "")
  const [debouncedSearch, setDebouncedSearch] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    const possibleSearches = ["ice cream", "sweet bananas", "grilling", "baking", "fresh", "meat", "seafood", "fruits", "bakery", "dairy", "vegetables", "sweets", "pasta", "snacks", "crunchy", "vanilla ice cream", "juicy sausages", "probiotic-rich yogurt", "grain bread", "breakfast essential"]
    // Choose a random placeholder
    setPlaceholder("🔍 " + possibleSearches[Math.floor(Math.random() * possibleSearches.length)])
  }, [])

  ...
}
```

## Input

```
<input value={search} onChange={e => setSearch(e.target.value)} .../>
```

### Debounce

Every time when search changes I run debounce function to change the `debouncedSearch` value

> Debouncing prevents extra activations or slow functions from triggering too often.

```
useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncedSearch(search)
  }, 300)

  return () => clearTimeout(timeout)
}, [search])
```

### Changing Search Params

On every `debouncedSearch` change I put it's value to the URL search params.

```
useEffect(() => {
  if (debouncedSearch) {
    router.push(`/?search=${debouncedSearch}`)
  } else {
    router.push("/")
  }
}, [debouncedSearch, router])
```
