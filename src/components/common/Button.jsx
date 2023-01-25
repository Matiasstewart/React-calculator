import React from 'react'
import "./styleButton.css"

const Button = ({value}) => {

  const isNumber = value =>{
    return !( (isNaN(value) && (value !== ".")) || (value === "0"));
  }

  const isOperator = value =>{
    return (value==="÷" || value==="X" || value==="-" || value==="+" || value==="=")
  }

  const isExtra = value => {
    return (value==="AC" || value==="±" || value==="%")
  }


  return (
    <div
      className={`buttonContainer ${isNumber(value)? "number" : "" }${value === "0" ? "zero" : ""}${isOperator(value)? "operator" : ""}${isExtra(value)? "extra" : ""}`}
    >
      {value}
    </div>
  )
}

export default Button