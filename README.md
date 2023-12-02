# Products Search app

> Server side search app for products

## Installation

Clone repo and run

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How it works

I used **server side search approach** for better SEO (for each individual search prompt there is unique URL `url/?search=apple`).

Implemented pagination using search params `url/?page=2`

Check out [docs](/docs) to see how individual components works.

Tech stack:

- React.js
  - used `useEffect`, `useState`
- Next.js
  - used `app` router
  - used `page`, `layout`, `loading`, `error` components
  - used `Link`, `useRouter` components
  - `client` and `server` components
  - used `metadata`
- Tailwind
  - made responsive design
  - used dark and light themes
- TypeScript
  - used types for props
  - used types for products

## Potential improvements

- improve single product page responsive design
- add filtering feature by categories
- add sorting feature by price
- add 'choose number of products displayed' feature
- add buttons to choose specific page number
