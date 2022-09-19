import React, { useEffect } from "react";
import { useSignal } from "@preact/signals-react";

const CounterChild = (props) => {

  const rerendersCounterChild = useSignal(0);
  useEffect(()=>{
    rerendersCounterChild.value++;
    console.log('%c [ RerendersCounterChild ]', 'font-size:13px; background:pink; color:#bf2c9f;', rerendersCounterChild.value)
  });

  return <>{props.counterChildOfChild}</>;
};
export default CounterChild;
