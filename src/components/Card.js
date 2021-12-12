import {Link} from "react-router-dom"

const Card = ({flashcard}) => {
    return <Link to={`/flashcards/${flashcard.id}`} className="card">
            <h2>{flashcard.term}</h2>
            <h4>{flashcard.definition}</h4>
        </Link>

}

export default Card