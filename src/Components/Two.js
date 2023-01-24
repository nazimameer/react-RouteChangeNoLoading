import React from 'react'
import { useContext } from "react";
import { Appcontext } from "../AppContext";
function Two() {
  const {data} = useContext(Appcontext)
    return (
    <div>
      <h1>data Two {data}</h1>
        
    </div>
  )
}

export default Two
