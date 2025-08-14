import React, {useReducer} from "react";

const counterReducer = (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count+1};
        case 'DECREMENT':
            return {count: state.count-1};
        default :
            return state;
    }
};

function Counter() {
    const initialState = { count: 0};
    const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
