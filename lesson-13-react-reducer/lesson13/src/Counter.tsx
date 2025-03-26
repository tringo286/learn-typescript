import { ReactNode, useReducer, ChangeEvent } from "react";

const initState = { count: 0, text: "" };

// An enum is a special "class" that represents a group of constants 
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

// Defines the shape of an action object:
    // type: Must be one of the REDUCER_ACTION_TYPE values.
    // payload?: An optional string (used for the NEW_INPUT action to carry the text input value).
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// typeof initState means: { count: 0, text: "" }
// reducer: A function that takes the current state and an action, then returns a new state based on the action's type.

// switch statement: Determines which case to handle based on action.type.

// INCREMENT: Increases count by 1.

// DECREMENT: Decreases count by 1.

// NEW_INPUT: Updates the text field with the payload (or sets it to an empty string if no payload is provided).
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

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    }); 
  };

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
};
export default Counter;
