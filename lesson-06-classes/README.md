# Lesson 6: Classes in TypeScript

This project demonstrates how to use classes, inheritance, access modifiers, interfaces, and static properties in TypeScript. The code includes multiple examples that showcase the functionality of classes, methods, and the powerful features TypeScript provides for structuring and managing code.

## Table of Contents

1. [Coder Class](#coder-class)
2. [WebDev Class (Inheritance)](#webdev-class-inheritance)
3. [Musician Interface](#musician-interface)
4. [Peeps Class (Static Properties)](#peeps-class-static-properties)
5. [Bands Class (Getter/Setter Methods)](#bands-class-gettersetter-methods)

## Coder Class

The `Coder` class represents a base class that models a coder with specific properties and methods.

### Key Features:

- **Constructor:** Takes `name`, `music`, `age`, and an optional `lang` parameter (defaults to 'Typescript').
- **Access Modifiers:**
  - `public readonly name: string`: The name of the coder, can be accessed publicly and cannot be modified after instantiation.
  - `public music: string`: The type of music the coder listens to, accessible and modifiable outside the class
  - `private age: number`: The coder's age, only accessible and modifiable within this class.
  - `protected lang: string`: The programming language the coder uses, accessible inside the class and any derived classes.
- **Method `getAge()`:** Returns a string introducing the coder's age.

```typescript
class Coder {
  secondLang!: string; // Declaring a property `secondLang` that will be definitely assigned later

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge()); // "Hello, I'm 42"
```

**Explanation:**

- Dave is instantiated as a Coder and the method getAge() is used to output their age.
- The private age property is not accessible directly outside the class.

## WebDev Class (Inheritance)

The `WebDev` class extends the `Coder` class to demonstrate inheritance and how properties and methods can be inherited and modified.

**Key Features:**

- Inheritance: Inherits from the `Coder` class and calls the constructor of the parent class using super().
- New Method `getLang()`: Outputs the programming language the web developer uses.

```typescript
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang()); // "I write Typescript"
```

`Sara` is an instance of `WebDev` that inherits from `Coder`. The `getLang()` method is called to display the language used by the developer.

## Musician Interface

Interfaces can be used for defining the structure of classes, objects, and function types.
The Musician interface defines a contract for creating musician objects.

**Key Features:**

- Interface: Describes a structure with properties `name`, `instrument`, and method `play(action)`.
- Class Implementation: The `Guitarist` class implements the `Musician` interface, creating a specific musician object.

```typescript
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums")); // "Jimmy strums the guitar"
```

The `Guitarist` class implements the `Musician` interface, ensuring that the class follows the defined structure.

## Peeps Class (Static Properties)
Static properties are properties that belong to the class itself rather than to instances of the class. Static properties are accessed through the class name rather than through an object instance.

The `Peeps` class demonstrates how to work with static properties in TypeScript.
`
**Key Features:**

- Static Property `count`: Keeps track of the number of `Peeps` objects created.
- Static Method `getCount()`: Returns the current count of instances.
  Instance Property `id`: Unique identifier for each `Peeps` object.

```typescript
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Amy.id); // 3
console.log(Steve.id); // 2
console.log(John.id); // 1
console.log(Peeps.count); // 3
```

The `Peeps` class uses a static property `count` to track how many `Peeps` objects have been created.
The `getCount()` method is static and can be called without instantiating an object.

## Bands Class (Getter/Setter Methods)

The `Bands` class demonstrates the use of getter and setter methods to control access to private data.

**Key Features:**

- Private Property `dataState`: Holds an array of band names.
- Getter Method: Returns the current state of `dataState`.
- Setter Method: Validates that the input is an array of strings before updating the `dataState`.

```typescript
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data); // ["Neil Young", "Led Zep"]
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data); // ["Neil Young", "Led Zep", "ZZ Top"]
MyBands.data = ["Van Halen", 5150]; // Error: Param is not an array of strings
```

The setter method for `data` ensures that only an array of strings is accepted.
If an invalid value (like a number) is provided, an error is thrown.

## Conclusion

This lesson demonstrates several core concepts of TypeScript classes, such as:

- Constructor functions and access modifiers.
- Inheritance and method overriding.
- Interfaces and their implementation.
- Static properties and methods.
- Getter and setter methods for data validation.
