# Lesson 14: React useContext and TypeScript

## Overview

In this lesson, we will learn how to manage global state in a React application using the `useContext` hook combined with TypeScript. This powerful technique allows us to avoid prop drilling and makes it easy to share data across components.

In this lesson, we will focus on managing theme state (light/dark mode) globally with a `ThemeContext`. The app will include a `ThemeProvider` to provide the current theme and a `useTheme` hook to access and update the theme in various components.

### 1. ThemeContext.tsx

#### a. ThemeContextType Interface

We first define a TypeScript interface for the theme context value. This helps us ensure that the context will have the correct shape and provides autocompletion when consuming the context.

```tsx
interface ThemeContextType {
  theme: string;          // The current theme ('light' or 'dark')
  toggleTheme: () => void;  // Function to toggle the theme
}
```

#### b. defaultContextValue

We provide a default value for the context so that React doesn’t complain when we try to access the context before it's provided.

```tsx
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};
```

#### c. ThemeProvider

This component wraps the children components and provides them access to the theme context. It uses the `useState` hook to manage the theme state and the `toggleTheme` function to switch between light and dark modes.

```tsx
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. App.tsx

#### ThemedComponent

This component uses the `useTheme` hook to access the theme and toggle the theme when a button is clicked. It applies different styles depending on whether the current theme is light or dark.

```tsx
function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

## How It Works

When you click the "Toggle Theme" button, the `toggleTheme` function toggles between the light and dark themes.

The `ThemeProvider` keeps track of the current theme and provides it to any components that consume the context using the `useTheme` hook.

`ThemedComponent` is dynamically styled based on the current theme (either light or dark).
