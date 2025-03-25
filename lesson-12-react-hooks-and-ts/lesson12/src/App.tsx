import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

// A function type takes a single argument n of type number and return a value of type number
type fibFunc = (n: number) => number;

// Const varible named fib is of type fibFunc that matches the type signature we defined earlier (taking a number and returning a number).
const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  // The value stored in useRef persists across renders but doesn’t trigger a re-render when changed.
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => console.log("unmounting");
  }, [users]);

  // When you use useCallback, React will return a memoized version of the function, meaning it will keep the same instance of the function unless its dependencies (the second argument array) change.
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );

  // The useMemo hook in React is used to optimize performance by memoizing the result of an expensive function call and only recalculating it when one of the dependencies changes.
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
