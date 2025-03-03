# Lesson 01: Project Structure and TypeScript Configuration

This lesson will cover the project structure and the role of the `build` and `src` folders. Additionally, It will cover how to create and configure the `tsconfig.json` file, and understand the meaning of some key options such as `noEmitOnError` and how to set TypeScript to watch for changes.

---

### 1. **What are `build` and `src` folders for?**

- **`src/` Folder:**

  - The `src` folder stands for "source" and contains all the source code files for your project.
  - In the case of TypeScript, the `src` folder will contain `.ts` (TypeScript) files. These files contain your TypeScript code, which you will compile to JavaScript.

- **`build/` Folder:**
  - The `build` folder is where the compiled JavaScript files will be output after the TypeScript compiler runs.
  - It's common practice to separate source code (`src/`) from compiled code (`build/`) to keep things organized and prevent the compiled code from mixing with the source files.

---

### 2. **How to create a `tsconfig.json` file?**

A `tsconfig.json` file is a configuration file for the TypeScript compiler (`tsc`). It specifies compiler options, the root directory, and the output directory. To create a `tsconfig.json`, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the root of your project folder.
3. Run the following command to generate a `tsconfig.json` file:

   ```bash
   tsc --init
   ```

This will create a basic `tsconfig.json` file with default settings.

---

### 3. **How to configure `tsconfig.json` to set `outDir` and `rootDir`?**

After creating the `tsconfig.json`, you can modify it to specify the input and output directories. Here's how you can set the `outDir` and `rootDir`:

- **`outDir`:** This specifies the output directory where the compiled JavaScript files should go. In this case, we want to place them in the `build/js` folder.
- **`rootDir`:** This specifies the root directory of your TypeScript files. In our case, it's the `src` folder where all the `.ts` files reside.

Here is the `tsconfig.json` after modifying it:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build/js", // Specify where to output the compiled JavaScript files
    "rootDir": "./src", // Specify where the TypeScript files are located
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*" // This includes all files in the src directory
  ]
}
```

### 4. **What is the `noEmitOnError` option for?**

The `noEmitOnError` option in `tsconfig.json` is a TypeScript compiler setting that prevents the compiler from emitting (writing) any JavaScript files if there are TypeScript errors in the cod. By default, TypeScript will still generate JavaScript files even if there are errors in the TypeScript code. Setting `noEmitOnError` to `true` ensures that no JavaScript files are produced until the TypeScript code is error-free.

```json
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

### 5. **How to tell TypeScript to watch for changes**

To automatically recompile your TypeScript files every time you make a change, you can use the `--watch` (or `-w`) option with the `tsc` command.

```bash
tsc -w
```

### Summary of Key Points:

- **`src/`** is where the TypeScript source files reside.
- **`build/`** is where the compiled JavaScript files will go.
- **`tsconfig.json`** configures TypeScript's behavior (e.g., `outDir`, `rootDir`, `noEmitOnError`, etc.).
- **`noEmitOnError`** ensures TypeScript doesn't generate JavaScript files if there are errors in the code.
- **`tsc --watch`** allows TypeScript to automatically recompile files when changes are detected.
