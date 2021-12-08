import {Link, useParams} from "react-router-dom"

const SingleCard = ({flashcards, edit, deleteFlashcard}) => {
    // get the params from the url 
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular card 
    const flashcard = flashcards.find((card) => card.id === id)

    return <div>
        <h1>{flashcard.term}</h1>
        <h2>{flashcard.definition}</h2>
        <button onClick={() => edit(flashcard)}>Edit Card</button>
        <button onClick={() => deleteFlashcard(flashcard)}>Delete Card</button>
        <Link to="/">
            <button>Return to Main List</button>
        </Link>
    </div>
}

export default SingleCard