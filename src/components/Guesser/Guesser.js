import React from "react"

function Guesser({ addGuess }) {
  const [guess, setGuess] = React.useState("")
  const validGuessPattern = /^[A-Z]+$/

  function handleSubmit(event) {
    event.preventDefault()
    if (guess.length !== 5) {
      console.log("handleSubmit() Length != 5. Aborting.")
      return
    }

    console.log({ guess: guess })
    addGuess(guess)
    setGuess("")
  }

  function handleTyping(event) {
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
