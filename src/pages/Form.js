import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Form = ({initialFlashcard, handleSubmit, buttonLabel}) => {
    const navigate = useNavigate()

    //////////////////////////////
    // Form state
    //////////////////////////////
    const [formData, setFormData] = useState(initialFlashcard)

    //////////////////////////////
    // Functions
    //////////////////////////////
    // updates state when inputs change
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // when form is submitted
    const handleSubmission = (e) => {
        // prevents form from refreshing
        e.preventDefault()
        // pass formData to handleSubmit function
        handleSubmit(formData)
        // brings user back to main page
        navigate("/")
    }

    return <div>
            <form onSubmit={handleSubmission}>
        
        <div className="form-container">
            <label for="topic">Topic:</label>
            <input
                type="text"
                onChange={handleChange}
                value={formData.topic}
                name="topic"
                id="topic"
            />
        </div>

        <div className="form-container">
            <label for="term">Term:</label>
            <input
                type="text"
                onChange={handleChange}
                value={formData.term}
                name="term"
                id="term"
            />
        </div>

        <div className="form-container">
            <label for="definition">Definition:</label>
            <textarea
                type="text"
                onChange={handleChange}
                value={formData.definition}
                name="definition"
                id="definition"
            />
        </div>

        <input type="submit" value={buttonLabel}/>
    </form>
        <Link to="/">
            <button className="return">Return to Main List</button>
        </Link>
    </div>

}

export default Form