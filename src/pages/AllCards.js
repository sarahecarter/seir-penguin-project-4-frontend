import Card from "../components/Card"

const AllCards = ({flashcards}) => {
    return flashcards.map((flashcard) => {
        return <Card key={flashcard.id} flashcard={flashcard}/>
    })
}

export default AllCards