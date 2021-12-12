import {Link, useParams} from "react-router-dom"

const SingleCard = ({flashcards, edit, deleteFlashcard}) => {
    // get the params from the url 
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular card 
    const flashcard = flashcards.find((card) => card.id === id)

    return <div>
        <div className="single-card">
            <div>
                <h2>{flashcard?.term}</h2>
                <h4>{flashcard?.definition}</h4>
            </div>

            <div className="card-btns">
                <button onClick={() => edit(flashcard)}><i class="fas fa-pen"></i></button>
                <button onClick={() => deleteFlashcard(flashcard)}><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
        <Link to="/">
            <button className="return">Return to Main List</button>
        </Link>
    </div>
}

export default SingleCard