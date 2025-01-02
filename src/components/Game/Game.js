import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import Guesser from "../Guesser"
import GuessList from "../GuessList"
import EndGameBanner from "../EndGameBanner/EndGameBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  function generateEmptyGuess() {
    return { id: crypto.randomUUID(), guess: "" }
  }

  const [gameWon, setGameWon] = React.useState(false)
  const [allowGuessing, setAllowGuessing] = React.useState(true)

  const [guesses, setGuesses] = React.useState(
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => generateEmptyGuess())
  )

  function addGuess(word) {
    if (!allowGuessing) {
      console.log("addGuess() Guessing not allowed. Aborting.")
      return
    }

    const nextGuesses = [...guesses]
    for (let i = 0; i < guesses.length; i++) {
      const guess = guesses[i]

      if (guess.guess !== "") continue
      guess.guess = word

      if (i === guesses.length - 1) {
        console.log(
          `addGuess() Max # of guesses reached: ${NUM_OF_GUESSES_ALLOWED}`
        )
        setAllowGuessing(false)
      }

      if (word === answer) {
        setGameWon(true)
        setAllowGuessing(false)
      }

      break
    }

    console.log("nextGuesses =", nextGuesses)
    setGuesses(nextGuesses)
  }

  return (
    <>
      <GuessList answer={answer} guesses={guesses} />
      {allowGuessing ? (
        <Guesser addGuess={addGuess} allowGuessing={allowGuessing} />
      ) : (
        <EndGameBanner
          won={gameWon}
          numAttempts={guesses.filter((guess) => guess.guess !== "").length}
          answer={answer}
        />
      )}
    </>
  )
}

export default Game
