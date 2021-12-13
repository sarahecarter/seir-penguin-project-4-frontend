import Card from "../components/Card"
import Dropdown from "../components/Dropdown"
import { Link } from "react-router-dom"
import { useState } from "react"

const AllCards = ({flashcards, selectedTopic, handleTopicChange}) => {

    return <div>
        <div className="card-options">
            <Dropdown flashcards={flashcards} firstOption="All Cards" handleChange={handleTopicChange}></Dropdown>
            <Link to="/new"><button className="add"><i className="fas fa-plus"></i></button></Link>
        </div>
        <div className="cards-container">
                {flashcards?.filter((flashcard) => {
                    if (selectedTopic === "All Cards") return flashcard
                    if (selectedTopic === flashcard.topic) return flashcard
                })
                .map((flashcard) => {
                        return <Card key={flashcard.id} flashcard={flashcard}/>
                    }
                )}
        </div>
    </div>
}

export default AllCards