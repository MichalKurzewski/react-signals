import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import { useEffect } from "react";
import { useSignal} from "@preact/signals-react";

function App() {
  const rerenders = useSignal(0);
  useEffect(()=>{
    rerenders.value++;
    console.log('%c [ Rerenders ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', rerenders.value)
 })
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Counter/>
    </div>
  );
}

export default App;
