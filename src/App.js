import React, { useState, useEffect } from 'react';
import './App.css'
import SingleCard from './componenets/SingleCard'


const images = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }
];

function App() {
  const [cards, setCard] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const suffeleCards = () => {

    const suffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({
        image: image,
        id: Math.random()
      }));
    setCard(suffledCards);
    setTurns(0);
  }
  //console.log(card , turns)

  //handling the choice 
  const handleChoice = (card) => {
    // console.log(card);

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(pT => pT+1);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.image.src === choiceTwo.image.src) {
        console.log("They are equal !!!");
        resetTurn();
      } else {
        console.log("They are not eqaual");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo])
  return (
    <div className="App">
      <h1>memo __ magic</h1>
      <button onClick={suffeleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (

          <SingleCard key={card.id}
            card={card}
            handleChoice={handleChoice}
          />

        ))}
      </div>
    </div>
  );
}

export default App