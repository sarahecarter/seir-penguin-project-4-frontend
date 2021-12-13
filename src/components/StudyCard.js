const StudyCard = ({flashcard, term}) => {

    // Animation inspired by this tutorial
    // https://www.w3schools.com/howto/howto_css_flip_card.asp

    return <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h3>{term ? flashcard.term : flashcard.definition}</h3>
        </div>
        <div className="flip-card-back">
            <h2>{term ? flashcard.definition : flashcard.term}</h2>
        </div>
    </div>
</div>
}

export default StudyCard