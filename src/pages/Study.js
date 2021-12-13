import StudyCard from "../components/StudyCard"
import { useState } from "react"

const Study = ({flashcards}) => {  

    const [studyByTerm, setStudyByTerm] = useState(false)

    return <div className="study">
        <h2>Study by:</h2>
        <div className="study-btns">
            <button onClick={() => setStudyByTerm(true)} className="study-option">Term</button>
            <button onClick={() => setStudyByTerm(false)} className="study-option">Definition</button>
        </div>
        {flashcards.map((card) => {
            return <StudyCard key={card.id} flashcard={card} term={studyByTerm}/>
        })}
    </div>
}

export default Study