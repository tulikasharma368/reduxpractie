import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from './actions'

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  return (
    <div >
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
      {isLogged?<h3>Login Information</h3>:<h3>Not logged in</h3>}
      
    </div>
  );
}

export default App;
