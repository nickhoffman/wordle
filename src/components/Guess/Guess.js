import React from "react"

function Guess({ answer, guess }) {
  const guessLetters =
    guess.guess === "" ? ["", "", "", "", ""] : Array.from(guess.guess)
  // console.log("guessLetters =", guessLetters)

  const answerLetters = Array.from(answer)
  // console.log("answerLetters =", answerLetters)

  function classListForLetter({ letter, index }) {
    const classes = ["cell"]

    if (letter === "") {
      // Do nothing
    } else if (answerLetters[index] === letter) {
      classes.push("correct")
    } else if (answer.includes(letter)) {
      classes.push("misplaced")
    } else {
      classes.push("incorrect")
    }

    return classes.join(" ")
  }

  return (
    <p key={guess.id} className="guess">
      {guessLetters.map((letter, index) => {
        return (
          <span key={index} className={classListForLetter({ letter, index })}>
            {letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
