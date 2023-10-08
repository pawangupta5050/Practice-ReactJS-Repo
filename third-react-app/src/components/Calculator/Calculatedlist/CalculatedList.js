import React from 'react'
import style from './CalculatedList.module.css'

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function CalculatedList(props) {

  // console.log(props.calculatedList)
  return (
    <div>


      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className={style.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            props.results.map(item => (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.savingsEndOfYear)}</td>
                <td>{formatter.format(item.yearlyInterest)}</td>
                <td>{formatter.format(item.savingsEndOfYear - props.initialInvestment - item.yearlyContribution * item.year)}</td>
                <td>{formatter.format(props.initialInvestment + item.yearlyContribution * item.year)}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default CalculatedList