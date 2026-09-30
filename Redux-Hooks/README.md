# React Hooks Learning Demos

This project is a collection of small, interactive demos built to help understand React hooks and related concepts. Each example focuses on one idea so you can explore what it does, change the code, and see how the UI responds.

## Run the project

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The active demo is selected in `src/main.jsx`; change the rendered component there to explore another lesson.

## Lessons

- **`useState`** — store and update component state.
- **`useEffect`** — run side effects after rendering.
- **`useLayoutEffect`** — measure or adjust layout after the DOM updates and before the browser paints.
- **`useRef`** — keep a mutable reference or access a DOM element.
- **`useMemo`** — memoize a calculated value.
- **`useCallback`** — memoize a function reference, often when passing callbacks to memoized children.
- **`useContext`** — share a value, such as a theme, with nested components without passing it through every level as props.
- **Debounced search** — see how delaying work can reduce how often a search runs while typing.
- **Redux todo example** — a small example of app-wide state with Redux Toolkit.

Each lesson lives in its own folder under `src/`. Start with the component currently imported by `src/main.jsx`, then switch that import/rendered component to try another lesson. The examples are learning exercises, not a single production application.
