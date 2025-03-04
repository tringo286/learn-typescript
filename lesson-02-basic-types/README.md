# Lesson 02: Basic Types in TypeScript

This lesson will explore some of the basic types in TypeScript. Understanding these types is essential for working with TypeScript, as it provides type safety, helping you catch errors early during development.

---

### 1. **Primitive Types**

#### String Type

A variable can be declared as a `string`, which will hold string values.

```typescript
let myName: string = "Tri";
myName = "John"; // Valid assignment
```

#### Number Type

A variable can also be declared as a `number`, which will hold number values.

```typescript
let meaningOfLife: number;
meaningOfLife = 42; // Valid assignment
```

#### Boolean Type

A `boolean` type can hold values `true` or `false`.

```typescript
let meaningOfLife: number;
meaningOfLife = 42; // Valid assignment
```

#### Any Type

The `any` type allows a variable to hold any type of value. It disables type checking, making it more flexible but less safe.

```typescript
let album: any;
album = 5150; // Valid, any type can be assigned
```

### 2. **Functions**

In TypeScript, we can define the types for function parameters and return values.

Here's a function `sum` that takes a `number` and a `string` and returns their sum:

```typescript
const sum = (a: number, b: string) => {
  return a + b; // TypeScript will infer the return type as string
};
```

### 3. **Union Types**

Union types allow a variable to hold more than one type. This is useful when you want to support multiple types for a variable.

```typescript
let postId: string | number;
postId = "123"; // Valid assignment (string)
postId = 123; // Valid assignment (number)
```

### 3. **Regular Expressions (RegExp)**

In TypeScript, you can also work with regular expressions. The `RegExp` type is used to define regular expressions.

```typescript
let re: RegExp = /\w+/g;
```

# Basic Types

- **string**: Represents a sequence of characters.
- **number**: Represents numeric values (integers, floats, etc.).
- **boolean**: Represents true or false.
- **any**: Represents any type of value (disables type checking).
- **function**: Functions can have typed parameters and return values.
- **Union Types**: Allows a variable to hold multiple types (e.g., `string | number`).
- **RegExp**: Represents regular expressions.
