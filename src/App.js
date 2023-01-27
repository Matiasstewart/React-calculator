import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import Button from './components/common/Button/Button';
import Display from './components/common/Display/Display';
import { useState } from 'react';
import ButtonAC from './components/common/ButtonAC/ButtonAC';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("")


  const addInput = val =>{
    if ( 
      (
      input.slice(-1) === "/" ||
      input.slice(-1) === "*" ||
      input.slice(-1) === "-" ||
      input.slice(-1) === "+"
      ) && (
      val === "/" ||
      val === "*" ||
      val === "-" ||
      val === "+"
      ) 
      ){
      return
    } else {
      setInput(input + val)
    }
  }


  const handdleClear = () =>{
    setInput("")
  }

  const calculateResult = () =>{
    if(input){
      setInput(evaluate(input))
    } else {
      alert("Ingrese valores para realizar los calculos")
    }
  }

  const changeSimbol = () => {
    setInput(`-(${input})`)
  }


  return (
    <div className="App">
      <div className='headContainer'>
        <div className='title'>
          <FontAwesomeIcon icon={faCalculator} className="calculatorIcon" />
          <div className='upBar'>React Calulator</div>
        </div>
        <Display className="display" input={input}/>
      </div>
      <div className='calculatorContainer'>
        <div className='row'>
          <ButtonAC handdleClear={handdleClear} />
          <Button value={"±"} handdleClick={changeSimbol}></Button>
          <Button value={"%"} handdleClick={addInput}></Button>
          <Button value={"/"} handdleClick={addInput}></Button>
        </div>
        <div className='row'>
          <Button value={"7"} handdleClick={addInput}></Button>
          <Button value={"8"} handdleClick={addInput}></Button>
          <Button value={"9"} handdleClick={addInput}></Button>
          <Button value={"*"} handdleClick={addInput}></Button>
        </div>
        <div className='row'>
          <Button value={"4"} handdleClick={addInput}></Button>
          <Button value={"5"} handdleClick={addInput}></Button>
          <Button value={"6"} handdleClick={addInput}></Button>
          <Button value={"-"} handdleClick={addInput}></Button>
        </div>
        <div className='row'>
          <Button value={"1"} handdleClick={addInput}></Button>
          <Button value={"2"} handdleClick={addInput}></Button>
          <Button value={"3"} handdleClick={addInput}></Button>
          <Button value={"+"} handdleClick={addInput}></Button>
        </div>
        <div className='row'>
          <div className='zeroContainer'>
            <Button value={"0"} handdleClick={addInput}></Button>
          </div>
          <div className='equalContainer'>
            <Button value={"."} handdleClick={addInput}></Button>
            <Button value={"="} handdleClick={calculateResult}></Button>
          </div>
        </div>
      </div>
      <div className='addBtnContainer'>
        <button className='btnAdd'>ADD</button>
      </div>
    </div>
  );
}

export default App;
