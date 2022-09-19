import "./App.css";
import React, { useEffect } from "react";
import Counter from "./components/Counter";
import { useSignal} from "@preact/signals-react";

function App() {
  const rerenders = useSignal(0);
  useEffect(()=>{
    rerenders.value++;
    console.log('%c [ Rerenders Root]-20', 'font-size:13px; background:pink; color:#bf2c9f;', rerenders.value)
 })
  return (
    <div className="App">
      <h1 className="header">SignalS + Composition test</h1>
      <Counter/>
    </div>
  );
}

export default App;
