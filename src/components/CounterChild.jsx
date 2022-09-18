import React from "react";
import CounterChildOfChild from "./CounterChildOfChild";
const CounterChild = (props)=>{
    return (
      <CounterChildOfChild count={props.count}/>
    )
}
export default CounterChild;