import React, { useEffect } from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import Die from './components/die';
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

export default function App(props) {

  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState("")

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true ) 
      console.log('you won!')
    }
  }, [dice])


  function generateNewDie() {
    return {
      value:Math.ceil(Math.random() * 6),
      isHeld:false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice () {
    if(!tenzies) {
      setDice(oldDice => oldDice.map( die => {
        return die.isHeld ?
            die : 
            generateNewDie()
      }))
    } else{
      setTenzies(false)
      setDice(allNewDice())
    }
  }



  function holdDice(id) {
    setDice(oldDice => oldDice.map( die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
          // generateNewDie()
    }))
}

  const diceElements = dice.map(die => (
  <Die 
  key={die.id} 
  value={die.value} 
  isHeld={die.isHeld} 
  holdDice={() => holdDice(die.id)} 
  />
  ) )



  return(

    <main className="main-body">
      {tenzies && <Confetti />}
      <h1 className="title"><p>Franco's <p/> Tenzies 🎲🎲</h1>
      <p className="description"> Roll untill all dice are the same. Click each dice to save it 
      as its current value between rolls

      </p>

      <div className='dice-container'>
        {diceElements}
      </div>

      <button
      
      onClick={rollDice}
      className='roll-button'
      >{tenzies ? "You Won🔥,New Game" : "R🎲LL DICE"}</button>

    </main>
  )
}

