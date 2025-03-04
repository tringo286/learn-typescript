# Lesson 4: Functions

In this lesson, we will explore TypeScript functions, including type aliases, literal types, function definitions, optional parameters, default parameter values, rest parameters, and the `never` type. Let's dive into each concept with practical examples.

## 1 **Type Aliases**

Type aliases allow you to define custom types in TypeScript. These can help simplify complex types and enhance code readability.

### Example 1: Basic Type Alias

```typescript
type stringOrNumber = string | number;
let value1: stringOrNumber = "Hello, world!"; // Valid, it's a string
let value2: stringOrNumber = 42; // Valid, it's a number
value1 = 100; // Valid, now it's a number
value2 = "New value"; // Valid, now it's a string
```

This creates a type alias called stringOrNumber that can represent either a string or a number.

### Example 2: Array Type Alias

```typescript
type stringOrNumberArray = (string | number)[];
let mixedArray: stringOrNumberArray = ["hello", 42, "world", 100];
```

This type alias represents an array that can hold both strings and numbers.

### Example 3: Object Type Alias

```typescript
type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

const guitarist1: Guitarist = {
  name: "Jimi Hendrix",
  active: false,
  albums: ["Are You Experienced", "Electric Ladyland", 1967],
};
```

The `Guitarist` type alias describes an object with an optional `name` property, a required `active` property, and an `albums` property that is an array of strings or numbers.

## 2 **Literal Types**

Literal types allow you to specify exact values a variable can take.

### Example 1: Assigning a literal value

```typescript
let myName: "Dave";
```

This variable `myName` can only ever be assigned the literal string `'Dave'`.

## 3 **Functions**

### Example 1: Basic Function

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
```

The `add` function takes `two` number arguments and returns a `number`.

### Example 2: Void Return Type

```typescript
const logMsg = (message: any): void => {
  console.log(message);
};
```

The `logMsg` function accepts a message of any type and returns `void`, which means it does not return a value.

### Example 3: Function Expression

```typescript
let subtract = function (c: number, d: number): number {
  return c - d;
};
```

In this example, `subtract` is defined as a function expression, similar to a regular function declaration.

### Example 4: Function Type Alias

```typescript
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};
```

Here, `mathFunction` is a type alias for a function that takes two numbers as arguments and returns a number.

## 4 **Optional Parameters**
In TypeScript, you can make parameters optional by appending a `?` to the parameter name. Optional parameters must come after required parameters in the function's parameter list.

### Example: Optional Parameter

```typescript
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
```

In the `addAll` function, the third parameter `c` is optional. If provided, the function will add it to the sum.

## 5 **Default Parameter Values**
TypeScript allows you to specify default values for parameters. If a parameter is not provided, the default value will be used.

### Example: Default Parameters

```typescript
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
```

In the `sumAll` function, `a` defaults to 10 and `c` defaults to `2` if not provided.

## 6 **Rest Parameters**
Rest parameters allow you to pass a variable number of arguments to a function, which are then treated as an array.

### Example: Rest Parameters

```typescript
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};
```

The `total` function accepts one required parameter `a` and an arbitrary number of additional `nums` as a rest parameter. It calculates the sum of all the numbers.

## 7 **The `never` Type**
The never type represents values that never occur. This is useful for functions that either throw an error or enter an infinite loop.

### Example: never Type with Error Throwing

```typescript
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};
```

The `createError` function always throws an error, so it has a return type of never.

## 8 **Custom Type Guards**
A custom type guard is a function that narrows down the type of a value.

### Example 1: Custom Type Guard

```typescript
const isNumber = (value: any): boolean => {
    return typeof value === 'number';
};
```

The `isNumber` function checks whether a value is of type `number`.

### Example 2: Using never with a Type Guard

```typescript
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen!');
};
```

In this example, the function checks whether the value is a `string` or `number`. If it's neither, it calls `createError`, which has a `never` return type.

## Key Concepts

- **Type aliases** for simplifying complex types.
- **Literal types** to specify exact values.
- **Function declarations**, **expressions**, and **type aliases**.
- **Optional** and **default parameters**.
- **Rest parameters** to handle a variable number of arguments.
- The **never type** to represent unreachable code or functions that throw errors or loop indefinitely.
- **Custom type guards** for narrowing types.