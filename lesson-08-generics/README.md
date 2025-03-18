# Lesson 7: Generics

## Introduction

In this lesson, we will explore the concept of **Generics** in TypeScript. Generics allow you to write flexible and reusable code by providing the ability to define functions, interfaces, and classes with placeholder types. These placeholder types can later be replaced with specific types when the code is executed.

## Table of Contents

1. [Introduction to Generics](#1-introduction-to-generics)
2. [Generic Functions](#2-generic-functions)
   - `echo` function
   - `isObj` function
   - `isTrue` function
3. [Generic Interfaces](#3-generic-interfaces)
   - `BoolCheck` interface
   - `checkBoolValue` function
4. [Generics with Constraints](#4-generics-with-constraints)
   - `HasID` interface
   - `processUser` function
5. [Working with Arrays and Keys in Generics](#5-working-with-arrays-and-keys-in-generics)
   - `getUsersProperty` function
6. [Generic Classes](#6-generic-classes)
   - `StateObject` class
7. [Conclusion](#7-conclusion)

---

## 1. Introduction to Generics

Generics are a powerful feature of TypeScript that allow you to write functions, interfaces, or classes that can work with any data type. By using generics, you can make your code more flexible and reusable.

```ts
const echo = <T>(arg: T): T => arg;
```

In the example above, `T` is a placeholder for any type. This means that the `echo` function can accept any type (`T`) and return the same type (`T`).

## 2. Generic Functions

### `echo` function

This is a simple function that returns whatever argument is passed to it. It demonstrates the use of generics in a function.

```ts
const echo = <T>(arg: T): T => arg;
```

### `isObj ` function

This function checks if a given argument is an object and not an array or null.

```ts
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
```

The function works by determining the type of the argument, and using TypeScript's type system to ensure type safety.

### `isTrue ` function

This function checks whether a given argument evaluates to a truthy or falsy value. It also handles empty arrays and objects.

```ts
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};
```

## 3. Generic Interfaces

### `BoolCheck` interface

The `BoolCheck` interface is used to define the structure of an object that holds a value and its boolean evaluation.

```ts
interface BoolCheck<T> {
  value: T;
  is: boolean;
}
```

### `checkBoolValue` function

This function uses the `BoolCheck` interface to return an object that contains the original argument and whether it evaluates to `true` or `false`.

```ts
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};
```

## 4. Generics with Constraints

### `HasID` interface

We can add constraints to generics by specifying that the generic type must extend a particular type. For example, the `HasID` interface ensures that any object has an `id` property.

```ts
interface HasID {
  id: number;
}
```

### `processUser` function

The `processUser` function demonstrates how we can use the `HasID` constraint to ensure that we are working with objects that have an `id` property.

```ts
const processUser = <T extends HasID>(user: T): T => {
  return user;
};
```

## 5. Working with Arrays and Keys in Generics

### `getUsersProperty` function

This function extracts a specific property from an array of objects, using TypeScript's `keyof` operator to ensure that the key exists on each object.

```ts
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};
```

## 6. Generic Classes

### `StateObject` class

In this section, we explore how generics can be used within classes to store and retrieve state values of any type.

```ts
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}
```

You can see that the `StateObject` class works with any type of data, thanks to the generic `T`.

## 7. Conclusion

In this lesson, we learned about the power of `Generics` in TypeScript. Generics help make your code more flexible, reusable, and type-safe. By using generics, you can work with any data type while maintaining type safety and avoiding unnecessary type assertions.

The key points from this lesson are:

- **Generic functions**: Functions can accept and return any type.
- **Generic interfaces**: Interfaces can define structures that work with any type.
- **Generics with constraints**: You can restrict generics to work with types that meet certain conditions.
- **Generic classes**: Classes can also use generics to handle state or other data dynamically.
