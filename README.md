# Flashcard App
#### By Sarah Carter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This project is a flashcard app used for studying. Users can add new terms and definitions to their library so that they can study up on what they are learning. They will also be able to edit and delete their cards.

## Components
- Header
- Footer
- Card
- StudyCard
- AllCards
- Form
- SingleCard
- Study

## React Component Architecture
```
-> App
  -> Header
  -> Routes
    -> Route |path: "/"|
      -> AllCards |Props: flashcards|
    -> Route |path="/flashcards/:id"|
      -> SingleCard |Props: flashcards, getTargetFlashcard, deleteFlashcard|
    -> Route |path="/edit"|
      -> Form |Props: initialFlashcard, updateFlashcard, buttonLabel|
    -> Route |path="/new"|
      -> Form |Props: initialFlashcard, addFlashcard, buttonLabel|
    -> Route |path="/study"|
      -> Study |Props: flashcards|
  -> Footer
```

## React Router Route Table
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | displays all flashcards (index)||
| /flashcards/:id | Show | get | shows a specific flashcard (show) |
| /new | Form | post | adds a new flashcard (create) |
| /edit | Form | put | edits a flashcard (update) |
| /flashcards/:id | Show | delete | deletes a flashcard (destroy) |

## User Stories
As a user, I can see a list of all my flashcards when I visit the index page. \
As a user, I can click on one of my flashcards and have it take me to a show page that displays details about the card. \
As a user, I can add a new flashcard and see that it immediately loads on the page so that I know I successfully added a card. \
As a user, I can delete a flashcard so I can keep my list relevant. \
As a user, I can update a flashcard in case I made a typo. \
As a user, I can study cards by hovering to flip cards over on the Study page. \
As a user, I can choose how I study by selecting either the term or definition of each card to be face up.

## Technologies
REACT, react-router-dom, Sass

## Bonus Features
- When the screen is mobile sized, the header navigation condenses to a hamburger menu that slides down using a CSS keyframe animation.
- Users can visit the study page where they will find a list of cards that they can flip over by hovering their cursor over the card. To create this, I passed the flashcard data as a prop to a Study component which rendered a list of StudyCards. The flipping animation is accomplished using the transform property and CSS. Users can also click either the Term or Definition button to choose how they want to study. This change is accomplished by using the useState hook to change `studyByTerm` to either true or false. Ternary operators in the StudyCard component then decide whether to show the term or definition on the front of the card.

## Challenges
- An additional feature I wanted to add was a drop down filter that allowed the user to select the topic of cards they would like to study. I accomodated for this by including a Topic property in my Flashcard schema. I ran into some trouble with React state where I could not get the `topic` state to update properly. I could sometimes get all of the topics to show but the topics would disappear when the page was refreshed or not update when a card with a new topic was added. I hope to revisit this feature in the future, as I had ideas to implement it on the Index, Form, and Study pages.
- I had some trouble creating the card flip animations, but I was able to find a [helpful tutorial](https://www.w3schools.com/howto/howto_css_flip_card.asp) that explained how to accomplish what I wanted to.


## Future Ideas
- I would like to make the Study page a bit more robust. Ideally, I would like to find a way to randomize the order of the cards and show them one at a time. I also think it would be more user friendly to change the cards to have a button that the user can click to flip them.