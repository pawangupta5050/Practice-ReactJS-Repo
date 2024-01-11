import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import style from './UserInput.module.css'
import Modal from '../UI/Modal/Modal'
import Card from '../UI/Card/Card'

function UserInput(props) {

    const [userInput, setUserInput] = useState({
        username: '',
        age: '',
    })

    const [error, setError] = useState();

    const inputChangeHandler = (e) => {
        if (e.target.id === 'username') {
            setUserInput(prev => ({
                ...prev,
                username: e.target.value
            }))
        } else if (e.target.id === 'age') {
            setUserInput(prev => ({
                ...prev,
                age: e.target.value
            }))
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(userInput)   
        if (userInput.username.trim().length !== 0 && userInput.age.trim().length !== 0 && +userInput.age > 1) {
            props.getUserInfo(userInput);
            setUserInput({
                username: '',
                age: ''
            })
        }else {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Name and Age'
            })
            return;
        }
        if (+userInput.age < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid Age'
            })
            return;
        }       
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <Modal title={error.title} message={error.message} onCancel={errorHandler} />}

            <Card>
                <form onSubmit={formSubmitHandler}>
                    <div className={style['input-group']}>
                        <p>
                            <label htmlFor="username">Username : </label>
                            <input type="text" id="username" value={userInput.username} onChange={inputChangeHandler} />
                        </p>
                        <p>
                            <label htmlFor="age">Age :</label>
                            <input type="number" id="age" value={userInput.age} onChange={inputChangeHandler} />
                        </p>
                    </div>
                    <p className={style.actions}>
                        <Button type="submit" className="button">
                            Add User
                        </Button>
                    </p>
                </form>
            </Card>
        </div>
    )
}

export default UserInput