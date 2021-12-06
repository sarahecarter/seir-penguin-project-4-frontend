# Flashcard App
#### By Sarah Carter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This project is a flashcard app used for studying. Users can add new terms and definitions to their library so that they can study up on what they are learning. They will also be able to edit and delete their cards.

## Components
- Header 
- Main
- Index
- Show
- Form

## React Component Architecture
```
-> App
  -> Header
  -> Main |state: cards|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: cards|
      -> Route |path="/cards/:id"|
        -> Show |Props: cards, getTargetCard, deleteCard|
      -> Route |path="/edit"|
        -> Form |Props: initialCard, updateCard, buttonLabel|
      -> Route |path="/new"|
        -> Form |Props: initialCard, addCard, buttonLabel|
```

## React Router Route Table
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | displays all flashcards (index)||
| /cards/:id | Show | get | shows a specific flashcard (show) |
| /new | Form | post | adds a new flashcard (create) |
| /edit | Form | put | edits a flashcard (update) |
| /cards/:id | Show | delete | deletes a flashcard (destroy) |

## User Stories
As a user, I can see a list of all my flashcards when I visit the page. \
As a user, I can click on one of my flashcards and have it take me to a show page that displays details about the card. \
As a user, I can add a new flashcard and see that it immediately loads on the page so that I know I successfully added a card. \
As a user, I can delete a flashcard so I can keep my list relevant. \
As a user, I can update a flashcard in case I made a typo. \

## Technologies
REACT, react-router-dom, Sass

## Bonus Features
- If there is enough time, I would like to create a Study page where the user can enter a "study mode" that involves showing card terms. Users would be able to flip cards over by clicking a reveal button. A CSS keyframe animation would make the card appear to flip over and display the definition on the other side.

## Challenges

# Backend Details:

## DEPENDENCIES
- Python
- Masonite
- Postgres

## MODELS
Flashcard:
- term: string
- definition: string

## BACKEND ROUTE TABLE
| url | method | action |
|-----|--------|--------|
| /cards | get | gets all flashcards (index)||
| /cards | post | adds a new flashcard (create) |
| /cards/:id | get | shows a specific flashcard (show) |
| /cards/:id | put | updates a flashcard (update) |
| /cards/:id | delete | deletes a flashcard (destroy) |
