// ReactNode is a type used to represent any valid React child, such as a string, number, JSX elements, or even arrays of them.
import { ReactNode } from "react";

// React.Dispatch<React.SetStateAction<number>> is the type used for the setState function returned by the useState hook, specifically when dealing with a state of type number
type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Counter;
