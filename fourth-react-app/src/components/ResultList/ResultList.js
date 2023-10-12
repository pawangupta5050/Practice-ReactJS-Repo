import React from 'react'
import style from './ResultList.module.css'
import Card from '../UI/Card/Card'

function ResultList(props) {

  if(props.results.length < 1) {
    return <p style={{textAlign : 'center', color: 'white'}}>NO USER ADDED</p>
  }
  
  return (
    <Card>
    <ul>
      {props.results.map((info, index) => <li key={index} className={style['list']}>{info.username} ({info.age} years old)</li>)}
    </ul>
    </Card>
  )
}

export default ResultList