import React from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import Die from './components/die';

export default function App(props) {

  const [dice, setDice] = React.useState(allNewDice())



  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice () {
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => <Die value={die} /> )

  return(
    <main className="main-body">
      <div className='dice-container'>
        {diceElements}
      </div>

      <button
      onClick={rollDice}
      className='roll-button'
      >R🎲LL-DICE</button>

    </main>
  )
}

