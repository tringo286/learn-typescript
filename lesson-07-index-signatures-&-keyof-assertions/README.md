# Lesson 7: Index Signatures & Keyof Assertions

## Introduction

In this lesson, we will dive into **Index Signatures** and **Keyof Assertions** in TypeScript. These concepts are important for handling dynamic properties in objects and ensuring type safety when dealing with keys and values of those objects.

### Key Concepts Covered:
- **Index Signatures**: Allow defining object properties dynamically.
- **Keyof Assertions**: Enable strict type checking for object properties.

---

## Index Signatures

### What is an Index Signature?

An index signature is a way to define a type for objects where the key names are not known ahead of time. It allows you to define an object with dynamic keys, while still enforcing type safety for the values associated with those keys.

#### Example:

```typescript
interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};

console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]); // -10
```

The TransactionObj interface defines an index signature `([index: string]: number)`, allowing properties like `Pizza`, `Books`, and `Job` to be dynamically accessed and ensuring they all have the type `number`.
The `readonly` modifier ensures that once a property is set, it cannot be changed.

### Iterating over an Object with Index Signatures

You can loop through an object that has an index signature using `for-in` or `Object.keys`.

```typescript
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todaysTransactions)); // 35
```

## Keyof Assertions

`keyof` is a TypeScript operator that extracts the keys of an object type. It is useful when you want to ensure that you're accessing only valid keys of a given object type.

```typescript
interface Student {
    name: string;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
});
```

`keyof Student` ensures that only the valid keys of the `Student` interface (i.e., `name`, `GPA`, `classes`) are used in the loop or mapped over.

### Using keyof in Functions

You can use keyof to enforce type safety when passing keys to functions:

```typescript
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name'); // Student name: Doug
```

The function `logStudentKey` ensures that only valid keys of the `Student` interface are passed as arguments, enforcing type safety.

## Record Type and Keyof Assertions

You can use the `Record` utility type to create objects with a set of known keys and a uniform value type. This is especially useful for creating dictionaries with predefined keys.

```typescript
type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]); // 500, 100, 250
}
```

`Record<Streams, number>` creates a type where the keys are `'salary'`, `'bonus'`, and `'sidehustle'`, and the values are of type `number`.
The `keyof Incomes` assertion is used in the loop to ensure that only valid keys of the `Incomes` type are accessed.

### Conclusion
In this lesson, we covered the basics of Index Signatures and Keyof Assertions in TypeScript:

- Index Signatures allow dynamic property access while maintaining type safety.
- Keyof Assertions enable more precise control when working with object keys.
- The Record type allows creating objects with specific sets of keys, enhancing type safety and readability.
