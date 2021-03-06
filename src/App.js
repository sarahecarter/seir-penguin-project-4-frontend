// Import components and pages
import AllCards from "./pages/AllCards";
import SingleCard from "./pages/SingleCard";
import Form from "./pages/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Study from "./pages/Study";
// Import hooks from React
import { useState, useEffect } from "react";
// Import components from React Router
import {Route, Routes, Link, useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()
  //////////////////////////////
  // State and other variables
  //////////////////////////////
  // API URL
  const url = 'https://sc-flashcards-backend.herokuapp.com/flashcards/'

  // State to hold flashcards
  const [flashcards, setFlashcards] = useState([])

  // Null flashcard
  const nullFlashcard = {
    topic: "",
    term: "",
    definition: ""
  }

  // State to hold target flashcard for edit form
  const [targetFlashcard, setTargetFlashcard] = useState(nullFlashcard)

  // State to hold card topics 
  const [topics, setTopics] = useState([])

  const [selectedTopic, setSelectedTopic] = useState()

  //////////////////////////////
  // Functions
  //////////////////////////////
  // Gets all flashcards from API
  const getFlashcards = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setFlashcards(data)
  }

  // Adds new flashcard from form data
  const addFlashcard = async (newFlashcard) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newFlashcard)
    })

    // get updated list of flashcards
    getFlashcards()
  }

  // Gets target flashcard to edit 
  const getTargetFlashcard = (flashcard) => {
    // sets the target flashcard
    setTargetFlashcard(flashcard)
    // routes user to the edit page
    navigate("/edit")
  }

  // Edits flashcard
  const updateFlashcard = async (flashcard) => {
    await fetch(url + flashcard.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(flashcard)
    })

    // get updated list of flashcards
    getFlashcards()
  }

  // Deletes a flashcard
  const deleteFlashcard = async (flashcard) => {
    await fetch(url + flashcard.id, {
      method: "delete"
    })
    getFlashcards()
    navigate("/")
  }

  // Updates the selectedTopic state from Dropdown component
  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value)
  } 

  //////////////////////////////
  // useEffects
  //////////////////////////////
  useEffect(() => {
    getFlashcards();
  }, [])

  return (
    <div className="app">
      <Header/>
        <Routes>
          <Route path="/" element={<AllCards 
          flashcards={flashcards} 
          selectedTopic={selectedTopic} 
          handleTopicChange={handleTopicChange}
          />}></Route>
          <Route path="/flashcards/:id" element={<SingleCard 
          flashcards={flashcards} 
          edit={getTargetFlashcard}
          deleteFlashcard={deleteFlashcard}
          />}/>
          <Route path="/new" element={<Form
            flashcards={flashcards}
            initialFlashcard={nullFlashcard}
            handleSubmit={addFlashcard}
            buttonLabel="Add new flashcard"
            selectedTopic={selectedTopic} 
            handleTopicChange={handleTopicChange}
          />}/>
          <Route path="/edit" element={<Form
            flashcards={flashcards}
            initialFlashcard={targetFlashcard}
            handleSubmit={updateFlashcard}
            buttonLabel="Update card"
            selectedTopic={selectedTopic} 
            handleTopicChange={handleTopicChange}
          />}/>
          <Route path="/study" element={<Study 
          flashcards={flashcards}
          selectedTopic={selectedTopic} 
          handleTopicChange={handleTopicChange}
          />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
