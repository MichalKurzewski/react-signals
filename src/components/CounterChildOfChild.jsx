import React, { useEffect } from "react";
import { useSignal } from "@preact/signals-react";

const CounterChildOfChild = (props) => {

  const rerendersCounterChildOfChild = useSignal(0);
  useEffect(()=>{
    rerendersCounterChildOfChild.value++;
    console.log('%c [ RerendersCounterChildOfChild ]', 'font-size:13px; background:pink; color:#bf2c9f;', rerendersCounterChildOfChild.value)
  });
  
  return (
    <button onClick={() => props.count.value++}>increment in Child</button>
  );
};

export default CounterChildOfChild;
