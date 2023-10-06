import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import style from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style["form-control"]} ${!isValid && style.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// Using Styled Components

// import React, { useState } from 'react';

// import Button from '../../UI/Button/Button';
// import './CourseInput.css';
// import styled from 'styled-components';

// const FormControl = styled.div`
//     margin: 0.5rem 0;
  
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'}
//   }
  
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background-color: ${props => props.invalid ? 'salmon' : 'transparent'};
//   }
  
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
   
//   }
// `;

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isValid, setIsValid] = useState(true)

//   const goalInputChangeHandler = event => {
//     setEnteredValue(event.target.value);
//     setIsValid(true)
//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false)
//       return;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <FormControl invalid={!isValid}>
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </FormControl>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;
