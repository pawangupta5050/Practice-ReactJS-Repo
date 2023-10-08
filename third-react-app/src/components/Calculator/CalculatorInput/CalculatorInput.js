import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import style from './CalculatorInput.module.css'

const initialInput = {
  "current-savings" : "10000",
  "yearly-contribution" : "1200",
  "expected-return" : "7",
  duration : "10",
}

function CalculatorInput(props) {

  const [userInput, setUserInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    if(e.target.id === "current-savings"){
      if(e.target.value.length === 0){
        return;
      }else {
        setUserInput(prev => ({...prev, "current-savings" : e.target.value}))
      }
      // console.log(userInput);  
    }else if(e.target.id === "yearly-contribution"){
      console.log("yearly-contribution")
      if(e.target.value.length === 0){
        return;
      }else {
        setUserInput(prev => ({...prev, "yearly-contribution" : e.target.value}))
      }
    }else if(e.target.id === "expected-return"){
      console.log("expected-return")
      if(e.target.value.length === 0){
        return;
      }else {
        setUserInput(prev => ({...prev, "expected-return" : e.target.value}))
      }
    }else if(e.target.id === "duration"){
      console.log("duration")
      if(e.target.value.length === 0){
        return;
      }else {
        setUserInput(prev => ({...prev, "duration" : e.target.value}))
      }
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    props.getUserInput(userInput)
  }

  const resetHandler = (e) => {
    console.log('reset')
    setUserInput(initialInput)
  }

  
  return (
    <div>
        <form className={style.form} onSubmit={formSubmitHandler} >
        <div className={style['input-group']}>
          <p>
            <label htmlFor=",">Current Savings ($)</label>
            <input type="number" id="current-savings" value={userInput['current-savings']} onChange={inputChangeHandler} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={userInput['yearly-contribution']} onChange={inputChangeHandler} />
          </p>
        </div>
        <div className={style['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={userInput['expected-return']} onChange={inputChangeHandler} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={userInput['duration']} onChange={inputChangeHandler} />
          </p>
        </div>
        <p className={style.actions}>
          <Button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </Button>
          <Button type="submit" className="button">
            Calculate
          </Button>
        </p>
      </form>
    </div>
  )
}

export default CalculatorInput