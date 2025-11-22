# Mini Code Copilot

Mini Code Copilot is a lightweight, local demo app built with React + Vite + Tailwind CSS. It simulates an AI assistant that generates short, focused code snippets from natural-language prompts using a small, deterministic mock API. The goal is to provide a usable UI pattern (prompt → generate → history → copy) you can extend.

**What this app includes**
- Prompt input with language selector (JavaScript, Python, C++)
- Mock generator `simulateGenerateCode` (≈800ms delay) that returns example snippets
- Prompt history persisted in `localStorage` with a search/filter input
- Responsive, modern dark UI (Vercel-inspired glasscards, soft shadows)
- Code output with line numbers and a prominent Copy button

**Note:** this project is a local demo — it does not call any external AI services.

**Quick start**

- Requirements: Node.js 18+ (for best compatibility use Node 20.x or newer). Vite may warn on older minor versions.

1) Install dependencies

```pwsh
npm install
```

2) Run the dev server

```pwsh
npm run dev
```

3) Open the app

Visit the URL printed by Vite (usually `http://localhost:5173`).

Build and preview production output

```pwsh
npm run build
npm run preview
```

## Project layout (files you will likely edit)

- `src/App.jsx` — app composition, state (history, filter, code), and handlers
- `src/api/mockApi.js` — `simulateGenerateCode({ prompt, language })` mock function
- `src/components/PromptInput.jsx` — prompt textarea, examples, language selector
- `src/components/CodeOutput.jsx` — code viewer, line numbers, copy button
- `src/components/HistoryPanel.jsx` — prompt history, filter integration
- `src/index.css` — global tokens, dark UI, glassmorphism styles (no light mode)

## How the search/filter works (user-facing)
- The filter input lives in the left column under **Search / Filter**. Type any text and the prompt history will update live.
- Matching is case-insensitive and currently uses a simple substring match against the prompt text and language name.
- Click a history item to load its code into the output view.

## Suggested improvements (easy to add)
- Debounced filtering (to avoid frequent re-renders while typing) — `useDebouncedValue` hook
- Fuzzy search using `fuse.js` for typo-tolerant matching
- Highlighting matched text in history results
- Keyboard shortcut (Ctrl/Cmd+K) to focus the search field

## Developer notes
- Theme: the app is dark-only (dark tokens in `src/index.css`). If you want light mode, remove the dark-only assumption and add the light variables.
- LocalStorage keys: `mc:history` stores the prompt history array. (There used to be `mc:dark` but the app is dark-only now.)
- Optional packages: `react-syntax-highlighter` was used in earlier iterations for Prism styles — you can install it for colorized code rendering:

```pwsh
npm install react-syntax-highlighter
```

## Troubleshooting
- If Vite warns about your Node version, upgrade Node to a recent 20.x release or later.
- If Tailwind or PostCSS shows errors, ensure `tailwindcss`, `postcss`, and `autoprefixer` are installed (they are declared in `package.json`).

## Committing & pushing
The project is a standard Git repo. To commit your current changes locally:

```pwsh
git add .
git commit -m "UI: Vercel-style redesign, dark-only theme, improved history & copy button"
```

To push to GitHub, add a remote and push:

```pwsh
git remote add origin https://github.com/<yourname>/<repo>.git
git branch -M main
git push -u origin main
```

## Contributing
This repo is a small demo — feel free to open issues or PRs for improvements:
- add fuzzy search (Fuse.js)
- integrate a real backend or AI API for live generation
- improve accessibility (contrast, keyboard nav)

## License
This repository has no license file by default. Add a license of your choice in a `LICENSE` file if you plan to publish it.

---

Made with ❤️ — small demo to iterate quickly on prompt → code UX.
