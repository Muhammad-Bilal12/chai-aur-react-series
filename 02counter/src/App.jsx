import { useState } from "react";
import "./App.css";

function App() {
  // we realise that we create a normal variable in react it change itsvalue ut its not affect the state,
  // however if want to see the update on UI we have to create useState , hooks
  // let counter = 5;

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const deleteValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>Counter APP</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add + </button>

      <button onClick={deleteValue}>Delete - </button>
    </>
  );
}

export default App;
