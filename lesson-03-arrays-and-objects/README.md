# Lesson 03: Arrays and Objects in TypeScript

In this lesson, we will explore how to work with arrays and objects in TypeScript. Arrays and objects are essential structures in any JavaScript or TypeScript project, and TypeScript provides additional features to improve type safety when working with them.

---

### 1. **Arrays in TypeScript**

In TypeScript, you can declare an array with specific types to ensure that the array only contains elements of that type.

#### Example 1: Array of numbers

You can declare an array that holds only numbers like this:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

Alternatively, you can use the Array generic type:

```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

Both of these declarations will allow only numbers to be added to the `numbers` array. If you try to add a string, TypeScript will show an error.

#### Example 2: Array of strings

You can also declare an array that holds only strings:

```typescript
let fruits: string[] = ["Apple", "Banana", "Cherry"];
```

This array will only accept strings. Trying to push a non-string value will result in a type error.

#### Example 3: Array of mixed types (string, number, boolean)

If you want an array to hold multiple types (e.g., string, number, and boolean), you can declare it like this:

```typescript
let mixedData = ["EVH", 1984, true]; // string || number || boolean
```

#### Example 3: Arrays with type `any`

Sometimes you may want to create an array that can hold any type of value. This is done using any type:

```typescript
let test = []; // any type
let bands: string[] = [];
bands.push("Van Halen");
```

### 2. **Tuples in TypeScript**

Tuples are arrays with a fixed number of elements, where each element can have a different type. In TypeScript, you can define a tuple like this:

```typescript
let myTuple: [string, number, boolean] = ["Dave", 42, true];
```

In this example, myTuple is a tuple where:

- The first element is a `string`,
- The second element is a `number`,
- The third element is a `boolean`.

You can also modify elements within a tuple:

```typescript
myTuple[1] = 42; // Valid
```

### 3. **Objects in TypeScript**

Objects are key-value pairs where the values can be of different types. In TypeScript, you can specify the types of the properties within the object to ensure that they match the expected structure.

#### Example 1: Basic Object

In TypeScript, objects can be assigned to a variable with the type `object`, but it's generally better to define the structure of the object using an interface.

```typescript
let myObj: object;
myObj = []; // Valid
console.log(typeof myObj); // 'object'
myObj = bands; // Valid
myObj = {}; // Valid
```

#### Example 2: Object with properties

You can define an object with specific properties:

```typescript
const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John"; // Valid assignment
```

### 4 **Interfaces for Objects**

In TypeScript, you can use `interfaces` to define the structure of objects. This helps ensure type safety when working with objects.

```typescript
interface Guitarist {
  name?: string; // Optional property
  active: boolean;
  albums: (string | number)[]; // Array of strings or numbers
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  active: true,
  albums: ["I", "II", "IV"],
};
```

#### Example 3: Function with Interface Parameter

You can also use interfaces as types for function parameters. For instance, we can greet a guitarist if they have a `name` property:

```typescript
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp)); // Output: 'Hello!'
```

### 5 **Enums in TypeScript**

Enums are a feature added to TypeScript that provides a way to define a set of named constants. Unlike other TypeScript features, enums are not only a type-level addition but also a runtime feature.

#### Example 1: Basic Enum

You can define an enum to represent a range of values, like grades:

```typescript
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U); // 1
```

In this example, Grade is an enum where:

- `U` starts at 1,
- `D` is 2, and so on.

# Key Concepts

## Arrays

- Arrays can hold multiple types using **union types** (e.g., `string | number`), or use specific types like `string[]` for an array of strings.

## Tuples

- Tuples allow you to define an array with fixed types and lengths, making it useful for representing structured data.

## Objects

- Use objects to store **key-value pairs**. You can define their structure using the `object` type or more precisely with an **interface**.

## Interfaces

- **Interfaces** define the structure of objects, specifying the types of properties and whether they are required or optional.

## Enums

- **Enums** provide a way to define a set of named constants, making code more readable and maintainable.
