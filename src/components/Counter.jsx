import React from "react";
import { useSignal, useComputed, effect } from "@preact/signals-react";
import CounterChild from "./CounterChild";

const Counter = () => {
  const count = useSignal(5);
  const doubled = useComputed(() => count.value * 2);
  effect(() =>
    console.log(
      "%c [ test ]-7",
      "font-size:13px; background:pink; color:#bf2c9f;",
      count.value,
      doubled.value
    )
  );

  return (
    <div>
      <h2>{count.value}</h2>
      <button onClick={() => count.value++}>increment</button>
      <CounterChild />
    </div>
  );
};

export default Counter;
