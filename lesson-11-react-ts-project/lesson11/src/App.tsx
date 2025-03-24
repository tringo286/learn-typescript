import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Different Title"}>This is my Section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      
      {/* List receives the items array and the render function.
      It iterates over ["☕ Coffee", "🌮 Tacos", "💻 Code"].
      For each item, it calls render(item), which wraps the string in <span className="bold">...</span>. */}
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} />       
    </>
  );
}

export default App;
