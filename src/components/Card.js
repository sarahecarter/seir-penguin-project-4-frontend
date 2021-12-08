import {Link} from "react-router-dom"

const Card = ({flashcard}) => {
    return <div className="card">
        <Link to={`/flashcards/${flashcard.id}`}>
            <h1>{flashcard.term}</h1>
        </Link>
        <h2>{flashcard.definition}</h2>
    </div>
}

export default Card