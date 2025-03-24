// ReactNode is a type used to represent any valid React child, such as a string, number, JSX elements, or even arrays of them.
import { ReactNode } from "react";

// A custom type with an optional string property and a required prop of type ReactNode
type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = "My Subheading",
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
