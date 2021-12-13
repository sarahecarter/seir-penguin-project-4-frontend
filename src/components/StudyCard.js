const StudyCard = ({flashcard}) => {
    return <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h3>{flashcard.definition}</h3>
        </div>
        <div className="flip-card-back">
            <h2>{flashcard.term}</h2>
        </div>
    </div>
</div>
}

export default StudyCard