// ReactNode is a type used to represent any valid React child, such as a string, number, JSX elements, or even arrays of them.
import { ReactNode } from "react";

// A generic interface ListProps that takes a type parameter T
interface ListProps<T> {
  // items is an array of type T, where T can be any type passed to the generic.
  items: T[];
  //  This is a function that takes an item of type T and returns a ReactNode
  render: (item: T) => ReactNode;
}

// The <T> indicates that List is a generic component, meaning it can work with any type T
// The comma after T (i.e., <T,>) is optional but sometimes used for clarity or consistency
// The component expects an object with two properties: items and render. The type of this object is defined by an interface or type alias called ListProps<T>.
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;
