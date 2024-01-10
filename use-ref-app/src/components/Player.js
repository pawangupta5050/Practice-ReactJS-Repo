import React, {useState, useRef} from 'react'

function Player() {

    const playerName = useRef()

    const [enteredPlayerName, setEnteredPlayerName] = useState(null)

    const clickHandler = () => {
        setEnteredPlayerName(playerName.current.value)
        playerName.current.value = ""
    }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unknown Entity'}</h2>
      <p>
        <input type="text" id='inputHandler' ref={playerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  )
}

export default Player