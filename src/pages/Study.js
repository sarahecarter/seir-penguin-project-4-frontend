import { useState } from "react"

const Study = ({flashcards}) => {

    const [selectedCard, setSelectedCard] = useState(null)

    // Animation inspired by this tutorial
    // https://www.w3schools.com/howto/howto_css_flip_card.asp


    // Get a random flashcard from the flashcards array 
    const getRandomFlashcard = (flashcards) => {
        const randomNum = Math.floor(Math.random() * flashcards.length)
        setSelectedCard(flashcards[randomNum])
    }

    const handleStart = () => {
        getRandomFlashcard(flashcards)
    }
    

    return <div className="study">
        <button onClick={handleStart}>Start</button>
        <div className="card-flip">
            <div className="card-flip-inner">
                <div className="card-flip-front">
                    <h4>{selectedCard.definition}</h4>
                </div>
                <div className="card-flip-back">
                    <h2>{selectedCard.term}</h2>
                </div>
            </div>
        </div>
    </div>
}

export default Study