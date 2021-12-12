import Card from "../components/Card"
import { Link } from "react-router-dom"

const AllCards = ({flashcards}) => {
    let topics = []

    // Function to get all card topics 
    // const getTopics = (flashcards) => {
    //     for (card of flashcards) {
    //         if (!topics.includes(card.topic.toLowerCase())) {
    //             topics.push(card.topic)
    //         }
    //     }
    // }

    return <div>
        <div className="card-options">
            <select>
                <option disabled>Select Topic</option>
                <option>All Cards</option>
                {topics.map((topic)=> {
                    return <option>{topic}</option>
                })}
            </select>
            <Link to="/new"><button className="add"><i class="fas fa-plus"></i></button></Link>
        </div>
        <div className="cards-container">
            {flashcards.map((flashcard) => {
                    return <Card key={flashcard.id} flashcard={flashcard}/>
                }
            )}
        </div>
    </div>
}

export default AllCards