import Card from "../components/Card"
import { Link } from "react-router-dom"
import { useState } from "react"

const AllCards = ({flashcards}) => {

    return <div>
        <div className="card-options">
            <Link to="/new"><button className="add"><i className="fas fa-plus"></i></button></Link>
        </div>
        <div className="cards-container">
                {flashcards?.map((flashcard) => {
                        return <Card key={flashcard.id} flashcard={flashcard}/>
                    }
                )}
        </div>
    </div>
}

export default AllCards