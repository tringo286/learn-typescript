# Lesson 13: React Reducer

## Overview

In this lesson, we'll explore the concept of **Reducers** in React, which allows you to manage the state of your application in a more structured way, especially when dealing with complex state logic. Reducers are typically used with the `useReducer` hook, which is a more advanced alternative to `useState` when dealing with multiple state variables or more complex state management.

## Key Concepts

- **useReducer Hook**: A hook for managing state that is more powerful than `useState` when dealing with more complex state logic.
- **Actions**: Objects that define what happens to the state, including a `type` and optional `payload`.
- **Reducer Function**: A pure function that takes the current state and an action, and returns a new state.
- **Enum**: A TypeScript feature that allows for better type safety when defining action types.

## Code Walkthrough

### 1. Initializing State

In this example, we initialize our state with two properties: `count` (set to 0) and `text` (set to an empty string).

```typescript
const initState = { count: 0, text: "" };
```

### 2. Defining Action Types

We use TypeScript's `enum` feature to define the different types of actions we can perform on our state:

- **INCREMENT**: Increases the count by 1.
- **DECREMENT**: Decreases the count by 1.
- **NEW_INPUT**: Updates the text property with the value from an input field.

```typescript
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}
```

### 3. Reducer Function

The reducer function is a pure function that receives the current state and an action, and returns a new state. The `switch` statement determines how the state should change based on the action type.

```typescript
const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};
```

### 4. Using `useReducer` Hook

The `useReducer` hook is used to manage the state based on our reducer function and initial state. It returns the current state and a dispatch function used to dispatch actions.

```typescript
const [state, dispatch] = useReducer(reducer, initState);
```

### 5. Dispatching Actions

- **Increment**: Dispatches an action to increase the count.
- **Decrement**: Dispatches an action to decrease the count.
- **Text Input**: Dispatches an action to update the text state with the value from the input field.

```typescript
const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
  dispatch({
    type: REDUCER_ACTION_TYPE.NEW_INPUT,
    payload: e.target.value,
  });
};
```

## 6. Rendering the UI

The `Counter` component renders:

- The current value of count using a children function.
- Two buttons for incrementing and decrementing the count.
- An input field for updating the text state.

```typescript
return (
  <>
    <h1>{children(state.count)}</h1>
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    <input type="text" onChange={handleTextInput} />
    <h2>{state.text}</h2>
  </>
);
```

## Conclusion
In this lesson, you've learned how to use useReducer in React to manage complex state with multiple variables and actions. The reducer function and dispatch method allow you to control your state updates in a more predictable way, and by using enums and TypeScript, you ensure better type safety in your code.