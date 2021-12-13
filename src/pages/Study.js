import StudyCard from "../components/StudyCard"

const Study = ({flashcards}) => {

    // Animation inspired by this tutorial
    // https://www.w3schools.com/howto/howto_css_flip_card.asp
    

    return <div className="study">
        {flashcards.map((card) => {
            return <StudyCard key={card.id} flashcard={card} />
        })}
    </div>
}

export default Study