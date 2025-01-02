import React from "react"
import Guess from "../Guess"

function GuessList({ answer, guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.id} answer={answer} guess={guess} />
      ))}
    </div>
  )
}

export default GuessList
