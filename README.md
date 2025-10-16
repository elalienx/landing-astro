# Hackathon 2025 🎃

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |

## 🚀 Project Structure

```text
/
├── src
│   ├── components
│   │   └── Hero.tsx
│   │   └── IncrementalCounter.tsx
│   │   └── Kreddy.jsx (supports both JSX and TSX)
│   │   └── Navigation.tsx
│   │   └── Partners.tsx
│   ├── layouts
│   │   └── Layout.astro (has the navbar)
│   └── pages
│       └── index.astro (consumer loans)
│       └── business.astro
│       └── mortgage.astro
└── package.json
```

## 🧑‍💻 Client directives

These are the flags you pass to the main page to decide when to make your React components interactive:

1. `client:load`: Hydrates the component as soon as the page loads.
1. `client:visible`: Hydrates the component when it becomes visible in the viewport.
1. `client:idle`: Hydrates the component when the browser is idle.
1. `client:media="(query)"`: Hydrates only when a specific media query matches.
