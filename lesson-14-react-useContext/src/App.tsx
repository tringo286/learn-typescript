import { ThemeProvider } from "./context/ThemeContext"; // Import the ThemeProvider
import { useTheme } from "./context/ThemeContext"; // Import the custom hook

function App() {
  return (
    <ThemeProvider>
      <div>
        {/* Your components go here */}
        <h1>Welcome to my app!</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

// Example component that consumes the theme context
function ThemedComponent() {
  const { theme, toggleTheme } = useTheme(); // Use the custom hook to access the theme and toggleTheme function

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

export default App;
