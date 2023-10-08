import React from 'react'
import logo from "../../../assets/investment-calculator-logo.png";
import style from './CalculatorHeader.module.css'

function CalculatorHeader() {
  return (
    <div>
        <header className={style.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  )
}

export default CalculatorHeader