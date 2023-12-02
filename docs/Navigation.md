# Navigation

> This component navigates ProductsPage

Check out the [code](/src/app/Navigation.tsx).

Table of Contents

- [Component initialization](https://github.com/AndreyPerunov/products-search/blob/main/docs/Navigation.md#component-initialization)
- [Navigation](https://github.com/AndreyPerunov/products-search/blob/main/docs/Navigation.md#navigation)
- [Disabling buttons](https://github.com/AndreyPerunov/products-search/blob/main/docs/Navigation.md#disabling-buttons)

## Component initialization

This component accept props: `page`, `search`, `pagesNumber`

```
{ page: number; search: string; pagesNumber: number }
```

## Navigation

I am using [Link](https://nextjs.org/learn-pages-router/basics/navigate-between-pages/link-component) component to prevent full page refresh.

```
<Link
  href={{
    pathname: "/",
    query: {
      ...(search ? { search } : {}),
      page: page - 1
    }
  }}
>
{">"}
</Link>
```

If there is a `search` prompt I am passing it into a query. Without this the search will be cleared during navigation.

```
...(search ? { search } : {}),
```

Afterwards I am navigation to next `page: page + 1` or previous `page: page - 1` page.

## Disabling buttons

For the previous page button condition is `1 < page`

For the next page button condition is `pagesNumber > page`

```
{1 < page ? (
  <Link ...> ... </Link>
) : (
  <span className="... cursor-not-allowed"> ... </span>
)}
```
