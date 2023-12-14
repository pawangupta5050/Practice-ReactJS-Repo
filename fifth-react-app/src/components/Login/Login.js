import React, {useState} from 'react'
import Card from '../UI/Card/Card';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [userInput, setUserInput] = useState({
    email : '',
    password : ''
  });
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangeHandler = (event) => {
    if(event.target.id === 'email'){
      setUserInput(prev => ({...prev, email : event.target.value}) );
      setEmailIsValid(event.target.value.includes('@') && event.target.value.includes('.'));
      console.log(emailIsValid)
    }else if(event.target.id === 'password'){
      setUserInput(prev => ({...prev, password : event.target.value}) );
      setPasswordIsValid(event.target.value.trim().length > 6);
      console.log(passwordIsValid)
    }

    setFormIsValid(
      emailIsValid && passwordIsValid
    );
  };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);

  //   setFormIsValid(
  //     event.target.value.trim().length > 6 && enteredEmail.includes('@')
  //   );
  // };

  // const validateEmailHandler = () => {
    
  // };

  // const validatePasswordHandler = () => {
    
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userInput.email, userInput.password);
  };

  return (
    <Card className={styles.login}>
    <form onSubmit={submitHandler}>
      <div
        className={`${styles.control} ${
          emailIsValid === false ? styles.invalid : ''
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={userInput.email}
          onChange={inputChangeHandler}
          onBlur={inputChangeHandler}
        />
      </div>
      <div
        className={`${styles.control} ${
          passwordIsValid === false ? styles.invalid : ''
        }`}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userInput.password}
          onChange={inputChangeHandler}
          onBlur={inputChangeHandler}
        />
      </div>
      <div className={styles.actions}>
        <Button type="submit" className={styles.btn} disabled={!formIsValid}>
          Login
        </Button>
      </div>
    </form>
  </Card>
  )
}

export default Login;