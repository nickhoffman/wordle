import React from "react"

function Guesser({ addGuess, allowGuessing }) {
  const [guess, setGuess] = React.useState("")
  const validGuessPattern = /^[A-Z]*$/
  const maxGuessLength = 5

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`handleSubmit() guess = ${guess}`)
    if (guess.length !== maxGuessLength) {
      console.log(`handleSubmit() Length != ${maxGuessLength}. Aborting.`)
      return
    }

    addGuess(guess)
    setGuess("")
  }

  function handleTyping(event) {
    if (!allowGuessing) {
      console.log("handleTyping() Disabled. Aborting.")
      event.preventDefault()
      return
    }

    const newGuess = event.target.value.toUpperCase()

    if (!validGuessPattern.test(newGuess)) {
      console.log("handleTyping() Invalid character. Aborting.")
      return
    }

    if (newGuess.length > 5) {
      console.log("handleTyping() Too long. Aborting.")
      return
    }

    setGuess(newGuess)
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleTyping}
      />
    </form>
  )
}

export default Guesser
