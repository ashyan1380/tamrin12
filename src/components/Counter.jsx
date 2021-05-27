import React from "react";
import Bottun from "./Bottun"

const Counter = (num , ...props) =>{
    return(
        <div>
            <div>{num}</div>
            <button onclick="Bottun(num+1)">+</button>
        </div>
    )
}