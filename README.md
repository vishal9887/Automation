# Mini Code Copilot

Lightweight React + Vite + Tailwind demo that simulates generating code snippets from natural language prompts.

Features
- Tailwind CSS with light/dark theme
- Prompt input and language selector (JavaScript, Python, C++)
- Mock API `simulateGenerateCode` (800ms delay) returning hardcoded snippets
- Syntax highlighting with `react-syntax-highlighter` (Prism)
- Prompt history stored in `localStorage` with search and clear
- Copy-to-clipboard and font-size slider for the code viewer

Run locally

1. Install dependencies

```pwsh
npm install
```

2. Start dev server

```pwsh
npm run dev
```

Project structure (important files)

- `src/components/PromptInput.jsx` — prompt textarea + language select + generate button
- `src/components/CodeOutput.jsx` — syntax highlighted output, copy button, font-size
- `src/components/HistoryPanel.jsx` — stored prompts, search + clear
- `src/api/mockApi.js` — `simulateGenerateCode({ prompt, language })` mock
- `src/App.jsx` — main layout and state
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind setup

Notes
- This is a mock demo; no real backend or AI calls are made. All generation is deterministic and local.
- Theme preference and history are persisted in `localStorage` under keys `mc:dark` and `mc:history`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
