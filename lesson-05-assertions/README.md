# Lesson 5: Assertions in TypeScript

In this lesson, we will dive deeper into **type assertions** in TypeScript. Type assertions allow you to tell TypeScript to treat a value as a specific type when the compiler is unable to infer it automatically. This can be useful in various scenarios, such as when working with dynamic data or interacting with the DOM.

## Table of Contents

1. [Introduction to Type Assertions](#introduction-to-type-assertions)
2. [Basic Syntax of Type Assertions](#basic-syntax-of-type-assertions)
3. [Converting to More or Less Specific Types](#converting-to-more-or-less-specific-types)
4. [Assertions in Functions](#assertions-in-functions)
5. [Type Assertions in the DOM](#type-assertions-in-the-dom)
6. [Type Assertions in Action](#type-assertions-in-action)
7. [Key Takeaways](#key-takeaways)

---

### Introduction to Type Assertions

Type assertions are a way to override TypeScript’s automatic type inference when you know more about the type of a value than TypeScript does. When using type assertions, you are telling TypeScript to trust that you know the type of the value, even if it might not be clear from the code.

In TypeScript, there are two common ways to use type assertions:

- **`as` syntax**: `value as Type`
- **Angle-bracket syntax**: `<Type>value`

However, it is recommended to use the `as` syntax as it is safer, especially when working with JSX (which doesn't support angle-bracket syntax).

---

### Basic Syntax of Type Assertions

Here’s how you can use type assertions:

```typescript
let value: any = "Hello World";
let strLength: number = (value as string).length; // Using 'as' syntax
let strLength2: number = (<string>value).length; // Using angle-bracket syntax
```

In this example, `value` is of type `any`, but you assert that it is a `string` to access the `length` property, and assign it to `strLength`, which is of type `number`

### Converting to More or Less Specific Types

Type assertions can help you convert types to be either more specific or less specific.

**More Specific**

You can assert that a value is a more specific type:

```typescript
type One = string; // One can be any string
type Three = "hello"; // Three is the literal string 'hello'

let a: One = "hello"; // a is of type string, it can be any string
let c = a as Three; // More specific, assert that a should be treated as 'hello'

console.log(c); // Output: 'hello'
```

Here, you are asserting that the `a` variable, which is of type `string`, should be treated as the literal type `'hello'`.

**Less Specific**

You can also convert to a less specific type:

```typescript
type One = string;
type Two = string | number;

let a: One = "hello";
let b = a as Two; // Less specific
```

In this case, the type of `a` is `string`, but you are asserting it as `Two`, which is a union of `string` and `number`.

### Assertions in Functions

In functions, you might use type assertions to narrow or widen types based on the return value.

#### Example with Type Assertions in Functions:

```typescript
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b; // Concatenate numbers as strings
};

// Assert the result is a string
let myVal: string = addOrConcat(2, 2, "concat") as string;

// Incorrect assertion that TypeScript doesn't catch:
let nextVal: number = addOrConcat(2, 2, "concat") as number; // This will cause runtime issues
```

Even though TypeScript won't show an error for incorrect assertions like in `nextVal`, it’s important to be cautious as these can lead to bugs at runtime.

### Type Assertions in the DOM

Type assertions are extremely helpful when interacting with the DOM. When you query DOM elements, TypeScript may not always be able to infer the exact type, so assertions allow you to explicitly define the type of the element.

#### Example of Type Assertions in the DOM:

```typescript
const img = document.querySelector("img")!; // Non-null assertion to tell TypeScript that img will not be null
const myImg = document.getElementById("#img") as HTMLImageElement; // Type assertion for an HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById("#img"); // Alternative angle-bracket syntax

img.src; // Works without error
myImg.src; // Works without error
```

In this example, `querySelector('img')` and `getElementById('#img')` return `HTMLElement` by default, but since you know the element is actually an image, you can assert it as `HTMLImageElement`.

### Type Assertions in Action

Let’s look at a more practical example with the DOM. Here’s how you would handle the year element in a webpage.

**Original JavaScript Code:**

```javascript
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```

In TypeScript, the element could be `null`, so TypeScript doesn’t know if `year` will be valid. To safely assert the type, we use type assertions.

#### TypeScript Variation 1: With HTMLElement | null:

In TypeScript, there’s a key difference: the return value of document.getElementById("year") could be either an `HTMLElement` or `null`. TypeScript is stricter about potential null values, and it doesn't automatically assume the element will always be present, unlike JavaScript. To handle this safely, TypeScript requires us to explicitly check if the element exists (i.e., is not null) before accessing its properties.

```typescript
let year: HTMLElement | null = document.getElementById("year");
let thisYear: string = new Date().getFullYear().toString();

if (year) {
  // Check if year is not null
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}
```

### TypeScript Variation 2: Using Type Assertion:

Here, we used the as keyword to assert that year is an HTMLSpanElement. This simplifies the code, but be careful, because if the element doesn't exist, it might cause errors.

```typescript
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```

# Key Takeaways

- **Type Assertions in TypeScript** help you override the compiler’s automatic type inference when you know more about the type of a value than TypeScript does.
- There are two main syntaxes for type assertions: `as Type` and `<Type>value`, but it’s better to use `as Type` to avoid conflicts with JSX.
- Type assertions can be used to convert to both more specific and less specific types, allowing you to narrow or widen the type of a variable.
- Use type assertions with caution, especially when dealing with values that might be `null` or `undefined`. Always make sure the assertion is correct to avoid runtime errors.
- Type assertions in the DOM are useful when querying DOM elements that TypeScript can’t automatically infer the type for. You can assert the type of an element to get access to its specific properties and methods.
