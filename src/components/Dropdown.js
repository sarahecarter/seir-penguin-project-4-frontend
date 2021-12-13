import {useState} from "react"

const Dropdown = ({flashcards, firstOption, handleChange}) => {

    let topics = []

    flashcards.forEach((card) => {
        if (!topics.includes(card.topic)) {
            topics.push(card.topic)
        }
    })

    return <select onChange={handleChange} defaultValue={firstOption === "All Cards" ? "All Cards" : "Select Topic"}>
        <option disabled>Select Topic</option>
        <option>{firstOption}</option>
        {topics.map((topic, index) => {
            return <option key={index}>{topic}</option>
        })}
    </select>
}

export default Dropdown