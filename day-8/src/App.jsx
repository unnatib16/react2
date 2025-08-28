import { increment,decrement } from "./counterReducer"
import {useSelector,useDispatch} from "react-redux"
import './App.css'

function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Day 8</h1>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
          </>
  )
}

export default App
