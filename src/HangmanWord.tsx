type HangmanWordProps = {
  reveal?: boolean,
  guessedLetters: string[]
  wordToGuess: string
}

export const HangmanWord = ({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) => {
  
  return (
    <div 
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
      <span style={{ borderBottom: ".1em solid black" }} key={index}>
        <span style={{
          visibility: guessedLetters.includes(letter) || reveal
            ? "visible" 
            : "hidden",
          color: guessedLetters.includes(letter)
            ? "black"
            : "red",
        }}
        >
          {letter}
        </span>
      </span>
      ))}
    </div>
  )
}
