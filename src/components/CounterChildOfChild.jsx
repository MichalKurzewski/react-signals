import React from "react";
import count from "./Counter";
const CounterChildOfChild = () => {
  return <button onClick={()=>count.value++}>increment in Child</button>;
};

export default CounterChildOfChild;
