import { useState } from "react";
import CalculatedList from "./components/Calculator/Calculatedlist/CalculatedList";
import CalculatorHeader from "./components/Calculator/CalculatorHeader/CalculatorHeader";
import CalculatorInput from "./components/Calculator/CalculatorInput/CalculatorInput";

function App() {

  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <div>
      <CalculatorHeader />
      <CalculatorInput getUserInput={calculateHandler} />
      {userInput ? <CalculatedList results={yearlyData} initialInvestment={+userInput['current-savings']} /> : <p style={{'textAlign': 'center'}}>No Invest Calculated Yet</p> }
      
    </div>
  );
}

export default App;