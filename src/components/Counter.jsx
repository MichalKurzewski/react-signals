import React from "react";
import { signal } from "@preact/signals-react";
import CounterChild from "./CounterChild";

const count = signal(5);
const Counter = () => {

  return <div>
    <h2>{count.value}</h2>
    <button onClick={()=>count.value++}>increment</button>
    <CounterChild/>
  </div>;
};

export default Counter;
