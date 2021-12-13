import StudyCard from "../components/StudyCard"
import Dropdown from "../components/Dropdown"
import { useState } from "react"

const Study = ({flashcards, selectedTopic, handleTopicChange}) => {  

    const [studyByTerm, setStudyByTerm] = useState(false)

    return <div className="study">
        <h2>Study by:</h2>
        <div className="study-btns">
            <button onClick={() => setStudyByTerm(true)} className="study-option">Term</button>
            <button onClick={() => setStudyByTerm(false)} className="study-option">Definition</button>
        </div>
        <Dropdown flashcards={flashcards} firstOption="All Cards" handleChange={handleTopicChange}></Dropdown>
        {flashcards?.filter((flashcard) => {
            if (selectedTopic === "All Cards") return flashcard
            if (selectedTopic === flashcard.topic) return flashcard
        })
        .map((card) => {
            return <StudyCard key={card.id} flashcard={card} term={studyByTerm}/>
        })}
    </div>
}

export default Study