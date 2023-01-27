import React from 'react'
import "./styleButton.css"

const Button = ({value, handdleClick}) => {

  const isNumber = value =>{
    return !( (isNaN(value) && (value !== ".")) || (value === "0"));
  }

  const isOperator = value =>{
    return (value==="/" || value==="*" || value==="-" || value==="+" || value==="=")
  }

  const isExtra = value => {
    return (value==="AC" || value==="±" || value==="%")
  }

  const simbolConverter = (x) => {
    if(x === "*"){
      return "x"
    } else if ( x === "/"){
      return "÷"
    }
    else {
      return x
    }
  }

  return (
    <div
      className={`buttonContainer ${isNumber(value)? "number" : "" }${value === "0" ? "zero" : ""}${isOperator(value)? "operator" : ""}${isExtra(value)? "extra" : ""}`}
      onClick={() => handdleClick(value)}
    >
      {simbolConverter(value)}
    </div>
  )
}

export default Button