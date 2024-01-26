# Wikipedia-Search

This template provides a minimal setup to get wikipedia search working in Vite.

Please follow below instracutions to run the application:

- Clone the repo: https://github.com/nikhilgvpce/wikipedia-search.git

```
git clone https://github.com/nikhilgvpce/wikipedia-search.git

```

- Go to wikipedia-search folder

```
cd wikipedia-search
```

- Run the below commands

```
npm install 
npm run dev

```

- To start Node server run the below command

```
npm run serve
```

- If no other process is using port 5173 then go to below link:

```
http://localhost:5173/ 
```

else go to the link as suggested by the Vite in the terminal.

## Application implementation details:

- Implemented this application using Vite-React-ExpressJs setup
- The input provided helps in queirying the data
- The query request goes to Node(ExpressJs) 
- The Node server then calls the wikipedia api: 
`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&formatversion=2&origin=*`

- Implemented a cache using localStorage by storing the key strokes of the user that helps
in returing the previously fetched results when user queries with the same keywords 

:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
