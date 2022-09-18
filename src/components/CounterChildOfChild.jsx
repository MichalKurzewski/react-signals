import React from "react";

const CounterChildOfChild = (props) => {
  return (
    <button onClick={() => props.count.value++}>increment in Child</button>
  );
};

export default CounterChildOfChild;
