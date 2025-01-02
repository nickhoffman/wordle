import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import Guesser from "../Guesser"
import GuessList from "../GuessList"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function addGuess(word) {
    const newGuess = {
      id: crypto.randomUUID(),
      guess: word,
    }

    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <GuessList guesses={guesses}></GuessList>
      <Guesser addGuess={addGuess}></Guesser>
    </>
  )
}

export default Game
