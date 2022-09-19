import React, { useEffect } from "react";
import { useSignal, useComputed, effect } from "@preact/signals-react";
import CounterChild from "./CounterChild";
import CounterChildOfChild from "./CounterChildOfChild";

const Counter = (props) => {
  //signals states:
  const count = useSignal(props.count ? props.count : 5);
  const doubled = useComputed(() => count.value * 2);

  //setup for composition:
  const counterChildOfChild = <CounterChildOfChild count={count} />;

  //number of rerenders check:
  const rerendersCounter = useSignal(0);
  useEffect(() => {
    rerendersCounter.value++;
    console.log(
      "%c [ Rerenders Counter]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      rerendersCounter.value
    );
  });

  //signals effect:
  effect(() =>
    console.log(
      "%c [ signals-test ]-7",
      "font-size:13px; background:pink; color:#bf2c9f;",
      count.value,
      doubled.value
    )
  );

  return (
    <div>
      <h2 className="content">
        {count.value} * 2 = {doubled.value}
      </h2>
      <button onClick={() => count.value++}>increment</button>
      <CounterChild counterChildOfChild={counterChildOfChild} />
    </div>
  );
};

export default Counter;
