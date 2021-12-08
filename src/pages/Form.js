import { useState } from "react"
import { useNavigate } from "react-router"

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

    return <form onSubmit={handleSubmission}>
        <input
            type="text"
            onChange={handleChange}
            value={formData.topic}
            name="topic"
        />
        <input
            type="text"
            onChange={handleChange}
            value={formData.term}
            name="term"
        />
        <input
            type="text"
            onChange={handleChange}
            value={formData.definition}
            name="definition"
        />
        <input type="submit" value={buttonLabel}/>
    </form>
}

export default Form