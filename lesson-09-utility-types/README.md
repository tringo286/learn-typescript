# Lesson 9: Utility Types in TypeScript

This lesson covers some of the most commonly used **utility types** in TypeScript. Utility types are pre-built types provided by TypeScript that allow developers to manipulate and enhance types. They can be especially useful for transforming types in various scenarios. We will go over the following utility types in this lesson:

1. `Partial`
2. `Required` and `Readonly`
3. `Record`
4. `Pick` and `Omit`
5. `Exclude` and `Extract`
6. `NonNullable`
7. `ReturnType`
8. `Parameters`
9. `Awaited`

## 1. `Partial<T>`

The `Partial<T>` utility type constructs a type with all properties of `T` set to optional. It's useful when you want to update only a subset of properties in an object.

### Example:

```ts
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
```

## 2. `Required<T>` and `Readonly<T>`
`Required<T>` makes all properties of `T` required.

`Readonly<T>` makes all properties of `T`` read-only (immutable).

```ts
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign;
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true };

// This will give an error because assignVerified is read-only:
recordAssignment(assignVerified);
```

## 3. `Record<K, T>`
The `Record<K, T> `utility type creates a type where the keys are of type `K` and the values are of type `T`. It is useful for creating maps or dictionaries.

```ts
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
};
```

## 4. `Pick<T, K>` and `Omit<T, K>`
- `Pick<T, K>` creates a type by picking a subset of properties `K` from `T`.
- `Omit<T, K>` creates a type by omitting properties `K` from `T`.

```ts
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
};
```

## 5. `Exclude<T, U> `and `Extract<T, U>`
- `Exclude<T, U>` constructs a type by excluding types from `T` that are assignable to `U`.
- `Extract<T, U>` constructs a type by extracting from `T` types that are assignable to `U`.

```ts
type AssignResult = Pick<Assignment, "studentId" | "grade">;
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;
```

## 6. `ReturnType<T>`
The `NonNullable<T>` utility type constructs a type by removing null and undefined from `T`.

```ts
type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;
```

## 7. `NonNullable<T>`
The `ReturnType<T>` utility type extracts the return type of a given function type.

```ts
const createNewAssign = (title: string, points: number) => {
    return { title, points };
}

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
```

## 8. `Parameters<T>`
The `Parameters<T>` utility type constructs a tuple type from the types of the parameters of a function type `T`.

```ts
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);
```

## 9. `Awaited<T>`
The `Awaited<T>` utility type helps us extract the return type of a `Promise`. It resolves the type that is wrapped by a promise.

```ts
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => res.json())
    .catch(err => {
        if (err instanceof Error) console.log(err.message);
    });

    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users));
```

## Conclusion
These utility types are incredibly useful for working with types in TypeScript. By utilizing these types, you can significantly improve the readability, maintainability, and flexibility of your code. Understanding how to leverage them will help you write more robust and type-safe applications.